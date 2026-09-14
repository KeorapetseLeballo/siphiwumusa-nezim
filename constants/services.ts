import { Roadmap, Security } from '@carbon/icons-react'
import type { ComponentType } from 'react'

export type ServiceItem = {
  id: string
  number: string
  title: string
  description: string
  icon: ComponentType<{ size: number }>
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'road-construction',
    number: '01',
    title: 'Road construction & asphalt',
    description:
      'Construction, resurfacing, rehabilitation and maintenance of municipal, provincial and access roads.',
    icon: Roadmap,
  },
  {
    id: 'water-sewer',
    number: '02',
    title: 'Water & sewer reticulation',
    description:
      'Installation, upgrading and maintenance of water-distribution pipelines, sewer networks and associated infrastructure.',
    icon: Security,
  },
  {
    id: 'stormwater',
    number: '03',
    title: 'Stormwater & drainage',
    description:
      'Stormwater channels, culverts, drainage pipelines and erosion-control systems built for dependable performance.',
    icon: Security,
  },
  {
    id: 'earthworks',
    number: '04',
    title: 'Bulk earthworks',
    description:
      'Site clearing, excavation, filling, compaction, trenching and ground preparation for infrastructure projects.',
    icon: Roadmap,
  },
  {
    id: 'concrete',
    number: '05',
    title: 'Concrete & civil structures',
    description:
      'Culverts, retaining walls, reservoirs, foundations and small bridges constructed with care and precision.',
    icon: Security,
  },
  {
    id: 'building',
    number: '06',
    title: 'Building & renovations',
    description:
      'Construction, alteration, renovation and maintenance of residential, commercial, industrial and institutional buildings.',
    icon: Security,
  },
]

export const OBJECTIVES = [
  'Deliver projects safely, on time, within budget and to specification.',
  'Maintain high standards of quality, professionalism and compliance.',
  'Build lasting relationships with clients, suppliers and partners.',
  'Use modern methods and tools to improve project control.',
  'Create employment opportunities and support local skills development.',
] as const
