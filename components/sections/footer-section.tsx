'use client'

import { Column, Grid } from '@carbon/react'
import { COMPANY_INFO } from '@/constants'

export function FooterSection() {
  return (
    <footer className="portfolio-footer">
      <Grid className="portfolio-grid">
        <Column sm={4} md={8} lg={8} xlg={8} max={8}>
          <strong>{COMPANY_INFO.name.toUpperCase()}</strong>
          <span>{COMPANY_INFO.legalEntity}</span>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4} max={4}>
          <a href="#top">Back to top ↑</a>
        </Column>
      </Grid>
    </footer>
  )
}
