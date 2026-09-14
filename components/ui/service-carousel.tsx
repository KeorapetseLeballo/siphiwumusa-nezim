'use client'

import { useCarousel } from '@/hooks'
import type { ServiceItem } from '@/constants'
import { ServiceCard } from './service-card'

type ServiceCarouselProps = {
  services: ServiceItem[]
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const { emblaRef, selectedIndex, scrollSnaps, scrollTo } = useCarousel()

  return (
    <div className="service-carousel">
      <div className="service-carousel__viewport" ref={emblaRef}>
        <div className="service-carousel__container">
          {services.map((service) => (
            <div key={service.id} className="service-carousel__slide">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      {scrollSnaps.length > 1 && (
        <div className="service-carousel__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`service-carousel__dot ${
                index === selectedIndex ? 'service-carousel__dot--active' : ''
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
