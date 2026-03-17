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
          color: #111827;
          background: #f9fafb;
          font-family: system-ui, -apple-system, sans-serif;
        }
        #alan-app h1, #alan-app h2, #alan-app h3, #alan-app h4 {
          font-family: system-ui, -apple-system, sans-serif;
          color: #111827;
          margin: 0;
          letter-spacing: normal;
        }
        #alan-app p {
          color: inherit;
          margin: 0;
          line-height: 1.5;
        }
        #alan-app a {
          color: inherit;
        }
      `}</style>
      <div
        id="alan-app"
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: '#f9fafb',
          color: '#111827',
        }}
      >
        {children}
      </div>
    </LangProvider>
    </AuthProvider>
  )
}
