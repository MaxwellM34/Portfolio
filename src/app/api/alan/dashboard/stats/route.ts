import { NextResponse } from 'next/server'
import { initDb, getDb } from '../../../../alan/_lib/db'

function getProviderStatus(riskScore: number, isBlacklisted: boolean): string {
  if (isBlacklisted) return 'blacklisted'
  if (riskScore >= 70) return 'auto_held'
  if (riskScore >= 30) return 'needs_review'
  return 'auto_approved'
}

export async function GET() {
  try {
    await initDb()
    const sql = getDb()

    const providers = await sql`SELECT risk_score, is_blacklisted FROM providers`
    const total_providers = providers.length
    const total_flagged = providers.filter(
      (p) => getProviderStatus(p.risk_score as number, p.is_blacklisted as boolean) === 'needs_review',
    ).length
    const total_held = providers.filter(
      (p) => getProviderStatus(p.risk_score as number, p.is_blacklisted as boolean) === 'auto_held',
    ).length

    const claims = await sql`SELECT year, month, amount FROM claims`
    const total_claims_amount = Math.round(
      (claims as { amount: number }[]).reduce((sum, c) => sum + c.amount, 0) * 100,
    ) / 100

    const monthlyMap: Record<string, number> = {}
    for (const c of claims as { year: number; month: number; amount: number }[]) {
      const key = `${c.year}-${String(c.month).padStart(2, '0')}`
      monthlyMap[key] = (monthlyMap[key] ?? 0) + c.amount
    }
    const monthly_totals = Object.entries(monthlyMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }))

    return NextResponse.json({
      total_providers,
      total_flagged,
      total_held,
      total_claims_amount,
      monthly_totals,
    })
  } catch (err) {
    console.error('GET /api/alan/dashboard/stats error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
