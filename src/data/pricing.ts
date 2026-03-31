import type { PricingTier } from '@/types/content'

export const pricingTiers: PricingTier[] = [
  {
    name: 'Initial Consultation',
    summary:
      'Start with a free consultation to briefly discuss your space, priorities, and organizing goals. This short call helps us understand your needs and explain how our organizing sessions work.',
    details:
      'The consultation can be done by phone, Zoom, or a quick video call and typically takes about 10-15 minutes. It is a short introduction call and not an organizing session.',
    highlights: ['Free consultation', '10-15 minute call', 'Phone, Zoom, or video call'],
    ctaTarget: 'phone',
    ctaLabel: 'Call Us',
  },
  {
    name: 'Standard Session',
    summary:
      'Our standard organizing sessions are scheduled in advance and designed for focused, hands-on progress in your space.',
    details:
      'Sessions are booked with a 4-hour minimum and can be scheduled on their own or as part of a package.',
    highlights: ['$65/hour', '4-hour minimum', 'Scheduled in advance'],
    ctaTarget: 'booking',
    ctaLabel: 'Book Session',
  },
  {
    name: 'Package Plans',
    summary:
      'Package plans are ideal for larger or ongoing projects. Hours can be scheduled across multiple sessions and spread over days or weeks based on your timeline and preferences.',
    details:
      'This is a flexible option for multi-room projects, phased organizing, or continued support over time.',
    highlights: [
      '$65/hour',
      'Flexible multi-session scheduling',
      'Client-defined timeline',
    ],
    examples: [
      { label: '8 hours', value: '$520' },
      { label: '16 hours', value: '$1,000' },
      { label: '32 hours', value: '$1,960' },
    ],
    ctaTarget: 'contact',
    ctaLabel: 'Request Package Plan',
  },
  {
    name: 'Custom Quotes',
    summary:
      'For larger or more customized projects, we provide tailored quotes based on scope, timing, materials, and special requests.',
    details:
      'This may include garage organizing, holiday preparation, furniture assembly or disassembly, light wall patching, repainting, and other project-specific support.',
    highlights: ['Custom quote', 'Based on scope, timeline, and materials'],
    ctaTarget: 'contact',
    ctaLabel: 'Request Custom Quote',
  },
]
