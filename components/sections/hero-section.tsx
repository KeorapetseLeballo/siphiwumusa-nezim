'use client'

import { ArrowRight } from '@carbon/icons-react'
import { Button, Column, Grid, Tag } from '@carbon/react'
import { COMPANY_INFO } from '@/constants'

export function HeroSection() {
  return (
    <section className="portfolio-hero" id="top">
      <Grid className="portfolio-grid">
        <Column sm={4} md={8} lg={8} xlg={8} max={8}>
          <Tag type="outline" size="md">
            {COMPANY_INFO.tagline}
          </Tag>
          <h1 className="portfolio-hero__title">
            Building the infrastructure that moves communities forward.
          </h1>
          <p className="portfolio-hero__lede">
            {COMPANY_INFO.description}
          </p>
          <div className="portfolio-hero__actions">
            <Button href="#contact" renderIcon={ArrowRight}>
              Start a conversation
            </Button>
            <Button kind="tertiary" href="#services">
              Explore capabilities
            </Button>
          </div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4} max={4} className="portfolio-hero__brand">
          <div className="hero-blueprint">
            <span className="hero-blueprint__line" />
            <span className="hero-blueprint__number">01</span>
            <span className="hero-blueprint__label">
              Civil engineering<br />
              Infrastructure<br />
              Built to last
            </span>
          </div> 
        </Column>
      </Grid>
    </section>
  )
}
