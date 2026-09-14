import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Siphiwumusa Nezimangaliso | Construction & Civil Engineering',
  description:
    'Reliable, cost-effective construction, civil engineering and infrastructure solutions in South Africa.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
