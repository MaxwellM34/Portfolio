import { NextResponse } from 'next/server'
import { initDb, getDb } from '../../../../alan/_lib/db'

function getProviderStatus(riskScore: number, isBlacklisted: boolean): string {
  if (isBlacklisted) return 'blacklisted'
  if (riskScore >= 70) return 'auto_held'
  if (riskScore >= 30) return 'needs_review'
  return 'auto_approved'
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await initDb()
    const sql = getDb()
    const { id } = await params

    const providers = await sql`
      SELECT id, name, risk_score, is_blacklisted, created_at
      FROM providers WHERE id = ${id}
    `
    if (providers.length === 0) {
      return NextResponse.json({ error: 'Provider not found' }, { status: 404 })
    }

    const p = providers[0]!
    const claims = await sql`
      SELECT id, member_id, month, year, category, amount, created_at
      FROM claims WHERE provider_id = ${id}
      ORDER BY year ASC, month ASC
    `
    const flags = await sql`
      SELECT id, rule_triggered, score_contribution, month, year, details, created_at
      FROM fraud_flags WHERE provider_id = ${id}
      ORDER BY created_at DESC
    `
    const reviews = await sql`
      SELECT id, action, note, reviewed_by, created_at
      FROM review_actions WHERE provider_id = ${id}
      ORDER BY created_at DESC
    `

    return NextResponse.json({
      id: p.id,
      name: p.name,
      risk_score: p.risk_score,
      is_blacklisted: p.is_blacklisted,
      status: getProviderStatus(p.risk_score as number, p.is_blacklisted as boolean),
      created_at: (p.created_at as Date).toISOString(),
      claims: claims.map((c) => ({
        id: c.id,
        member_id: c.member_id,
        month: c.month,
        year: c.year,
        category: c.category,
        amount: c.amount,
        created_at: (c.created_at as Date).toISOString(),
      })),
      flags: flags.map((f) => ({
        id: f.id,
        rule_triggered: f.rule_triggered,
        score_contribution: f.score_contribution,
        month: f.month,
        year: f.year,
        details: f.details,
        created_at: (f.created_at as Date).toISOString(),
      })),
      review_actions: reviews.map((r) => ({
        id: r.id,
        action: r.action,
        note: r.note,
        reviewed_by: r.reviewed_by,
        created_at: (r.created_at as Date).toISOString(),
      })),
    })
  } catch (err) {
    console.error('GET /api/alan/providers/[id] error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
