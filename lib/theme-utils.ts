import type { CarbonTheme } from './types'

/**
 * Apply theme class to document root
 */
export function applyThemeToRoot(theme: CarbonTheme): void {
  if (typeof document === 'undefined') return
  
  const root = document.documentElement
  root.classList.remove('cds--white', 'cds--g100')
  root.classList.add(`cds--${theme}`)
}

/**
 * Toggle between light and dark themes
 */
export function getNextTheme(currentTheme: CarbonTheme): CarbonTheme {
  return currentTheme === 'white' ? 'g100' : 'white'
}
