'use client'

import { Column, Grid } from '@carbon/react'
import { VISION, MISSION } from '@/constants'

export function VisionSection() {
  return (
    <section className="portfolio-section portfolio-section--dark" id="vision">
      <Grid className="portfolio-grid">
        <Column sm={4} md={3} lg={4} xlg={4} max={4}>
          <p className="eyebrow">02 / Direction</p>
        </Column>
        <Column sm={4} md={5} lg={8} xlg={8} max={8}>
          <div className="direction-grid">
            <div>
              <p className="mini-label">Our vision</p>
              <h2>{VISION}</h2>
            </div>
            <div>
              <p className="mini-label">Our mission</p>
              <p className="direction-copy">{MISSION}</p>
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  )
}
