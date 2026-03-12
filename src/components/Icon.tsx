import type { SVGProps } from 'react'
import type { IconName } from '@/types/content'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
}

export function Icon({ name, className, ...props }: IconProps) {
  const base = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
    ...props,
  }

  switch (name) {
    case 'calendar':
      return (
        <svg {...base}>
          <rect x='3' y='5' width='18' height='16' rx='2' />
          <path d='M8 3v4M16 3v4M3 10h18' />
        </svg>
      )
    case 'check-circle':
      return (
        <svg {...base}>
          <circle cx='12' cy='12' r='9' />
          <path d='m8.5 12.5 2.2 2.2 4.8-5.2' />
        </svg>
      )
    case 'clipboard':
      return (
        <svg {...base}>
          <path d='M9 4h6l1 2h3v14H5V6h3l1-2Z' />
          <path d='M9 11h6M9 15h4' />
        </svg>
      )
    case 'garage':
      return (
        <svg {...base}>
          <path d='M3 10.5 12 4l9 6.5V20H3z' />
          <path d='M8 20v-6h8v6M8 12h8' />
        </svg>
      )
    case 'heart':
      return (
        <svg {...base}>
          <path d='M12 20.5 4.8 13.6a4.8 4.8 0 0 1 6.8-6.8L12 7.2l.4-.4a4.8 4.8 0 1 1 6.8 6.8Z' />
        </svg>
      )
    case 'home':
      return (
        <svg {...base}>
          <path d='M4 10.5 12 4l8 6.5V20h-5v-5h-6v5H4z' />
        </svg>
      )
    case 'kitchen':
      return (
        <svg {...base}>
          <path d='M4 4h16v16H4zM4 10h16M12 10v10' />
        </svg>
      )
    case 'kids':
      return (
        <svg {...base}>
          <circle cx='9' cy='8' r='2.5' />
          <circle cx='16' cy='9' r='2.2' />
          <path d='M6 19v-4.3a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3V19M14 19v-3.2a2.8 2.8 0 0 1 2.8-2.8h0a2.8 2.8 0 0 1 2.8 2.8V19' />
        </svg>
      )
    case 'mail':
      return (
        <svg {...base}>
          <rect x='3' y='5' width='18' height='14' rx='2' />
          <path d='m4 7 8 6 8-6' />
        </svg>
      )
    case 'map-pin':
      return (
        <svg {...base}>
          <path d='M12 21c3.5-4.2 6-7.4 6-10a6 6 0 1 0-12 0c0 2.6 2.5 5.8 6 10Z' />
          <circle cx='12' cy='11' r='2' />
        </svg>
      )
    case 'phone':
      return (
        <svg {...base}>
          <path d='M7.2 4h3l1 4-2 1.2a13 13 0 0 0 5.6 5.6L16 13l4 1v3a2 2 0 0 1-2.2 2A15.8 15.8 0 0 1 5 6.2 2 2 0 0 1 7.2 4Z' />
        </svg>
      )
    case 'sparkles':
      return (
        <svg {...base}>
          <path d='M12 3v4M12 17v4M4.5 12h4M15.5 12h4M7 7l2.4 2.4M14.6 14.6 17 17M17 7l-2.4 2.4M9.4 14.6 7 17' />
        </svg>
      )
    case 'storage':
      return (
        <svg {...base}>
          <rect x='4' y='5' width='16' height='6' rx='1.5' />
          <rect x='4' y='13' width='16' height='6' rx='1.5' />
          <path d='M9 8h6M9 16h6' />
        </svg>
      )
    case 'truck':
      return (
        <svg {...base}>
          <path d='M3 7h11v8H3zM14 10h3l3 3v2h-6zM7 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z' />
        </svg>
      )
    case 'wardrobe':
      return (
        <svg {...base}>
          <rect x='5' y='4' width='14' height='16' rx='1.8' />
          <path d='M12 4v16M10 11h.01M14 11h.01' />
        </svg>
      )
    default:
      return (
        <svg {...base}>
          <circle cx='12' cy='12' r='9' />
        </svg>
      )
  }
}
