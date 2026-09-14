'use client'

import { Column, Grid } from '@carbon/react'
import { ServiceCard } from '@/components/service-card'
import { ServiceCarousel } from '@/components/service-carousel'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { SERVICES } from '@/constants'

export function ServicesSection() {
  const isMobile = useIsMobile()

  return (
    <section className="portfolio-section" id="services">
      <Grid className="portfolio-grid">
        <Column sm={4} md={3} lg={4} xlg={4} max={4}>
          <p className="eyebrow">03 / Capabilities</p>
        </Column>
        <Column sm={4} md={5} lg={8} xlg={8} max={8}>
          <h2 className="section-heading">Built for the work ahead.</h2>
          {isMobile ? (
            <ServiceCarousel />
          ) : (
            <div className="service-grid">
              {SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  number={service.id}
                  title={service.title}
                  description={service.description}
                  iconName={service.icon}
                />
              ))}
            </div>
          )}
        </Column>
      </Grid>
    </section>
  )
}
