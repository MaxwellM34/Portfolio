'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth, DEMO_USER, DEMO_PASS } from '../_lib/auth-context'
import { useLang } from '../_lib/lang-context'

export default function LoginPage() {
  const { isAuthenticated, login } = useAuth()
  const { t } = useLang()
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/alan/dashboard')
    }
  }, [isAuthenticated, router])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(() => {
      const ok = login(username, password)
      if (ok) {
        router.replace('/alan/dashboard')
      } else {
        setError(t.login.wrongCredentials)
        setLoading(false)
      }
    }, 600)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f9fafb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ width: '100%', maxWidth: '420px', padding: '0 1rem' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: '#1A2440',
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
            }}
          >
            <img
              src="/alan/alanlogo.png"
              alt="Alan"
              style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }}
            />
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
              Fraud Detection
            </span>
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '2rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          <h1
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#111827',
              marginBottom: '0.25rem',
            }}
          >
            {t.login.demoTitle}
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            {t.login.demoSubtitle}
          </p>

          {/* Demo hint */}
          <div
            style={{
              background: '#f0f9ff',
              border: '1px solid #bae6fd',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              marginBottom: '1.5rem',
              fontSize: '0.8rem',
              color: '#0369a1',
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
              {t.login.demoHintTitle}
            </div>
            <div>
              {t.login.user}: <strong>{DEMO_USER}</strong> &nbsp;/&nbsp; {t.login.password}:{' '}
              <strong>{DEMO_PASS}</strong>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#374151',
                  marginBottom: '0.375rem',
                }}
              >
                {t.login.username}
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                style={{
                  width: '100%',
                  padding: '0.625rem 0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  color: '#111827',
                  background: 'white',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#374151',
                  marginBottom: '0.375rem',
                }}
              >
                {t.login.password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                style={{
                  width: '100%',
                  padding: '0.625rem 0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  color: '#111827',
                  background: 'white',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  padding: '0.625rem 0.75rem',
                  color: '#dc2626',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !username || !password}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: loading || !username || !password ? '#9ca3af' : '#1A2440',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: loading || !username || !password ? 'not-allowed' : 'pointer',
                transition: 'background 0.15s',
              }}
            >
              {loading ? t.login.connecting : t.login.connect}
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.75rem', marginTop: '1.5rem' }}>
          {t.login.copyright}
        </p>
      </div>
    </div>
  )
}
