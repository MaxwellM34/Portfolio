import { NextResponse } from 'next/server'
import { initDb, getDb } from '../../../../alan/_lib/db'

// Column aliases: maps various CSV header names → internal field names
const COLUMN_ALIASES: Record<string, string> = {
  // provider_name
  provider_name: 'provider_name',
  health_professional_name: 'provider_name',
  provider: 'provider_name',
  nom_prestataire: 'provider_name',
  prestataire: 'provider_name',
  // member_id
  member_id: 'member_id',
  membre: 'member_id',
  adherent: 'member_id',
  member: 'member_id',
  id_membre: 'member_id',
  // month
  month: 'month',
  mois: 'month',
  month_nb: 'month',
  // year
  year: 'year',
  annee: 'year',
  année: 'year',
  // category
  category: 'category',
  categorie: 'category',
  catégorie: 'category',
  primary_level_1: 'category',
  type: 'category',
  // amount
  amount: 'amount',
  montant: 'amount',
  'sum(alan_covered)': 'amount',
  sum_alan_covered: 'amount',
  alan_covered: 'amount',
}

// Try to extract a numeric month from various formats: "8", "Aug", "1 Aug", "2022-08", etc.
function parseMonth(val: string): number | null {
  const monthNames: Record<string, number> = {
    jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
    jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
    janvier: 1, fevrier: 2, mars: 3, avril: 4, mai: 5, juin: 6,
    juillet: 7, aout: 8, septembre: 9, octobre: 10, novembre: 11, decembre: 12,
  }

  // Check for date-like format e.g. "1 Aug" → extract month name
  const parts = val.trim().split(/[\s\-\/]+/)
  for (const part of parts) {
    const lower = part.toLowerCase().replace(/[^a-z]/g, '')
    if (monthNames[lower]) return monthNames[lower]
    // Check for 3-letter month abbreviation
    const abbr = lower.slice(0, 3)
    if (monthNames[abbr]) return monthNames[abbr]
  }

  // Try numeric
  const n = parseInt(val)
  if (!isNaN(n) && n >= 1 && n <= 12) return n

  return null
}

// Category mapping: maps various values → 'Lunettes' | 'Lentilles'
function parseCategory(val: string): string | null {
  const lower = val.toLowerCase().trim()
  if (lower === 'lunettes' || lower.includes('lunette') || lower.includes('glass') || lower === '1') return 'Lunettes'
  if (lower === 'lentilles' || lower.includes('lentille') || lower.includes('contact') || lower === '2') return 'Lentilles'
  return null
}

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

    // Parse and normalize headers using aliases
    const rawHeaders = (lines[0] ?? '').split(',').map((h) => h.trim().replace(/^"|"$/g, '').toLowerCase())
    const mappedHeaders = rawHeaders.map((h) => COLUMN_ALIASES[h] ?? h)

    // Check we have at minimum provider_name and at least one of month/year
    const hasProviderName = mappedHeaders.includes('provider_name')
    if (!hasProviderName) {
      const rawList = rawHeaders.join(', ')
      return NextResponse.json(
        {
          error: `CSV missing provider name column. Found: ${rawList}. Expected one of: provider_name, health_professional_name, provider`,
        },
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
      mappedHeaders.forEach((h, idx) => { row[h] = values[idx] ?? '' })

      const lineNo = i + 1

      // Provider name
      const providerName = row['provider_name']?.trim()
      if (!providerName) { errors.push(`Row ${lineNo}: missing provider name`); skipped++; continue }

      // Month — try 'month' field, fallback to parsing from original MONTH column
      let monthVal: number | null = null
      const monthRaw = row['month']?.trim() ?? ''
      if (monthRaw) {
        monthVal = parseMonth(monthRaw)
      }
      if (monthVal === null) {
        errors.push(`Row ${lineNo}: invalid month '${monthRaw}'`); skipped++; continue
      }

      // Year
      const yearRaw = row['year']?.trim() ?? ''
      let yearVal = parseInt(yearRaw)
      if (isNaN(yearVal) || yearVal < 2000 || yearVal > 2100) {
        errors.push(`Row ${lineNo}: invalid year '${yearRaw}'`); skipped++; continue
      }

      // Category — flexible parsing
      const categoryRaw = row['category']?.trim() ?? ''
      const category = parseCategory(categoryRaw)
      if (!category) {
        errors.push(`Row ${lineNo}: invalid category '${categoryRaw}' (expected: Lunettes or Lentilles, or 1/2)`)
        skipped++; continue
      }

      // Amount — handle "00:00" time format (treat as 0), and regular floats
      const amountRaw = row['amount']?.trim() ?? ''
      let amount = 0
      if (amountRaw.includes(':')) {
        // Time format like "00:00" or "1:30" — convert to decimal hours or treat as 0
        const [h, m] = amountRaw.split(':').map(Number)
        amount = (isNaN(h) ? 0 : h) * 60 + (isNaN(m) ? 0 : m)
      } else {
        amount = parseFloat(amountRaw.replace(',', '.'))
        if (isNaN(amount) || amount < 0) {
          errors.push(`Row ${lineNo}: invalid amount '${amountRaw}'`); skipped++; continue
        }
      }

      // Member ID — auto-generate if not present
      const memberId = row['member_id']?.trim() || `auto-${providerName.slice(0, 8)}-${monthVal}-${yearVal}`

      // Upsert provider
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
