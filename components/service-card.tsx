'use client'

import { getIconComponent } from '@/lib/utils'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  iconName: string
}

export function ServiceCard({ number, title, description, iconName }: ServiceCardProps) {
  const Icon = getIconComponent(iconName)
  
  return (
    <article className="service-card">
      <div className="service-card__top">
        <span>{number}</span>
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
