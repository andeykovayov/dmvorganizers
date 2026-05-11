import Head from 'next/head'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { siteConfig } from '@/config/site'
import { citySubpages, type CitySubpage } from '@/data/citySubpages'

type CityPageProps = {
  cityPage: CitySubpage
}

const regionByParentPath: Record<CitySubpage['parentPath'], string> = {
  '/home-organizing-northern-virginia': 'Northern Virginia',
  '/home-organizing-washington-dc': 'Washington DC',
  '/home-organizing-montgomery-county-md': 'Montgomery County (MD)',
}

const parentTitleByPath: Record<CitySubpage['parentPath'], string> = {
  '/home-organizing-northern-virginia': 'Northern Virginia service area',
  '/home-organizing-washington-dc': 'Washington DC service area',
  '/home-organizing-montgomery-county-md': 'Montgomery County (MD) service area',
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: citySubpages.map((entry) => ({ params: { citySlug: entry.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<CityPageProps> = async ({ params }) => {
  const citySlug = String(params?.citySlug ?? '')
  const cityPage = citySubpages.find((entry) => entry.slug === citySlug)

  if (!cityPage) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      cityPage,
    },
  }
}

export default function CitySubpage({ cityPage }: CityPageProps) {
  const canonical = `${siteConfig.domain}/${cityPage.slug}`
  const region = regionByParentPath[cityPage.parentPath]

  return (
    <>
      <Head>
        <title>Home Organizing in {cityPage.city} | DMV Organizers</title>
        <meta
          name='description'
          content={`Professional home organizing and decluttering services in ${cityPage.city}, ${region}.`}
        />
        <meta property='og:title' content={`Home Organizing in ${cityPage.city} | DMV Organizers`} />
        <meta
          property='og:description'
          content={`Professional home organizing and decluttering services in ${cityPage.city}, ${region}.`}
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={canonical} />
        <meta property='og:image' content={`${siteConfig.domain}/og-image.svg`} />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='canonical' href={canonical} />
      </Head>

      <div className='min-h-screen bg-surface text-ink'>
        <header className='sticky top-0 z-50 border-b border-line/70 bg-surface/95 backdrop-blur'>
          <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6'>
            <a href='/' className='flex min-w-0 items-center gap-3'>
              <img
                src='/logo.png'
                alt='DMV Organizers logo'
                width={40}
                height={40}
                loading='eager'
                className='h-10 w-10 rounded-xl border border-line object-cover'
              />
              <span className='truncate font-serif text-xl font-semibold'>{siteConfig.businessName}</span>
            </a>

            <div className='flex shrink-0 items-center gap-2'>
              <a
                href='/#contact'
                className='inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md'
              >
                Send a Message
              </a>
              <a
                href={siteConfig.phoneHref}
                className='inline-flex items-center justify-center rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent'
              >
                Call now: {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className='border-b border-line/70'>
            <div className='mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20'>
              <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>Service Area</p>
              <h1 className='mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl'>
                Home Organizing in {cityPage.city}
              </h1>
              <p className='mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg'>
                DMV Organizers provides professional home organizing and decluttering support in{' '}
                {cityPage.city} and nearby areas, with practical systems that are easy to maintain.
              </p>

              <div className='mt-8 flex flex-wrap items-center gap-3'>
                <a
                  href='/#services'
                  className='inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md'
                >
                  View Services
                </a>
                <a
                  href='/#contact'
                  className='inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent'
                >
                  Contact DMV Organizers
                </a>
                <a
                  href={cityPage.parentPath}
                  className='inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent'
                >
                  Back to {parentTitleByPath[cityPage.parentPath]}
                </a>
              </div>
            </div>
          </section>

          <section className='border-b border-line/70 bg-white/80'>
            <div className='mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2'>
              <article className='rounded-3xl border border-line bg-white p-6 shadow-card'>
                <h2 className='font-serif text-2xl'>Organizing Services in {cityPage.city}</h2>
                <p className='mt-3 text-sm leading-relaxed text-muted sm:text-base'>
                  We help homeowners organize closets, kitchens, storage spaces, and everyday living
                  areas with calm, functional systems designed for real routines.
                </p>
                <p className='mt-3 text-sm leading-relaxed text-muted sm:text-base'>
                  Whether you need focused support in one room or step-by-step help across your
                  home, we tailor each session to your goals.
                </p>
              </article>

              <article className='rounded-3xl border border-line bg-white p-6 shadow-card'>
                <h2 className='font-serif text-2xl'>Why Clients Choose DMV Organizers</h2>
                <ul className='mt-3 space-y-2 text-sm leading-relaxed text-muted sm:text-base'>
                  <li>- Friendly, judgment-free approach</li>
                  <li>- Practical systems that are easy to maintain</li>
                  <li>- Local service throughout {region}</li>
                </ul>
              </article>
            </div>
          </section>
        </main>

        <footer className='bg-ink text-white'>
          <div className='border-t border-white/15'>
            <div className='mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-white/65 sm:px-6'>
              <p>(c) {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
              <div className='flex items-center gap-4'>
                <a href='/privacy-policy' className='hover:text-white'>
                  Privacy Policy
                </a>
                <a href='/terms-and-conditions' className='hover:text-white'>
                  Terms &amp; Conditions
                </a>
                <a href={siteConfig.domain} className='hover:text-white'>
                  {siteConfig.domain}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
