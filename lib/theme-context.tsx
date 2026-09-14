'use client'

import { createContext } from 'react'

export type CarbonTheme = 'white' | 'g100'

export interface ThemeContextValue {
  theme: CarbonTheme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
