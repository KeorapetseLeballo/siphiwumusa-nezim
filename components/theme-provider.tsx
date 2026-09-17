'use client'

import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { GlobalTheme } from '@carbon/react'

export type CarbonTheme = 'white' | 'g100'

export type ThemeContextValue = {
  theme: CarbonTheme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'white',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme: CarbonTheme = 'g100' // Dark mode only

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('cds--white', 'cds--g100')
    root.classList.add('cds--g100')
  }, [])

  const toggleTheme = () => {} // No-op since theme is locked

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalTheme theme="g100">{children}</GlobalTheme>
    </ThemeContext.Provider>
  )
}
