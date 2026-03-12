import { LocationLandingPage } from '@/components/LocationLandingPage'

export default function HomeOrganizingNorthernVirginiaPage() {
  return (
    <LocationLandingPage
      path='/home-organizing-northern-virginia'
      metaTitle='Home Organizing in Northern Virginia | DMV Organizers'
      metaDescription='Professional home organizing and decluttering services in Northern Virginia, including Ashburn, Leesburg, Reston, Herndon, Fairfax, and nearby communities.'
      h1='Home Organizing in Northern Virginia'
      intro='DMV Organizers helps Northern Virginia homeowners create calm, functional spaces with practical organizing systems built for real daily routines.'
      servicesOverview='From closet resets and pantry organization to full-home decluttering support, we provide hands-on help for busy households across Northern Virginia. We focus on creating realistic systems you can maintain, not temporary quick fixes.'
      whoWeHelp={[
        'Busy professionals balancing work and home life',
        'Families who need easier day-to-day systems',
        'Homeowners preparing for moves or major transitions',
        'Anyone ready to reduce clutter and stress at home',
      ]}
      whyChoose={[
        'Friendly, judgment-free support from start to finish',
        'Clear, practical organizing plans tailored to your space',
        'Local DMV service with flexible scheduling options',
      ]}
      communitiesTitle='Northern Virginia Communities We Serve'
      communities={[
        'Ashburn',
        'Leesburg',
        'Reston',
        'Herndon',
        'Fairfax',
        'Middleburg',
        'Sterling',
        'Purcellville',
        'Haymarket',
        'Warrenton',
        'Gainesville',
        'Manassas',
        'Chantilly',
        'Centreville',
        'Stone Ridge',
        'Springfield',
        'Falls Church',
        'Arlington',
        'Alexandria',
        'McLean',
        'Tysons',
        'Vienna',
        'Lorton',
        'Woodbridge',
        'Marshall',
        'Surrounding areas',
      ]}
    />
  )
}
