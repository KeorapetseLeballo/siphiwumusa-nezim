'use client'

import { Checkmark } from '@carbon/icons-react'
import { Column, Grid } from '@carbon/react'
import { OBJECTIVES } from '@/constants'

export function ApproachSection() {
  return (
    <section className="portfolio-section portfolio-section--light" id="approach">
      <Grid className="portfolio-grid">
        <Column sm={4} md={3} lg={4} xlg={4} max={4}>
          <p className="eyebrow">04 / What drives us</p>
        </Column>
        <Column sm={4} md={5} lg={8} xlg={8} max={8}>
          <h2 className="section-heading">
            Careful planning. Quality workmanship. Responsible management.
          </h2>
          <p className="section-copy">
            Every project is executed with attention to safety, cost control, regulatory compliance 
            and timely delivery. We work closely with clients, consultants, suppliers and communities 
            to achieve sustainable, dependable results.
          </p>
          <ul className="objective-list">
            {OBJECTIVES.map((objective) => (
              <li key={objective}>
                <Checkmark size={20} />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </Column>
      </Grid>
    </section>
  )
}
