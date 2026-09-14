'use client'

import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { VisionSection } from '@/components/sections/vision-section'
import { ServicesSection } from '@/components/sections/services-section'
import { ApproachSection } from '@/components/sections/approach-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FooterSection } from '@/components/sections/footer-section'

export default function Home() {
  return (
    <main className="page-main">
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <ApproachSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
