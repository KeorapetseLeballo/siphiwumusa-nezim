'use client'

import { useState } from 'react'
import { Button } from '@carbon/react'
import { ChevronLeft, ChevronRight } from '@carbon/icons-react'
import { ServiceCard } from './ui/service-card'
import { SERVICES } from '@/constants'

export function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? SERVICES.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === SERVICES.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentService = SERVICES[currentIndex]

  return (
    <div className="service-carousel">
      <ServiceCard service={currentService} />
      <div className="service-carousel__controls">
        <Button
          kind="ghost"
          size="sm"
          renderIcon={ChevronLeft}
          iconDescription="Previous service"
          hasIconOnly
          onClick={goToPrevious}
        />
        <span className="service-carousel__indicator">
          {currentIndex + 1} / {SERVICES.length}
        </span>
        <Button
          kind="ghost"
          size="sm"
          renderIcon={ChevronRight}
          iconDescription="Next service"
          hasIconOnly
          onClick={goToNext}
        />
      </div>
    </div>
  )
}
