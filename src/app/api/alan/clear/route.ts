import { NextResponse } from 'next/server'
import { getDb } from '../../../alan/_lib/db'

export async function DELETE() {
  try {
    const sql = getDb()
    // Delete in dependency order (FK constraints)
    await sql`DELETE FROM review_actions`
    await sql`DELETE FROM fraud_flags`
    await sql`DELETE FROM claims`
    await sql`DELETE FROM providers`
    return NextResponse.json({ cleared: true })
  } catch (err) {
    console.error('DELETE /api/alan/clear error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
