export type CarbonTheme = 'white' | 'g100'

export type ThemeContextValue = {
  theme: CarbonTheme
  toggleTheme: () => void
}
