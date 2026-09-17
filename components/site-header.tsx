'use client'

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
} from '@carbon/react'
import { COMPANY_INFO, LOGO_URL } from '@/constants'

export function SiteHeader() {
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
      </HeaderGlobalBar>
    </Header>
  )
}
