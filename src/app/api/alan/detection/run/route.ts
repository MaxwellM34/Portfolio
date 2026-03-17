import { NextResponse } from 'next/server'
import { initDb } from '../../../../alan/_lib/db'
import { runDetection } from '../../../../alan/_lib/detection'

export async function POST() {
  try {
    await initDb()
    const summary = await runDetection()
    return NextResponse.json({
      message: 'Detection complete',
      providers_updated: summary.providers_evaluated,
      summary,
    })
  } catch (err) {
    console.error('POST /api/alan/detection/run error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 },
    )
  }
}
