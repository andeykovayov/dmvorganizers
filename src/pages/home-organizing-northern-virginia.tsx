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
        { label: 'Ashburn', href: '/home-organizing-ashburn-va' },
        { label: 'Leesburg', href: '/home-organizing-leesburg-va' },
        { label: 'Reston', href: '/home-organizing-reston-va' },
        { label: 'Herndon', href: '/home-organizing-herndon-va' },
        { label: 'Fairfax', href: '/home-organizing-fairfax-va' },
        { label: 'Middleburg', href: '/home-organizing-middleburg-va' },
        { label: 'Sterling', href: '/home-organizing-sterling-va' },
        { label: 'Purcellville', href: '/home-organizing-purcellville-va' },
        { label: 'Haymarket', href: '/home-organizing-haymarket-va' },
        { label: 'Warrenton', href: '/home-organizing-warrenton-va' },
        { label: 'Gainesville', href: '/home-organizing-gainesville-va' },
        { label: 'Manassas', href: '/home-organizing-manassas-va' },
        { label: 'Chantilly', href: '/home-organizing-chantilly-va' },
        { label: 'Centreville', href: '/home-organizing-centreville-va' },
        { label: 'Stone Ridge', href: '/home-organizing-stone-ridge-va' },
        { label: 'Springfield', href: '/home-organizing-springfield-va' },
        { label: 'Falls Church', href: '/home-organizing-falls-church-va' },
        { label: 'Arlington', href: '/home-organizing-arlington-va' },
        { label: 'Alexandria', href: '/home-organizing-alexandria-va' },
        { label: 'McLean', href: '/home-organizing-mclean-va' },
        { label: 'Tysons', href: '/home-organizing-tysons-va' },
        { label: 'Vienna', href: '/home-organizing-vienna-va' },
        { label: 'Lorton', href: '/home-organizing-lorton-va' },
        { label: 'Woodbridge', href: '/home-organizing-woodbridge-va' },
        { label: 'Marshall', href: '/home-organizing-marshall-va' },
        { label: 'Surrounding areas' },
      ]}
      bottomNoteHtml={'<p>DMV Organizers LLC is a top professional organizer in the  <a href="https://www.findmyorganizer.com/organize.b.507.g.5656.html?page=1">Sterling, VA professional organizers</a> directory on FindMyOrganizer.com.</p>'}
    />
  )
}
