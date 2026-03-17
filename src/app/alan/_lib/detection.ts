import { getDb } from './db'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Claim {
  id: string
  provider_id: string
  member_id: string
  month: number
  year: number
  category: string
  amount: number
}

interface Provider {
  id: string
  name: string
  risk_score: number
  is_blacklisted: boolean
}

interface FraudFlagInput {
  provider_id: string
  rule_triggered: string
  score_contribution: number
  month: number
  year: number
  details: Record<string, unknown>
}

interface DetectionSummary {
  providers_evaluated: number
  monthly_spike_flags: number
  dual_product_flags: number
  repeated_amount_flags: number
  total_flags: number
  score_distribution: {
    auto_approved: number
    needs_review: number
    auto_held: number
    blacklisted: number
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function monthIndex(year: number, month: number): number {
  return year * 12 + month
}

function indexToYearMonth(idx: number): { year: number; month: number } {
  let year = Math.floor(idx / 12)
  let month = idx % 12
  if (month === 0) { year -= 1; month = 12 }
  return { year, month }
}

function median(arr: number[]): number {
  if (arr.length === 0) return 0
  const sorted = [...arr].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0
    ? ((sorted[mid - 1] ?? 0) + (sorted[mid] ?? 0)) / 2
    : (sorted[mid] ?? 0)
}

// ---------------------------------------------------------------------------
// Rule 1 — Monthly Spike
// ---------------------------------------------------------------------------

function ruleMonthlySpikeFlags(
  providerId: string,
  claims: Claim[],
): FraudFlagInput[] {
  const flags: FraudFlagInput[] = []

  // monthly totals per (category, year, month)
  const monthly = new Map<string, number>()
  for (const c of claims) {
    const key = `${c.category}|${c.year}|${c.month}`
    monthly.set(key, (monthly.get(key) ?? 0) + c.amount)
  }

  // category → sorted list of month indices
  const categoryMonths = new Map<string, number[]>()
  for (const [key] of monthly) {
    const [category, yr, mo] = key.split('|')
    if (!category || !yr || !mo) continue
    const idx = monthIndex(parseInt(yr), parseInt(mo))
    if (!categoryMonths.has(category)) categoryMonths.set(category, [])
    categoryMonths.get(category)!.push(idx)
  }

  for (const [category, rawIndices] of categoryMonths) {
    const sortedIdx = [...new Set(rawIndices)].sort((a, b) => a - b)

    for (const currentIdx of sortedIdx) {
      const preceding = sortedIdx.filter(
        (i) => i >= currentIdx - 6 && i < currentIdx,
      )
      if (preceding.length === 0) continue

      const precedingAmounts = preceding.map((idx) => {
        const { year, month } = indexToYearMonth(idx)
        return monthly.get(`${category}|${year}|${month}`) ?? 0
      })

      const med = median(precedingAmounts)
      if (med === 0) continue

      const { year: cy, month: cm } = indexToYearMonth(currentIdx)
      const currentAmount = monthly.get(`${category}|${cy}|${cm}`) ?? 0
      const ratio = currentAmount / med

      if (ratio > 5) {
        flags.push({
          provider_id: providerId,
          rule_triggered: 'monthly_spike',
          score_contribution: 30.0,
          month: cm,
          year: cy,
          details: {
            category,
            current_amount: Math.round(currentAmount * 100) / 100,
            median: Math.round(med * 100) / 100,
            ratio: Math.round(ratio * 100) / 100,
          },
        })
      }
    }
  }

  return flags
}

// ---------------------------------------------------------------------------
// Rule 2 — Dual Product
// ---------------------------------------------------------------------------

function ruleDualProductFlags(
  providerId: string,
  claims: Claim[],
): FraudFlagInput[] {
  // month_categories[(year, month)] = { category: total_amount }
  const monthCats = new Map<string, Map<string, number>>()
  for (const c of claims) {
    const key = `${c.year}|${c.month}`
    if (!monthCats.has(key)) monthCats.set(key, new Map())
    const cats = monthCats.get(key)!
    cats.set(c.category, (cats.get(c.category) ?? 0) + c.amount)
  }

  const activeMonths = monthCats.size
  if (activeMonths === 0) return []

  const dualMonths: Array<{
    year: number
    month: number
    lunettes: number
    lentilles: number
  }> = []

  for (const [key, cats] of monthCats) {
    const [yr, mo] = key.split('|')
    const lunettes = cats.get('Lunettes') ?? 0
    const lentilles = cats.get('Lentilles') ?? 0
    if (lunettes > 0 && lentilles > 0) {
      dualMonths.push({
        year: parseInt(yr!),
        month: parseInt(mo!),
        lunettes,
        lentilles,
      })
    }
  }

  dualMonths.sort((a, b) =>
    a.year !== b.year ? a.year - b.year : a.month - b.month,
  )

  const dualRatio = dualMonths.length / activeMonths
  if (dualRatio < 0.5) return []

  const score = Math.min(50, Math.round(dualRatio * 50))
  const last = dualMonths[dualMonths.length - 1]!

  return [
    {
      provider_id: providerId,
      rule_triggered: 'dual_product',
      score_contribution: score,
      month: last.month,
      year: last.year,
      details: {
        dual_ratio: Math.round(dualRatio * 100) / 100,
        dual_count: dualMonths.length,
        active_months: activeMonths,
        months: dualMonths.map((m) => ({
          year: m.year,
          month: m.month,
          lunettes: Math.round(m.lunettes * 100) / 100,
          lentilles: Math.round(m.lentilles * 100) / 100,
        })),
      },
    },
  ]
}

// ---------------------------------------------------------------------------
// Rule 3 — Repeated Amount
// ---------------------------------------------------------------------------

function ruleRepeatedAmountFlags(
  providerId: string,
  claims: Claim[],
): FraudFlagInput[] {
  const flags: FraudFlagInput[] = []

  // group by (category, amount)
  const caGroups = new Map<string, Claim[]>()
  for (const c of claims) {
    const key = `${c.category}|${c.amount}`
    if (!caGroups.has(key)) caGroups.set(key, [])
    caGroups.get(key)!.push(c)
  }

  const flaggedPairs = new Set<string>()

  for (const [key, group] of caGroups) {
    const [category, amountStr] = key.split('|')
    const amount = parseFloat(amountStr ?? '0')
    if (amount === 0) continue
    if (flaggedPairs.has(key)) continue

    const sorted = [...group].sort((a, b) =>
      a.year !== b.year ? a.year - b.year : a.month - b.month,
    )

    for (const anchor of sorted) {
      const anchorIdx = monthIndex(anchor.year, anchor.month)
      const windowStart = anchorIdx - 11

      const inWindow = sorted.filter((c) => {
        const ci = monthIndex(c.year, c.month)
        return ci >= windowStart && ci <= anchorIdx
      })

      if (inWindow.length >= 3) {
        const monthsSeen = [
          ...new Set(inWindow.map((c) => `${c.year}-${c.month}`)),
        ]
          .sort()
          .map((s) => {
            const [y, m] = s.split('-')
            return { year: parseInt(y!), month: parseInt(m!) }
          })

        flags.push({
          provider_id: providerId,
          rule_triggered: 'repeated_amount',
          score_contribution: 20.0,
          month: anchor.month,
          year: anchor.year,
          details: {
            category,
            amount,
            occurrences: inWindow.length,
            months_seen: monthsSeen,
          },
        })
        flaggedPairs.add(key)
        break
      }
    }
  }

  return flags
}

// ---------------------------------------------------------------------------
// Public entry point
// ---------------------------------------------------------------------------

export async function runDetection(): Promise<DetectionSummary> {
  const sql = getDb()

  // 1. Clear existing flags
  await sql`DELETE FROM fraud_flags`

  // 2. Load all claims
  const claims = (await sql`
    SELECT id, provider_id, member_id, month, year, category, amount
    FROM claims
  `) as Claim[]

  // 3. Load all providers
  const providers = (await sql`
    SELECT id, name, risk_score, is_blacklisted FROM providers
  `) as Provider[]

  // Group claims by provider
  const providerClaims = new Map<string, Claim[]>()
  for (const c of claims) {
    if (!providerClaims.has(c.provider_id))
      providerClaims.set(c.provider_id, [])
    providerClaims.get(c.provider_id)!.push(c)
  }

  const summary: DetectionSummary = {
    providers_evaluated: providers.length,
    monthly_spike_flags: 0,
    dual_product_flags: 0,
    repeated_amount_flags: 0,
    total_flags: 0,
    score_distribution: {
      auto_approved: 0,
      needs_review: 0,
      auto_held: 0,
      blacklisted: 0,
    },
  }

  const scoreAccumulator = new Map<string, number>()
  const allFlags: FraudFlagInput[] = []

  for (const provider of providers) {
    const pClaims = providerClaims.get(provider.id) ?? []

    const spikeFlags = ruleMonthlySpikeFlags(provider.id, pClaims)
    const dualFlags = ruleDualProductFlags(provider.id, pClaims)
    const repeatFlags = ruleRepeatedAmountFlags(provider.id, pClaims)

    const pFlags = [...spikeFlags, ...dualFlags, ...repeatFlags]
    allFlags.push(...pFlags)

    const total = pFlags.reduce((s, f) => s + f.score_contribution, 0)
    scoreAccumulator.set(provider.id, Math.min(total, 100))

    summary.monthly_spike_flags += spikeFlags.length
    summary.dual_product_flags += dualFlags.length
    summary.repeated_amount_flags += repeatFlags.length
  }

  summary.total_flags = allFlags.length

  // 4. Save flags
  for (const flag of allFlags) {
    await sql`
      INSERT INTO fraud_flags
        (provider_id, rule_triggered, score_contribution, month, year, details)
      VALUES (
        ${flag.provider_id},
        ${flag.rule_triggered},
        ${flag.score_contribution},
        ${flag.month},
        ${flag.year},
        ${JSON.stringify(flag.details)}
      )
    `
  }

  // 5. Update provider risk scores
  for (const provider of providers) {
    const newScore = scoreAccumulator.get(provider.id) ?? 0
    await sql`
      UPDATE providers SET risk_score = ${newScore} WHERE id = ${provider.id}
    `

    if (provider.is_blacklisted) {
      summary.score_distribution.blacklisted++
    } else if (newScore === 0) {
      summary.score_distribution.auto_approved++
    } else if (newScore <= 70) {
      summary.score_distribution.needs_review++
    } else {
      summary.score_distribution.auto_held++
    }
  }

  return summary
}
