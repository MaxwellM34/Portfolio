import { NextResponse } from 'next/server'
import { initDb, getDb } from '../../../../../alan/_lib/db'

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await initDb()
    const sql = getDb()
    const { id } = await params

    const body = await req.json() as {
      action: 'approved' | 'flagged' | 'escalated' | 'blacklisted'
      note?: string
      reviewed_by: string
    }

    const { action, note = '', reviewed_by } = body

    if (!action || !reviewed_by) {
      return NextResponse.json({ error: 'action and reviewed_by are required' }, { status: 400 })
    }

    const providers = await sql`SELECT id, is_blacklisted FROM providers WHERE id = ${id}`
    if (providers.length === 0) {
      return NextResponse.json({ error: 'Provider not found' }, { status: 404 })
    }

    const provider = providers[0]!

    if (action === 'blacklisted' && !provider.is_blacklisted) {
      await sql`UPDATE providers SET is_blacklisted = TRUE WHERE id = ${id}`
    } else if (action === 'approved' && provider.is_blacklisted) {
      await sql`UPDATE providers SET is_blacklisted = FALSE WHERE id = ${id}`
    }

    const result = await sql`
      INSERT INTO review_actions (provider_id, action, note, reviewed_by)
      VALUES (${id}, ${action}, ${note}, ${reviewed_by})
      RETURNING id, action, note, reviewed_by, created_at
    `
    const r = result[0]!

    return NextResponse.json({
      id: r.id,
      action: r.action,
      note: r.note,
      reviewed_by: r.reviewed_by,
      created_at: (r.created_at as Date).toISOString(),
    })
  } catch (err) {
    console.error('POST /api/alan/providers/[id]/review error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
