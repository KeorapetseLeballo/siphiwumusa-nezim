'use client'

import { Email, Location, Phone } from '@carbon/icons-react'
import { Column, Grid } from '@carbon/react'
import { CONTACT_INFO } from '@/constants'
import { createEmailLink, createPhoneLink } from '@/lib/utils'

export function ContactSection() {
  return (
    <section className="portfolio-section portfolio-section--contact" id="contact">
      <Grid className="portfolio-grid">
        <Column sm={4} md={8} lg={7} xlg={7} max={7}>
          <p className="eyebrow">05 / Contact</p>
          <h2 className="contact-heading">Let&apos;s build something that lasts.</h2>
          <p className="section-copy">
            Tell us about your next civil engineering, infrastructure, building or renovation project.
          </p>
        </Column>
        <Column sm={4} md={8} lg={5} xlg={5} max={5} className="contact-details">
          <a href={createEmailLink(CONTACT_INFO.email)}>
            <Email size={20} />
            {CONTACT_INFO.email}
          </a>
          {CONTACT_INFO.phones.map((phone) => (
            <a key={phone} href={createPhoneLink(phone)}>
              <Phone size={20} />
              {phone}
            </a>
          ))}
          <p>
            <Location size={20} />
            {CONTACT_INFO.address.street}<br />
            {CONTACT_INFO.address.city}, {CONTACT_INFO.address.postalCode}
          </p>
        </Column>
      </Grid>
    </section>
  )
}
