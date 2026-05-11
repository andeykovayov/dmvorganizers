import { LocationLandingPage } from '@/components/LocationLandingPage'

export default function HomeOrganizingWashingtonDcPage() {
  return (
    <LocationLandingPage
      path='/home-organizing-washington-dc'
      metaTitle='Home Organizing in Washington DC | DMV Organizers'
      metaDescription='Professional home organizing and decluttering services in Washington DC for apartments, townhomes, and busy city households.'
      h1='Home Organizing in Washington DC'
      intro='DMV Organizers supports Washington DC residents with smart, practical home organizing solutions designed for city living, limited-space layouts, and demanding schedules.'
      servicesOverview='We help organize apartments, condos, and row homes with efficient systems for closets, kitchens, entryways, and storage areas. Whether you need a full decluttering reset or focused support for one room, we build systems that fit how you actually live.'
      whoWeHelp={[
        'Busy professionals with fast-paced schedules',
        'Families managing shared living spaces',
        'Residents navigating limited storage in city homes',
        'Clients who want less clutter and more daily clarity',
      ]}
      whyChoose={[
        'Experience with city homes and small-space organization',
        'Thoughtful plans that maximize usable storage',
        'Hands-on sessions focused on long-term functionality',
      ]}
      communitiesTitle='Washington DC neighborhoods we serve include:'
      communities={[
        { label: 'Capitol Hill', href: '/home-organizing-capitol-hill-dc' },
        { label: 'Dupont Circle', href: '/home-organizing-dupont-circle-dc' },
        { label: 'Logan Circle', href: '/home-organizing-logan-circle-dc' },
        { label: 'Georgetown', href: '/home-organizing-georgetown-dc' },
        { label: 'Adams Morgan', href: '/home-organizing-adams-morgan-dc' },
        { label: 'Brookland', href: '/home-organizing-brookland-dc' },
        { label: 'Tenleytown', href: '/home-organizing-tenleytown-dc' },
        { label: 'Upper Northwest', href: '/home-organizing-upper-northwest-dc' },
        { label: 'and surrounding neighborhoods' },
      ]}
    />
  )
}
