import { Roadmap, Security } from '@carbon/icons-react'
import type { ComponentType } from 'react'

export const getIconComponent = (iconName: string): ComponentType<{ size?: number }> => {
  const iconMap: Record<string, ComponentType<{ size?: number }>> = {
    Roadmap,
    Security,
  }
  return iconMap[iconName] || Security
}

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\s+/g, '')
}

export const createPhoneLink = (phone: string): string => {
  return `tel:${formatPhoneNumber(phone)}`
}

export const createEmailLink = (email: string): string => {
  return `mailto:${email}`
}
