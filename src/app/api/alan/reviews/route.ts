import { NextResponse } from 'next/server'
import { initDb, getDb } from '../../../alan/_lib/db'

export async function GET(req: Request) {
  try {
    await initDb()
    const sql = getDb()
    const { searchParams } = new URL(req.url)
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100)

    const rows = await sql`
      SELECT r.id, r.provider_id, p.name AS provider_name,
             r.action, r.note, r.reviewed_by, r.created_at
      FROM review_actions r
      JOIN providers p ON p.id = r.provider_id
      ORDER BY r.created_at DESC
      LIMIT ${limit}
    `

    return NextResponse.json(
      rows.map((r) => ({
        id: r.id,
        provider_id: r.provider_id,
        provider_name: r.provider_name,
        action: r.action,
        note: r.note,
        reviewed_by: r.reviewed_by,
        created_at: (r.created_at as Date).toISOString(),
      })),
    )
  } catch (err) {
    console.error('GET /api/alan/reviews error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
