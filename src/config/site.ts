import type { TrustItem } from '@/types/content'

export const siteConfig = {
  businessName: 'DMV Organizers',
  legalName: 'DMV Organizers LLC',
  owner: 'Nadiia',
  phoneDisplay: '(202) 256 6678',
  phoneHref: 'tel:+12022566678',
  email: 'dmvorganizers@gmail.com',
  emailHref: 'mailto:dmvorganizers@gmail.com',
  domain: 'https://www.dmvorganizers.com',
  title: 'DMV Organizers | Home Organization & Decluttering Services',
  description:
    'DMV Organizers helps homeowners across Northern Virginia, Washington DC, and Montgomery County (MD) declutter and organize their homes.',
  serviceAreas: [
    { label: 'Northern Virginia', href: '/home-organizing-northern-virginia' },
    { label: 'Washington DC', href: '/home-organizing-washington-dc' },
    { label: 'Montgomery County (MD)', href: '/home-organizing-montgomery-county-md' },
  ],
  navItems: [
    { label: 'Main', href: '#main' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Holiday Decorations', href: '#holiday-decorations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const trustItems: TrustItem[] = [
  {
    icon: 'map-pin',
    text: 'Local DMV business serving Northern Virginia, DC, and Montgomery County (MD)',
  },
  {
    icon: 'sparkles',
    text: 'Woman-owned and operated',
  },
  {
    icon: 'heart',
    text: 'Friendly, judgment-free help',
  },
  {
    icon: 'home',
    text: 'Respectful of your home and belongings',
  },
  {
    icon: 'calendar',
    text: 'Flexible scheduling for busy households',
  },
]
