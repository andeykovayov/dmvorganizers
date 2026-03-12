import type { PricingTier } from '@/types/content'

export const pricingTiers: PricingTier[] = [
  {
    name: 'Initial Consultation',
    summary:
      'Start with a consultation to discuss your space, priorities, and organizing goals. This visit is typically around 1 hour and helps us understand your needs and recommend the best approach.',
    details:
      'We can come to you in person, and if arranged in advance, the consultation can also continue into a full organizing session the same day.',
    highlights: [
      'Flexible appointment',
      'Typically 1 hour',
      'Can extend into a full session',
    ],
    ctaTarget: 'contact',
    ctaLabel: 'Request Consultation',
  },
  {
    name: 'Standard Session',
    summary:
      'Our standard organizing sessions are scheduled in advance and designed for focused, hands-on progress in your space.',
    details:
      'Sessions are booked with a 4-hour minimum and can be scheduled on their own or as part of a package.',
    highlights: ['$60/hour', '4-hour minimum', 'Scheduled in advance'],
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
      '$60/hour',
      'Flexible multi-session scheduling',
      'Client-defined timeline',
    ],
    examples: [
      { label: '12 hours', value: '$720' },
      { label: '20 hours', value: '$1,200' },
      { label: '32 hours', value: '$1,920' },
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
