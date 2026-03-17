import { neon } from '@neondatabase/serverless'

// ---------------------------------------------------------------------------
// Connection
// ---------------------------------------------------------------------------

export function getDb() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL environment variable is not set')
  return neon(url)
}

// ---------------------------------------------------------------------------
// Schema initialisation (idempotent — safe to call on every cold start)
// ---------------------------------------------------------------------------

let schemaReady = false

export async function ensureSchema(): Promise<void> {
  if (schemaReady) return
  const sql = getDb()

  await sql`
    CREATE TABLE IF NOT EXISTS providers (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name        VARCHAR(255) NOT NULL,
      created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
      is_blacklisted BOOLEAN   NOT NULL DEFAULT FALSE,
      risk_score  FLOAT        NOT NULL DEFAULT 0
    )
  `
  await sql`
    CREATE TABLE IF NOT EXISTS claims (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      provider_id UUID NOT NULL REFERENCES providers(id) ON DELETE CASCADE,
      member_id   VARCHAR(255) NOT NULL,
      month       INTEGER      NOT NULL CHECK (month BETWEEN 1 AND 12),
      year        INTEGER      NOT NULL,
      category    VARCHAR(50)  NOT NULL CHECK (category IN ('Lunettes','Lentilles')),
      amount      FLOAT        NOT NULL,
      created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
    )
  `
  await sql`
    CREATE TABLE IF NOT EXISTS fraud_flags (
      id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      provider_id        UUID    NOT NULL REFERENCES providers(id) ON DELETE CASCADE,
      rule_triggered     VARCHAR(255) NOT NULL,
      score_contribution FLOAT   NOT NULL,
      month              INTEGER NOT NULL,
      year               INTEGER NOT NULL,
      details            JSONB   NOT NULL DEFAULT '{}',
      created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
  await sql`
    CREATE TABLE IF NOT EXISTS review_actions (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      provider_id UUID    NOT NULL REFERENCES providers(id) ON DELETE CASCADE,
      action      VARCHAR(50) NOT NULL CHECK (action IN ('approved','flagged','escalated','blacklisted')),
      note        TEXT    NOT NULL DEFAULT '',
      reviewed_by VARCHAR(255) NOT NULL,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
  schemaReady = true
}

// ---------------------------------------------------------------------------
// (Seed data removed — data is loaded via CSV import)
// ---------------------------------------------------------------------------

const PROVIDERS: Array<[string, Array<[number, number, string, number]>]> = [
  ['22 optics', [
    [2022, 8, 'Lentilles', 64.3],
    [2022, 12, 'Lentilles', 175.6],
    [2023, 2, 'Lentilles', 182.3],
  ]],
  ['abc optik', [
    [2022, 3, 'Lunettes', 201.91],
    [2022, 6, 'Lunettes', 261.41],
    [2022, 7, 'Lunettes', 227.41],
    [2022, 10, 'Lentilles', 200.0],
    [2022, 12, 'Lentilles', 176.0],
    [2022, 12, 'Lunettes', 449.91],
    [2023, 1, 'Lunettes', 412.21],
  ]],
  ['Cool opticos', [
    [2022, 2, 'Lentilles', 200.0],
    [2022, 5, 'Lunettes', 259.91],
    [2022, 6, 'Lunettes', 419.91],
    [2022, 7, 'Lunettes', 359.91],
    [2022, 10, 'Lunettes', 259.91],
    [2022, 11, 'Lunettes', 714.36],
    [2022, 12, 'Lunettes', 299.91],
    [2023, 3, 'Lunettes', 999.82],
    [2023, 4, 'Lunettes', 699.91],
    [2023, 5, 'Lunettes', 419.91],
    [2023, 6, 'Lunettes', 419.91],
  ]],
  ["Kylian's frames", [
    [2022, 1, 'Lunettes', 719.82],
    [2022, 1, 'Lentilles', 249.0],
    [2022, 2, 'Lentilles', 194.0],
    [2022, 2, 'Lunettes', 2894.28],
    [2022, 3, 'Lentilles', 550.0],
    [2022, 4, 'Lentilles', 180.0],
    [2022, 4, 'Lunettes', 999.82],
    [2022, 5, 'Lentilles', 780.0],
    [2022, 5, 'Lunettes', 1539.73],
    [2022, 6, 'Lunettes', 1249.64],
    [2022, 6, 'Lentilles', 360.0],
    [2022, 7, 'Lunettes', 2649.46],
    [2022, 7, 'Lentilles', 580.0],
    [2022, 8, 'Lentilles', 830.0],
    [2022, 8, 'Lunettes', 899.73],
    [2022, 9, 'Lunettes', 1809.64],
    [2022, 9, 'Lentilles', 790.0],
    [2022, 10, 'Lunettes', 0.0],
    [2022, 10, 'Lentilles', 300.0],
    [2022, 11, 'Lentilles', 180.0],
    [2022, 11, 'Lunettes', 1648.55],
    [2022, 12, 'Lentilles', 1097.0],
    [2022, 12, 'Lunettes', 22563.36],
    [2023, 1, 'Lentilles', 380.0],
    [2023, 1, 'Lunettes', 299.91],
    [2023, 2, 'Lunettes', 1139.73],
    [2023, 2, 'Lentilles', 600.0],
    [2023, 3, 'Lunettes', 419.91],
    [2023, 3, 'Lentilles', 105.0],
    [2023, 5, 'Lentilles', 300.0],
    [2023, 5, 'Lunettes', 0.0],
    [2023, 6, 'Lentilles', 850.0],
    [2023, 6, 'Lunettes', 0.0],
  ]],
  ['La classe à Dallas', [
    [2022, 1, 'Lunettes', 0.0],
    [2022, 2, 'Lunettes', 549.82],
    [2022, 9, 'Lunettes', 419.91],
    [2022, 11, 'Lunettes', 798.62],
    [2022, 12, 'Lunettes', 299.91],
    [2023, 1, 'Lunettes', 1099.73],
    [2023, 3, 'Lunettes', 564.82],
    [2023, 4, 'Lunettes', 299.94],
    [2023, 5, 'Lunettes', 668.62],
    [2023, 6, 'Lentilles', 152.0],
    [2023, 6, 'Lunettes', 508.42],
  ]],
  ['Les lunettes à Soso', [
    [2022, 1, 'Lentilles', 720.0],
    [2022, 2, 'Lentilles', 360.0],
    [2022, 2, 'Lunettes', 297.91],
    [2022, 3, 'Lunettes', 1321.64],
    [2022, 3, 'Lentilles', 900.0],
    [2022, 4, 'Lentilles', 900.0],
    [2022, 4, 'Lunettes', 2579.37],
    [2022, 5, 'Lentilles', 720.0],
    [2022, 5, 'Lunettes', 1459.73],
    [2022, 6, 'Lunettes', 643.82],
    [2022, 6, 'Lentilles', 540.0],
    [2022, 7, 'Lentilles', 540.0],
    [2022, 7, 'Lunettes', 879.82],
    [2022, 8, 'Lunettes', 379.91],
    [2022, 8, 'Lentilles', 180.0],
    [2022, 9, 'Lunettes', 379.91],
    [2022, 10, 'Lentilles', 540.0],
    [2022, 10, 'Lunettes', 1699.64],
    [2022, 11, 'Lunettes', 2349.46],
    [2022, 11, 'Lentilles', 540.0],
    [2022, 12, 'Lentilles', 18.0],
    [2022, 12, 'Lunettes', 9158.11],
    [2023, 1, 'Lentilles', 198.0],
    [2023, 1, 'Lunettes', 979.73],
    [2023, 2, 'Lentilles', 360.0],
    [2023, 2, 'Lunettes', 379.91],
    [2023, 3, 'Lunettes', 879.82],
    [2023, 3, 'Lentilles', 540.0],
    [2023, 4, 'Lentilles', 900.0],
    [2023, 5, 'Lunettes', 1549.64],
    [2023, 5, 'Lentilles', 126.0],
    [2023, 6, 'Lentilles', 108.0],
  ]],
  ['Mike lunettes', [
    [2022, 1, 'Lunettes', 599.82],
    [2022, 1, 'Lentilles', 230.0],
    [2022, 2, 'Lentilles', 300.0],
    [2022, 2, 'Lunettes', 419.91],
    [2022, 3, 'Lunettes', 419.91],
    [2022, 3, 'Lentilles', 300.0],
    [2022, 5, 'Lunettes', 1139.73],
    [2022, 5, 'Lentilles', 180.0],
    [2022, 6, 'Lentilles', 146.0],
    [2022, 6, 'Lunettes', 3644.28],
    [2022, 7, 'Lentilles', 100.0],
    [2022, 7, 'Lunettes', 239.91],
    [2022, 9, 'Lunettes', 1919.46],
    [2022, 9, 'Lentilles', 840.0],
    [2022, 11, 'Lunettes', 1199.73],
    [2022, 11, 'Lentilles', 840.0],
    [2022, 12, 'Lentilles', 132.0],
    [2022, 12, 'Lunettes', 2219.37],
    [2023, 3, 'Lentilles', 300.0],
    [2023, 3, 'Lunettes', 869.82],
    [2023, 4, 'Lentilles', 140.0],
    [2023, 5, 'Lentilles', 180.0],
    [2023, 6, 'Lunettes', 839.82],
    [2023, 6, 'Lentilles', 300.0],
  ]],
  ['Penthievre alambics', [
    [2022, 1, 'Lentilles', 900.0],
    [2022, 1, 'Lunettes', 1149.73],
    [2022, 2, 'Lentilles', 1083.0],
    [2022, 3, 'Lunettes', 2654.37],
    [2022, 3, 'Lentilles', 2416.62],
    [2022, 4, 'Lunettes', 379.91],
    [2022, 4, 'Lentilles', 985.0],
    [2022, 5, 'Lunettes', 1729.64],
    [2022, 5, 'Lentilles', 2822.0],
    [2022, 6, 'Lentilles', 21.0],
    [2022, 6, 'Lunettes', 1919.55],
    [2022, 7, 'Lentilles', 31.0],
    [2022, 7, 'Lunettes', 3269.19],
    [2022, 9, 'Lunettes', 1219.73],
    [2022, 9, 'Lentilles', 1372.0],
    [2022, 10, 'Lunettes', 2137.55],
    [2022, 10, 'Lentilles', 215.0],
    [2022, 11, 'Lentilles', 2213.0],
    [2022, 11, 'Lunettes', 3939.34],
    [2022, 12, 'Lunettes', 6307.86],
    [2022, 12, 'Lentilles', 4671.0],
    [2023, 1, 'Lentilles', 143.0],
    [2023, 1, 'Lunettes', 299.94],
    [2023, 2, 'Lentilles', 138.0],
    [2023, 2, 'Lunettes', 999.82],
    [2023, 4, 'Lentilles', 880.0],
    [2023, 4, 'Lunettes', 299.94],
    [2023, 5, 'Lunettes', 984.76],
    [2023, 5, 'Lentilles', 153.0],
    [2023, 6, 'Lentilles', 600.0],
    [2023, 6, 'Lunettes', 1369.70],
  ]],
  ['Queen optics', [
    [2022, 1, 'Lentilles', 193.0],
    [2022, 1, 'Lunettes', 719.82],
    [2022, 2, 'Lentilles', 600.0],
    [2022, 2, 'Lunettes', 1959.64],
    [2022, 3, 'Lentilles', 1.0],
    [2022, 3, 'Lunettes', 959.73],
    [2022, 4, 'Lunettes', 2584.34],
    [2022, 4, 'Lentilles', 882.0],
    [2022, 5, 'Lentilles', 2254.0],
    [2022, 5, 'Lunettes', 2294.37],
    [2022, 6, 'Lunettes', 844.73],
    [2022, 6, 'Lentilles', 111.0],
    [2022, 7, 'Lentilles', 780.0],
    [2022, 7, 'Lunettes', 1009.82],
    [2022, 8, 'Lentilles', 480.0],
    [2022, 8, 'Lunettes', 1864.55],
    [2022, 9, 'Lunettes', 279.91],
    [2022, 9, 'Lentilles', 300.0],
    [2022, 10, 'Lunettes', 719.82],
    [2022, 10, 'Lentilles', 780.0],
    [2022, 11, 'Lentilles', 250.0],
    [2022, 11, 'Lunettes', 1459.64],
    [2022, 12, 'Lunettes', 6943.38],
    [2022, 12, 'Lentilles', 2634.0],
    [2023, 1, 'Lunettes', 1789.55],
    [2023, 1, 'Lentilles', 2409.0],
    [2023, 2, 'Lentilles', 227.0],
    [2023, 2, 'Lunettes', 3564.28],
    [2023, 3, 'Lunettes', 199.91],
    [2023, 3, 'Lentilles', 141.0],
    [2023, 4, 'Lunettes', 964.73],
    [2023, 5, 'Lunettes', 3599.28],
    [2023, 5, 'Lentilles', 178.0],
    [2023, 6, 'Lentilles', 480.0],
    [2023, 6, 'Lunettes', 419.91],
  ]],
  ['Roudoudou lentilles', [
    [2022, 12, 'Lunettes', 8900.23],
    [2022, 12, 'Lentilles', 633.0],
    [2023, 1, 'Lentilles', 2326.0],
    [2023, 1, 'Lunettes', 839.73],
    [2023, 2, 'Lunettes', 2954.28],
    [2023, 2, 'Lentilles', 2193.0],
    [2023, 3, 'Lentilles', 3915.0],
    [2023, 3, 'Lunettes', 3779.10],
    [2023, 4, 'Lentilles', 1426.0],
    [2023, 4, 'Lunettes', 6965.67],
    [2023, 5, 'Lentilles', 460.0],
    [2023, 5, 'Lunettes', 769.73],
  ]],
  ['Runner glasses', [
    [2022, 2, 'Lentilles', 240.0],
    [2022, 4, 'Lunettes', 349.91],
    [2022, 4, 'Lentilles', 300.0],
    [2022, 6, 'Lentilles', 300.0],
    [2022, 6, 'Lunettes', 449.91],
    [2022, 9, 'Lunettes', 349.91],
    [2022, 9, 'Lentilles', 300.0],
    [2022, 10, 'Lunettes', 699.82],
    [2022, 10, 'Lentilles', 600.0],
    [2022, 11, 'Lentilles', 300.0],
    [2022, 12, 'Lentilles', 600.0],
    [2022, 12, 'Lunettes', 349.91],
    [2023, 1, 'Lentilles', 398.0],
    [2023, 3, 'Lentilles', 200.0],
    [2023, 4, 'Lunettes', 564.82],
    [2023, 4, 'Lentilles', 200.0],
    [2023, 5, 'Lentilles', 200.0],
  ]],
  ['Voodoo', [
    [2022, 1, 'Lunettes', 249.91],
    [2022, 3, 'Lentilles', 236.0],
    [2022, 9, 'Lentilles', 236.0],
    [2022, 12, 'Lentilles', 100.0],
    [2023, 2, 'Lunettes', 299.91],
  ]],
]

function randomMemberId(): string {
  return `MBR-${Math.floor(1000 + Math.random() * 9000)}`
}

let seeded = false

export async function ensureSeed(): Promise<void> {
  if (seeded) return
  const sql = getDb()
  const rows = await sql`SELECT COUNT(*)::int AS cnt FROM providers`
  const count = (rows[0] as { cnt: number }).cnt
  if (count > 0) {
    seeded = true
    return
  }

  for (const [name, claims] of PROVIDERS) {
    const providerRows = await sql`
      INSERT INTO providers (name) VALUES (${name}) RETURNING id
    `
    const providerId = (providerRows[0] as { id: string }).id
    for (const [year, month, category, amount] of claims) {
      await sql`
        INSERT INTO claims (provider_id, member_id, month, year, category, amount)
        VALUES (${providerId}, ${randomMemberId()}, ${month}, ${year}, ${category}, ${amount})
      `
    }
  }
  seeded = true
}

export async function initDb(): Promise<void> {
  await ensureSchema()
}
