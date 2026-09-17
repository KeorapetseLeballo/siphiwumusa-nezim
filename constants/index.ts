import type { ComponentType } from 'react'

// Re-export types and constants from services.ts
export type { ServiceItem } from './services'
export { SERVICES } from './services'

export const COMPANY_INFO = {
  name: 'Siphiwumusa Nezimangaliso',
  shortName: 'SN',
  tagline: 'Construction company · Est. 2024',
  description: 'Siphiwumusa Nezimangaliso is a South African construction company delivering reliable, cost-effective and quality civil engineering, building and infrastructure solutions.',
  established: 2024,
  founder: 'Nomusa Khumalo',
  experience: '5+ years',
  legalEntity: 'PTY LTD · South Africa',
} as const

export const CONTACT_INFO = {
  email: 'siphiwumusaptyltd@gmail.com',
  phones: ['067 678 6706', '068 843 1632'],
  address: {
    street: '23 Havelock Street',
    city: 'eShowe',
    postalCode: '3815',
    country: 'South Africa',
  },
} as const

export const OBJECTIVES = [
  'Deliver projects safely, on time, within budget and to specification.',
  'Maintain high standards of quality, professionalism and compliance.',
  'Build lasting relationships with clients, suppliers and partners.',
  'Use modern methods and tools to improve project control.',
  'Create employment opportunities and support local skills development.',
] as const

export const VISION = 'To become a trusted construction partner recognised for excellence, reliability and infrastructure that creates lasting value.'

export const MISSION = 'To deliver safe, reliable and high-quality construction solutions through professional service, efficient project execution and responsible practices.'

export const LOGO_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84db587c-0069-43c9-8828-f769ff53b1d3.JPG-GbOIYWO6SsEXIynn5z5eDBo8SHOvNA.jpeg'
