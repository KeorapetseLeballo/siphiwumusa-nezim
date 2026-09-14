import type { ServiceItem } from '@/constants'

type ServiceCardProps = {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <div className="service-card__top">
        <span>{service.number}</span>
        <Icon size={24} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  )
}
