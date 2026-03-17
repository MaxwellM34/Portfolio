import type { Metadata } from 'next'
import { LangProvider } from './_lib/lang-context'
import { AuthProvider } from './_lib/auth-context'

export const metadata: Metadata = {
  title: 'Alan Fraud Detection',
  description: 'Insurance fraud detection dashboard for Alan health insurance',
}

export default function AlanLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
    <LangProvider>
      <style>{`
        #alan-app {
          background: #f9fafb;
          font-family: system-ui, -apple-system, sans-serif;
        }
        #alan-app main h1, #alan-app main h2, #alan-app main h3, #alan-app main h4,
        #alan-app header h1, #alan-app header h2 {
          font-family: system-ui, -apple-system, sans-serif;
          color: #111827;
          margin: 0;
          letter-spacing: normal;
        }
        #alan-app main p, #alan-app header p {
          color: inherit;
          margin: 0;
          line-height: 1.5;
        }
        #alan-app main { color: #111827; }
        #alan-app header { color: #111827; }
      `}</style>
      <div
        id="alan-app"
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: '#f9fafb',
        }}
      >
        {children}
      </div>
    </LangProvider>
    </AuthProvider>
  )
}
