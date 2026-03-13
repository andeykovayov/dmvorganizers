import Head from 'next/head'
import { siteConfig } from '@/config/site'

type LocationLandingPageProps = {
  path: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  servicesOverview: string
  whoWeHelp: string[]
  whyChoose: string[]
  communitiesTitle: string
  communities: string[]
}

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? ''
const bookingEnabled = bookingUrl.trim().length > 0

export function LocationLandingPage({
  path,
  metaTitle,
  metaDescription,
  h1,
  intro,
  servicesOverview,
  whoWeHelp,
  whyChoose,
  communitiesTitle,
  communities,
}: LocationLandingPageProps) {
  const canonical = `${siteConfig.domain}${path}`
  const bookingHref = bookingEnabled ? bookingUrl : '/#booking'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
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
                href={bookingHref}
                target={bookingEnabled ? '_blank' : undefined}
                rel={bookingEnabled ? 'noreferrer' : undefined}
                className='inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md'
              >
                Book Appointment
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
              <h1 className='mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl'>{h1}</h1>
              <p className='mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg'>{intro}</p>

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
                  href='/'
                  className='inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent'
                >
                  Back to Home
                </a>
              </div>
            </div>
          </section>

          <section className='border-b border-line/70 bg-white/80'>
            <div className='mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2'>
              <article className='rounded-3xl border border-line bg-white p-6 shadow-card'>
                <h2 className='font-serif text-2xl'>Organizing and Decluttering Services in Your Area</h2>
                <p className='mt-3 text-sm leading-relaxed text-muted sm:text-base'>{servicesOverview}</p>
                <p className='mt-3 text-sm leading-relaxed text-muted sm:text-base'>
                  Our sessions are practical, judgment-free, and tailored to your routines so your
                  home stays easier to maintain long after the project is complete.
                </p>
              </article>

              <article className='rounded-3xl border border-line bg-white p-6 shadow-card'>
                <h2 className='font-serif text-2xl'>Who We Help</h2>
                <ul className='mt-3 space-y-2 text-sm leading-relaxed text-muted sm:text-base'>
                  {whoWeHelp.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className='border-b border-line/70'>
            <div className='mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2'>
              <article className='rounded-3xl border border-line bg-white p-6 shadow-card'>
                <h2 className='font-serif text-2xl'>Why Choose DMV Organizers</h2>
                <ul className='mt-3 space-y-2 text-sm leading-relaxed text-muted sm:text-base'>
                  {whyChoose.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>

              <article className='rounded-3xl border border-line bg-white p-6 shadow-card'>
                <h2 className='font-serif text-2xl'>{communitiesTitle}</h2>
                <ul className='mt-3 grid gap-2 text-sm leading-relaxed text-muted sm:grid-cols-2 sm:text-base'>
                  {communities.map((community) => (
                    <li key={community}>- {community}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className='border-b border-line/70 bg-white/80'>
            <div className='mx-auto w-full max-w-6xl px-4 py-14 sm:px-6'>
              <div className='rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8'>
                <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>Next Step</p>
                <h2 className='mt-2 font-serif text-3xl sm:text-4xl'>Ready to organize your space?</h2>
                <p className='mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base'>
                  Tell us about your space and goals, and we&apos;ll help you choose the right
                  starting point, from consultation to full organizing sessions.
                </p>

                <div className='mt-6 flex flex-wrap items-center gap-3'>
                  <a
                    href='/#contact'
                    className='inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md'
                  >
                    Contact Us
                  </a>
                  <a
                    href={bookingHref}
                    target={bookingEnabled ? '_blank' : undefined}
                    rel={bookingEnabled ? 'noreferrer' : undefined}
                    className='inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent'
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className='bg-ink text-white'>
          <div className='mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4'>
            <div>
              <p className='font-serif text-xl'>{siteConfig.businessName}</p>
              <p className='mt-2 text-sm text-white/75'>{siteConfig.legalName}</p>
            </div>

            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.14em] text-white/70'>Phone</p>
              <a href={siteConfig.phoneHref} className='mt-2 block text-sm text-white'>
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.14em] text-white/70'>Email</p>
              <a href={siteConfig.emailHref} className='mt-2 block text-sm text-white'>
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.14em] text-white/70'>Service Area</p>
              <ul className='mt-2 space-y-1 text-sm text-white'>
                {siteConfig.serviceAreas.map((area) => (
                  <li key={area.href}>
                    <a href={area.href} className='hover:text-white/80'>
                      {area.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
