'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AUTH_KEY = 'alan_auth'
const DEMO_USER = 'alan'
const DEMO_PASS = 'demo1234'

interface AuthContextType {
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY)
    if (stored === 'true') setIsAuthenticated(true)
  }, [])

  function login(username: string, password: string): boolean {
    if (username === DEMO_USER && password === DEMO_PASS) {
      localStorage.setItem(AUTH_KEY, 'true')
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  function logout() {
    localStorage.removeItem(AUTH_KEY)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export { DEMO_USER, DEMO_PASS }
