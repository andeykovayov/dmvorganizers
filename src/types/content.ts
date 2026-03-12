export type IconName =
  | 'calendar'
  | 'check-circle'
  | 'clipboard'
  | 'garage'
  | 'heart'
  | 'home'
  | 'kitchen'
  | 'kids'
  | 'mail'
  | 'map-pin'
  | 'phone'
  | 'sparkles'
  | 'storage'
  | 'truck'
  | 'wardrobe'

export type TrustItem = {
  icon: IconName
  text: string
}

export type ServiceItem = {
  title: string
  description: string
  icon: IconName
}

export type PricingTier = {
  name: string
  summary: string
  details: string
  highlights: string[]
  examples?: Array<{
    label: string
    value: string
  }>
  ctaTarget: 'booking' | 'contact'
  ctaLabel: string
}

export type ProjectItem = {
  title: string
  description: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export type Testimonial = {
  quote: string
  author: string
}

export type HolidayDecorationItem = {
  title: string
  image: string
  description: string
}
