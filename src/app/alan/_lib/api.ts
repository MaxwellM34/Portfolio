// API client — calls /api/alan/... routes (no external backend needed)

export interface Provider {
  id: string
  name: string
  risk_score: number
  status: 'auto_approved' | 'needs_review' | 'auto_held' | 'blacklisted'
  is_blacklisted: boolean
  created_at: string
  total_amount?: number
  last_flagged?: string
}

export interface Claim {
  id: string
  provider_id: string
  member_id: string
  month: number
  year: number
  category: 'Lunettes' | 'Lentilles'
  amount: number
  created_at: string
}

export interface FraudFlag {
  id: string
  provider_id: string
  rule_triggered: string
  score_contribution: number
  month: number
  year: number
  details: Record<string, unknown>
  created_at: string
}

export interface ReviewAction {
  id: string
  provider_id: string
  provider_name?: string
  action: 'approved' | 'flagged' | 'escalated' | 'blacklisted'
  note: string
  reviewed_by: string
  created_at: string
}

export interface DashboardStats {
  total_providers: number
  total_flagged: number
  total_held: number
  total_claims_amount: number
  monthly_totals: { month: string; amount: number }[]
}

export interface DashboardAlert {
  id: string
  name: string
  risk_score: number
  status: string
  is_blacklisted: boolean
  created_at: string
  flag_count: number
  flags: FraudFlag[]
}

export interface ProviderDetail {
  provider: Provider
  claims: Claim[]
  flags: FraudFlag[]
  reviews: ReviewAction[]
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`/api/alan${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error')
    throw new Error(`API error ${response.status}: ${errorText}`)
  }

  return response.json()
}

export async function getProviders(): Promise<Provider[]> {
  return apiFetch<Provider[]>('/providers')
}

interface BackendProviderDetail {
  id: string
  name: string
  risk_score: number
  status: string
  is_blacklisted: boolean
  created_at: string
  claims: Array<Omit<Claim, 'provider_id'>>
  flags: Array<Omit<FraudFlag, 'provider_id'>>
  review_actions: Array<Omit<ReviewAction, 'provider_id'>>
}

export async function getProviderDetail(id: string): Promise<ProviderDetail> {
  const data = await apiFetch<BackendProviderDetail>(`/providers/${id}`)
  const provider: Provider = {
    id: data.id,
    name: data.name,
    risk_score: data.risk_score,
    status: data.status as Provider['status'],
    is_blacklisted: data.is_blacklisted,
    created_at: data.created_at,
  }
  const claims: Claim[] = data.claims.map((c) => ({ ...c, provider_id: id }))
  const flags: FraudFlag[] = data.flags.map((f) => ({ ...f, provider_id: id }))
  const reviews: ReviewAction[] = data.review_actions.map((r) => ({
    ...r,
    provider_id: id,
    action: r.action as ReviewAction['action'],
  }))
  return { provider, claims, flags, reviews }
}

export async function getClaims(filters?: {
  provider_id?: string
  month?: number
  year?: number
  category?: string
}): Promise<Claim[]> {
  const params = new URLSearchParams()
  if (filters?.provider_id) params.append('provider_id', filters.provider_id)
  if (filters?.month) params.append('month', String(filters.month))
  if (filters?.year) params.append('year', String(filters.year))
  if (filters?.category) params.append('category', filters.category)
  const query = params.toString() ? `?${params.toString()}` : ''
  return apiFetch<Claim[]>(`/claims${query}`)
}

export async function getDashboardStats(): Promise<DashboardStats> {
  return apiFetch<DashboardStats>('/dashboard/stats')
}

export async function getDashboardAlerts(): Promise<DashboardAlert[]> {
  return apiFetch<DashboardAlert[]>('/dashboard/alerts')
}

export async function getRecentReviews(): Promise<ReviewAction[]> {
  return apiFetch<ReviewAction[]>('/reviews?limit=10')
}

export async function submitReview(
  providerId: string,
  action: 'approved' | 'flagged' | 'escalated' | 'blacklisted',
  note: string,
  reviewedBy: string,
): Promise<ReviewAction> {
  return apiFetch<ReviewAction>(`/providers/${providerId}/review`, {
    method: 'POST',
    body: JSON.stringify({ action, note, reviewed_by: reviewedBy }),
  })
}

export async function runDetection(): Promise<{
  message: string
  providers_updated: number
}> {
  return apiFetch('/detection/run', { method: 'POST' })
}

export async function importCSV(
  file: File,
): Promise<{ imported: number; skipped: number; errors: string[] }> {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch('/api/alan/claims/import', {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error')
    throw new Error(`Import error ${response.status}: ${errorText}`)
  }

  return response.json()
}

export async function clearAllData(): Promise<{ cleared: boolean }> {
  return apiFetch('/clear', { method: 'DELETE' })
}
