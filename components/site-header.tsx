'use client'

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from '@carbon/react'
import { Asleep, Light } from '@carbon/icons-react'
import { useTheme } from '@/components/theme-provider'
import { COMPANY_INFO, LOGO_URL } from '@/constants'

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'g100'

  return (
    <Header aria-label={COMPANY_INFO.name}>
      <SkipToContent />
      <HeaderName href="#top" prefix={COMPANY_INFO.shortName}>
        {COMPANY_INFO.name}
      </HeaderName>
      <HeaderNavigation aria-label="Main navigation">
        <HeaderMenuItem href="#about">About</HeaderMenuItem>
        <HeaderMenuItem href="#services">Services</HeaderMenuItem>
        <HeaderMenuItem href="#approach">Approach</HeaderMenuItem>
        <HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <div className="header-logo" aria-label={`${COMPANY_INFO.name} logo`}>
          <img src={LOGO_URL} alt={`${COMPANY_INFO.shortName} monogram logo`} />
        </div>
        <HeaderGlobalAction
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          tooltipAlignment="end"
          onClick={toggleTheme}
        >
          {isDark ? <Light size={20} /> : <Asleep size={20} />}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  )
}
