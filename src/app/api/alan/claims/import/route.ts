import { NextResponse } from 'next/server'
import { initDb, getDb } from '../../../../alan/_lib/db'

export async function POST(req: Request) {
  try {
    await initDb()
    const sql = getDb()

    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }
    if (!file.name.toLowerCase().endsWith('.csv')) {
      return NextResponse.json({ error: 'File must be a CSV (.csv extension required)' }, { status: 422 })
    }

    const text = await file.text()
    const lines = text.trim().split('\n')
    if (lines.length < 2) {
      return NextResponse.json({ error: 'CSV file is empty or has no data rows' }, { status: 422 })
    }

    const rawHeaders = (lines[0] ?? '').split(',').map((h) => h.trim().replace(/^"|"$/g, '').toLowerCase())
    const required = ['provider_name', 'member_id', 'month', 'year', 'category', 'amount']
    const missing = required.filter((col) => !rawHeaders.includes(col))
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `CSV missing required columns: ${missing.join(', ')}` },
        { status: 422 },
      )
    }

    const providerCache: Record<string, string> = {}
    let imported = 0
    let skipped = 0
    const errors: string[] = []

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i]
      if (!line?.trim()) continue

      const values = line.split(',').map((v) => v.trim().replace(/^"|"$/g, ''))
      const row: Record<string, string> = {}
      rawHeaders.forEach((h, idx) => { row[h] = values[idx] ?? '' })

      const lineNo = i + 1

      const providerName = row['provider_name']?.trim()
      if (!providerName) { errors.push(`Row ${lineNo}: missing provider_name`); skipped++; continue }

      const memberId = row['member_id']?.trim()
      if (!memberId) { errors.push(`Row ${lineNo}: missing member_id`); skipped++; continue }

      const monthVal = parseInt(row['month'] ?? '')
      if (isNaN(monthVal) || monthVal < 1 || monthVal > 12) {
        errors.push(`Row ${lineNo}: invalid month '${row['month']}'`); skipped++; continue
      }

      const yearVal = parseInt(row['year'] ?? '')
      if (isNaN(yearVal) || yearVal < 2000 || yearVal > 2100) {
        errors.push(`Row ${lineNo}: invalid year '${row['year']}'`); skipped++; continue
      }

      const category = row['category']?.trim()
      if (category !== 'Lunettes' && category !== 'Lentilles') {
        errors.push(`Row ${lineNo}: invalid category '${category}' (must be 'Lunettes' or 'Lentilles')`)
        skipped++; continue
      }

      const amount = parseFloat(row['amount'] ?? '')
      if (isNaN(amount) || amount < 0) {
        errors.push(`Row ${lineNo}: invalid amount '${row['amount']}'`); skipped++; continue
      }

      if (!providerCache[providerName]) {
        const existing = await sql`SELECT id FROM providers WHERE name = ${providerName}`
        if (existing.length > 0) {
          providerCache[providerName] = (existing[0] as { id: string }).id
        } else {
          const created = await sql`INSERT INTO providers (name) VALUES (${providerName}) RETURNING id`
          providerCache[providerName] = (created[0] as { id: string }).id
        }
      }

      const providerId = providerCache[providerName]!
      await sql`
        INSERT INTO claims (provider_id, member_id, month, year, category, amount)
        VALUES (${providerId}, ${memberId}, ${monthVal}, ${yearVal}, ${category}, ${amount})
      `
      imported++
    }

    return NextResponse.json({ imported, skipped, errors })
  } catch (err) {
    console.error('POST /api/alan/claims/import error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
