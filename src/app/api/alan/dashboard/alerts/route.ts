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

    const providers = await sql`
      SELECT id, name, risk_score, is_blacklisted, created_at
      FROM providers
      ORDER BY risk_score DESC
    `

    const alertProviders = providers.filter((p) => {
      const status = getProviderStatus(p.risk_score as number, p.is_blacklisted as boolean)
      return status === 'needs_review' || status === 'auto_held'
    })

    const result = await Promise.all(
      alertProviders.map(async (p) => {
        const flags = await sql`
          SELECT id, rule_triggered, score_contribution, month, year, details
          FROM fraud_flags WHERE provider_id = ${p.id as string}
        `
        return {
          id: p.id,
          name: p.name,
          risk_score: p.risk_score,
          is_blacklisted: p.is_blacklisted,
          status: getProviderStatus(p.risk_score as number, p.is_blacklisted as boolean),
          created_at: (p.created_at as Date).toISOString(),
          flag_count: flags.length,
          flags: flags.map((f) => ({
            id: f.id,
            rule_triggered: f.rule_triggered,
            score_contribution: f.score_contribution,
            month: f.month,
            year: f.year,
            details: f.details,
          })),
        }
      }),
    )

    return NextResponse.json(result)
  } catch (err) {
    console.error('GET /api/alan/dashboard/alerts error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
