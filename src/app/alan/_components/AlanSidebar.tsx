'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '../_lib/lang-context'
import { cn } from '../_lib/utils'

export function AlanSidebar() {
  const pathname = usePathname()
  const { t } = useLang()

  const navItems = [
    {
      href: '/alan/dashboard',
      label: t.nav.dashboard,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      href: '/alan/providers',
      label: t.nav.providers,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      href: '/alan/import',
      label: t.nav.import,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
  ]

  return (
    <aside
      className="flex flex-col h-full"
      style={{ backgroundColor: '#1A2440', width: '240px', minWidth: '240px' }}
    >
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <Link href="/alan/dashboard" className="flex items-center gap-3">
          <img
            src="/alan/alanlogo.png"
            alt="Alan"
            className="h-8 w-auto object-contain brightness-0 invert"
          />
          <p className="text-white/50 text-xs leading-tight m-0">Fraud Detection</p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <p className="text-white/30 text-xs font-semibold uppercase tracking-wider px-3 py-2 m-0">
          {t.nav.navigation}
        </p>
        {navItems.map((item) => {
          const isActive =
            item.href === '/alan/dashboard'
              ? pathname === '/alan/dashboard' || pathname === '/alan'
              : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                isActive
                  ? 'bg-white/15 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10',
              )}
            >
              <span className={isActive ? 'text-white' : 'text-white/50'}>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Back to portfolio */}
      <div className="px-3 py-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
      </div>
    </aside>
  )
}
