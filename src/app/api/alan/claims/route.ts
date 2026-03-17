import { NextResponse } from 'next/server'
import { initDb, getDb } from '../../../alan/_lib/db'

export async function GET(req: Request) {
  try {
    await initDb()
    const sql = getDb()
    const { searchParams } = new URL(req.url)

    const provider_id = searchParams.get('provider_id')
    const year = searchParams.get('year')
    const month = searchParams.get('month')
    const category = searchParams.get('category')

    let rows
    if (provider_id) {
      rows = await sql`
        SELECT c.id, c.provider_id, p.name AS provider_name,
               c.member_id, c.month, c.year, c.category, c.amount, c.created_at
        FROM claims c
        JOIN providers p ON p.id = c.provider_id
        WHERE c.provider_id = ${provider_id}
        ORDER BY c.year ASC, c.month ASC
      `
    } else if (year && month && category) {
      rows = await sql`
        SELECT c.id, c.provider_id, p.name AS provider_name,
               c.member_id, c.month, c.year, c.category, c.amount, c.created_at
        FROM claims c
        JOIN providers p ON p.id = c.provider_id
        WHERE c.year = ${parseInt(year)} AND c.month = ${parseInt(month)} AND c.category = ${category}
        ORDER BY c.year ASC, c.month ASC
        LIMIT 500
      `
    } else if (year && month) {
      rows = await sql`
        SELECT c.id, c.provider_id, p.name AS provider_name,
               c.member_id, c.month, c.year, c.category, c.amount, c.created_at
        FROM claims c
        JOIN providers p ON p.id = c.provider_id
        WHERE c.year = ${parseInt(year)} AND c.month = ${parseInt(month)}
        ORDER BY c.year ASC, c.month ASC
        LIMIT 500
      `
    } else if (year) {
      rows = await sql`
        SELECT c.id, c.provider_id, p.name AS provider_name,
               c.member_id, c.month, c.year, c.category, c.amount, c.created_at
        FROM claims c
        JOIN providers p ON p.id = c.provider_id
        WHERE c.year = ${parseInt(year)}
        ORDER BY c.year ASC, c.month ASC
        LIMIT 500
      `
    } else {
      rows = await sql`
        SELECT c.id, c.provider_id, p.name AS provider_name,
               c.member_id, c.month, c.year, c.category, c.amount, c.created_at
        FROM claims c
        JOIN providers p ON p.id = c.provider_id
        ORDER BY c.year ASC, c.month ASC
        LIMIT 500
      `
    }

    return NextResponse.json(
      rows.map((c) => ({
        id: c.id,
        provider_id: c.provider_id,
        provider_name: c.provider_name,
        member_id: c.member_id,
        month: c.month,
        year: c.year,
        category: c.category,
        amount: c.amount,
        created_at: (c.created_at as Date).toISOString(),
      })),
    )
  } catch (err) {
    console.error('GET /api/alan/claims error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
