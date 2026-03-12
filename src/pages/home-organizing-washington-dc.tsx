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
        'Capitol Hill',
        'Dupont Circle',
        'Logan Circle',
        'Georgetown',
        'Adams Morgan',
        'Brookland',
        'Tenleytown',
        'Upper Northwest',
        'and surrounding neighborhoods',
      ]}
    />
  )
}
