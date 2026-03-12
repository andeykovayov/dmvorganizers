import { LocationLandingPage } from '@/components/LocationLandingPage'

export default function HomeOrganizingMontgomeryCountyMdPage() {
  return (
    <LocationLandingPage
      path='/home-organizing-montgomery-county-md'
      metaTitle='Home Organizing in Montgomery County, MD | DMV Organizers'
      metaDescription='Professional home organizing and decluttering services in Montgomery County, MD, including Bethesda, Rockville, Silver Spring, Gaithersburg, and nearby communities.'
      h1='Home Organizing in Montgomery County, MD'
      intro='DMV Organizers helps homeowners throughout Montgomery County, Maryland create organized, functional homes that feel calmer and easier to manage.'
      servicesOverview='Our organizing and decluttering services include closet organization, pantry resets, garage and storage cleanup, and whole-home support. We tailor each session to your priorities and timeline so progress feels steady and practical.'
      whoWeHelp={[
        'Homeowners who want more usable space and less clutter',
        'Families managing busy weekly routines',
        'Clients planning moves, renovations, or home transitions',
        'Anyone looking for systems that are easy to maintain',
      ]}
      whyChoose={[
        'Local service with a calm and supportive approach',
        'Customized organizing plans for each home and lifestyle',
        'Clear process focused on sustainable long-term results',
      ]}
      communitiesTitle='Montgomery County Communities We Serve'
      communities={[
        'Bethesda',
        'Rockville',
        'Silver Spring',
        'Gaithersburg',
        'Potomac',
        'Germantown',
        'Clarksburg',
        'Surrounding areas',
      ]}
    />
  )
}
