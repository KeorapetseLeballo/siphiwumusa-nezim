'use client'

import { Column, Grid } from '@carbon/react'
import { COMPANY_INFO } from '@/constants'

export function AboutSection() {
  return (
    <section className="portfolio-section" id="about">
      <Grid className="portfolio-grid">
        <Column sm={4} md={3} lg={4} xlg={4} max={4}>
          <p className="eyebrow">01 / Who we are</p>
        </Column>
        <Column sm={4} md={5} lg={8} xlg={8} max={8}>
          <h2 className="section-heading">Practical expertise. Accountable delivery.</h2>
          <p className="section-copy">
            Established by {COMPANY_INFO.founder}, our company brings over {COMPANY_INFO.experience} of 
            direct and indirect experience in civil engineering, building and specialised infrastructure works.
          </p>
          <p className="section-copy">
            We combine hands-on leadership, problem-solving ability and attention to detail with 
            industry-standard tools for computer-aided design, quantity estimation, scheduling, cost 
            control, technical documentation and site coordination.
          </p>
        </Column>
      </Grid>
    </section>
  )
}
