import type { Metadata } from 'next'
import { LangProvider } from './_lib/lang-context'

export const metadata: Metadata = {
  title: 'Alan Fraud Detection',
  description: 'Insurance fraud detection dashboard for Alan health insurance',
}

export default function AlanLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
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
  )
}
