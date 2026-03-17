import { NextResponse } from 'next/server'
import { initDb, getDb } from '../../../alan/_lib/db'

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

    const rows = await sql`
      SELECT id, name, risk_score, is_blacklisted, created_at
      FROM providers
      ORDER BY risk_score DESC
    `

    const providers = rows.map((p) => ({
      id: p.id,
      name: p.name,
      risk_score: p.risk_score,
      is_blacklisted: p.is_blacklisted,
      status: getProviderStatus(p.risk_score as number, p.is_blacklisted as boolean),
      created_at: (p.created_at as Date).toISOString(),
    }))

    return NextResponse.json(providers)
  } catch (err) {
    console.error('GET /api/alan/providers error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
