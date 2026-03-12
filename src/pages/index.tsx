import Head from 'next/head'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { ContactForm } from '@/components/ContactForm'
import { HolidayDecorationsSection } from '@/components/HolidayDecorationsSection'
import { Icon } from '@/components/Icon'
import { siteConfig, trustItems } from '@/config/site'
import { pricingTiers } from '@/data/pricing'
import { projects } from '@/data/projects'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? ''
const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? ''

const bookingEnabled = bookingUrl.trim().length > 0
const canEmbedBooking = bookingEnabled && bookingUrl.includes('calendar.google.com')

const processSteps = [
  'Step 1 - We take a deep breath and face the clutter together.',
  'Step 2 - We sort what stays, what goes, and what has been hiding for years.',
  'Step 3 - We create simple organizing systems that work for everyday life.',
  'Step 4 - You enjoy a calmer, functional space again.',
]

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name='description' content={siteConfig.description} />
        <meta property='og:title' content={siteConfig.title} />
        <meta property='og:description' content={siteConfig.description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={siteConfig.domain} />
        <meta property='og:image' content={`${siteConfig.domain}/og-image.svg`} />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='canonical' href={siteConfig.domain} />
      </Head>

      <div className='min-h-screen bg-surface text-ink'>
        <header className='sticky top-0 z-50 border-b border-line/70 bg-surface/95 backdrop-blur'>
          <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6'>
            <a href='#main' className='flex min-w-0 items-center gap-3'>
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

            <a
              href={bookingEnabled ? bookingUrl : '#booking'}
              target={bookingEnabled ? '_blank' : undefined}
              rel={bookingEnabled ? 'noreferrer' : undefined}
              className='inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md'
            >
              Book Appointment
            </a>
          </div>

          <nav className='border-t border-line/60'>
            <ul className='mx-auto flex w-full max-w-6xl gap-1 overflow-x-auto px-4 py-2 text-sm sm:px-6'>
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className='inline-flex rounded-full px-3 py-1.5 font-medium text-muted transition hover:bg-accent-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          <section id='main' className='relative isolate overflow-hidden border-b border-line/70'>
            <div className='absolute -left-20 top-8 h-72 w-72 rounded-full bg-accent/10 blur-3xl' />
            <div className='absolute right-0 top-24 h-80 w-80 rounded-full bg-sand blur-3xl' />

            <div className='relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24'>
              <div className='space-y-6 animate-fade-up'>
                <p className='inline-flex rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted'>
                  Organizing & Decluttering Services
                </p>
                <h1 className='font-serif text-4xl leading-tight sm:text-5xl'>
                  {siteConfig.businessName}
                </h1>
                <p className='text-2xl font-semibold text-accent'>Calmer spaces. Less stress.</p>
                <p className='max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
                  DMV Organizers helps homeowners across Northern Virginia, Washington DC, and
                  Montgomery County (MD) transform cluttered spaces into organized, functional homes.
                </p>

                <div className='flex flex-wrap items-center gap-3'>
                  <a
                    href={bookingEnabled ? bookingUrl : '#booking'}
                    target={bookingEnabled ? '_blank' : undefined}
                    rel={bookingEnabled ? 'noreferrer' : undefined}
                    className='inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md'
                  >
                    Book Appointment
                  </a>
                  <a
                    href={siteConfig.phoneHref}
                    className='inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent'
                  >
                    Call now: {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4 lg:gap-5'>
                <figure className='col-span-2 overflow-hidden rounded-3xl border border-line bg-white shadow-card'>
                  <img
                    src='/hero-living-room.jpg'
                    alt='Placeholder photo of a calm and organized living room'
                    loading='eager'
                    className='h-56 w-full object-cover sm:h-64'
                  />
                </figure>
                <figure className='overflow-hidden rounded-3xl border border-line bg-white shadow-card'>
                  <img
                    src='/hero-closet.jpg'
                    alt='Placeholder photo of a clean organized closet'
                    loading='lazy'
                    className='h-40 w-full object-cover sm:h-44'
                  />
                </figure>
                <figure className='overflow-hidden rounded-3xl border border-line bg-white shadow-card'>
                  <img
                    src='/hero-pantry.jpg'
                    alt='Placeholder photo of an organized pantry'
                    loading='lazy'
                    className='h-40 w-full object-cover sm:h-44'
                  />
                </figure>
              </div>
            </div>
          </section>

          <section className='border-b border-line/70 bg-white/80'>
            <div className='mx-auto w-full max-w-6xl px-4 py-6 sm:px-6'>
              <h2 className='mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted'>
                Why Homeowners Trust DMV Organizers
              </h2>
              <ul className='grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
                {trustItems.map((item) => (
                  <li
                    key={item.text}
                    className='flex items-start gap-3 rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-muted shadow-card'
                  >
                    <Icon name={item.icon} className='mt-0.5 h-4 w-4 shrink-0 text-accent' aria-hidden='true' />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id='about' className='border-b border-line/70'>
            <div className='mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]'>
              <figure className='mx-auto max-w-sm overflow-hidden rounded-3xl border border-line bg-white shadow-card'>
                <img
                  src='/owner.jpg'
                  alt='Owner portrait placeholder for Nadiia'
                  loading='lazy'
                  className='h-full w-full object-cover'
                />
              </figure>

              <div className='space-y-6'>
                <div className='space-y-3'>
                  <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>About</p>
                  <h2 className='font-serif text-3xl sm:text-4xl'>Meet Nadiia</h2>
                  <p className='max-w-2xl leading-relaxed text-muted'>
                    Hi, I&apos;m Nadiia, the founder of DMV Organizers. I started this business because I
                    love helping people feel calmer and happier in their homes. Life gets busy and
                    clutter builds up quickly. My goal is to help you reset your space so it works
                    for your real life, not just for a picture.
                  </p>
                </div>

                <div className='grid gap-4 sm:grid-cols-2'>
                  <article className='rounded-3xl border border-line bg-white p-5 shadow-card'>
                    <h3 className='mb-2 font-semibold'>Why I do this</h3>
                    <ul className='space-y-2 text-sm leading-relaxed text-muted'>
                      <li>Helping families feel less stressed at home</li>
                      <li>Creating simple systems that are easy to maintain</li>
                      <li>Supporting people through moves or life transitions</li>
                    </ul>
                  </article>

                  <article className='rounded-3xl border border-line bg-white p-5 shadow-card'>
                    <h3 className='mb-2 font-semibold'>How I work</h3>
                    <ul className='space-y-2 text-sm leading-relaxed text-muted'>
                      <li>Patient and supportive approach</li>
                      <li>Practical organizing solutions that fit real routines</li>
                      <li>Respectful and judgment-free environment</li>
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section id='services' className='border-b border-line/70 bg-white/70'>
            <div className='mx-auto w-full max-w-6xl px-4 py-16 sm:px-6'>
              <div className='mb-8 space-y-3'>
                <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>Services</p>
                <h2 className='font-serif text-3xl sm:text-4xl'>Decluttering support tailored to your home</h2>
              </div>

              <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {services.map((service) => (
                  <article
                    key={service.title}
                    className='flex h-full flex-col rounded-3xl border border-line bg-surface p-5 shadow-card'
                  >
                    <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent'>
                      <Icon name={service.icon} className='h-5 w-5' aria-hidden='true' />
                    </div>
                    <h3 className='mb-2 text-lg font-semibold'>{service.title}</h3>
                    <p className='mb-5 text-sm leading-relaxed text-muted'>{service.description}</p>
                    <a
                      href={bookingEnabled ? bookingUrl : '#booking'}
                      target={bookingEnabled ? '_blank' : undefined}
                      rel={bookingEnabled ? 'noreferrer' : undefined}
                      className='mt-auto inline-flex items-center justify-center rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent'
                    >
                      Book Appointment
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <HolidayDecorationsSection />

          <section id='pricing' className='border-b border-line/70'>
            <div className='mx-auto w-full max-w-6xl px-4 py-16 sm:px-6'>
              <div className='mb-8 space-y-3'>
                <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>Pricing</p>
                <h2 className='font-serif text-3xl sm:text-4xl'>Flexible organizing options</h2>
                <p className='max-w-3xl text-sm leading-relaxed text-muted sm:text-base'>
                  Choose the level of support that fits your space, timeline, and project needs,
                  from a first consultation to full sessions, package plans, and custom quotes.
                </p>
                <div className='mt-2 grid gap-3 sm:max-w-xl sm:grid-cols-2'>
                  <div className='rounded-2xl border border-line bg-white px-4 py-3 shadow-card'>
                    <p className='text-[11px] font-semibold uppercase tracking-[0.12em] text-muted'>Flat rate</p>
                    <p className='mt-1 font-serif text-2xl text-accent'>$60/hour</p>
                  </div>
                  <div className='rounded-2xl border border-line bg-white px-4 py-3 shadow-card'>
                    <p className='text-[11px] font-semibold uppercase tracking-[0.12em] text-muted'>
                      Session minimum
                    </p>
                    <p className='mt-1 font-serif text-2xl text-accent'>4 hours</p>
                  </div>
                </div>
              </div>

              <div className='grid gap-5 md:grid-cols-2'>
                {pricingTiers.map((tier) => (
                  <article
                    key={tier.name}
                    className='flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-card sm:p-7'
                  >
                    <h3 className='text-2xl font-semibold leading-tight'>{tier.name}</h3>

                    <div className='mt-4 space-y-3 text-sm leading-relaxed text-muted md:min-h-[11.5rem]'>
                      <p className='max-w-[46ch]'>{tier.summary}</p>
                      <p className='max-w-[46ch]'>{tier.details}</p>
                    </div>

                    <div className='rounded-2xl border border-line/80 bg-accent-soft/45 px-4 py-4'>
                      <p className='text-[11px] font-semibold uppercase tracking-[0.12em] text-muted'>
                        Key details
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-ink'>
                        {tier.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      {tier.examples && (
                        <div className='mt-4 border-t border-line/70 pt-3'>
                          <p className='text-[11px] font-semibold uppercase tracking-[0.12em] text-muted'>
                            Example packages
                          </p>
                          <ul className='mt-2 space-y-1.5 text-sm text-muted'>
                            {tier.examples.map((option) => (
                              <li key={option.label} className='grid grid-cols-[auto_auto] items-center justify-between gap-x-4'>
                                <span>{option.label}</span>
                                <span className='font-semibold text-ink'>{option.value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className='mt-auto pt-3'>
                      <a
                      href={
                        tier.ctaTarget === 'contact'
                          ? '#contact'
                          : bookingEnabled
                            ? bookingUrl
                            : '#booking'
                        }
                        target={
                          tier.ctaTarget === 'contact'
                            ? undefined
                            : bookingEnabled
                              ? '_blank'
                              : undefined
                        }
                        rel={tier.ctaTarget === 'contact' ? undefined : bookingEnabled ? 'noreferrer' : undefined}
                        className='inline-flex min-w-[11.5rem] items-center justify-center self-start rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md'
                      >
                        {tier.ctaLabel}
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <p className='mt-6 text-sm text-muted'>
                Not sure which option fits your space? Reach out and we&apos;ll help you choose the
                best starting point.
              </p>
            </div>
          </section>

          <section id='projects' className='border-b border-line/70 bg-white/70'>
            <div className='mx-auto w-full max-w-6xl px-4 py-16 sm:px-6'>
              <div className='mb-8 space-y-3'>
                <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>Projects</p>
                <h2 className='font-serif text-3xl sm:text-4xl'>Real transformations you can explore</h2>
                <p className='max-w-2xl text-sm leading-relaxed text-muted'>
                  Drag each slider to compare before and after results from recent organizing projects.
                </p>
              </div>

              <div className='grid gap-6 lg:grid-cols-2'>
                {projects.map((project) => (
                  <article key={project.title} className='rounded-3xl border border-line bg-surface p-5 shadow-card'>
                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                    <p className='mb-4 mt-2 text-sm leading-relaxed text-muted'>{project.description}</p>
                    <BeforeAfterSlider
                      id={`slider-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                      beforeImage={project.beforeImage}
                      afterImage={project.afterImage}
                      beforeAlt={project.beforeAlt}
                      afterAlt={project.afterAlt}
                    />
                  </article>
                ))}
              </div>

              <div className='mt-12 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8'>
                <h3 className='text-2xl font-serif'>How the magic usually happens</h3>
                <ul className='mt-5 space-y-3'>
                  {processSteps.map((step) => (
                    <li key={step} className='flex items-start gap-3 text-sm leading-relaxed text-muted'>
                      <Icon name='check-circle' className='mt-0.5 h-4 w-4 shrink-0 text-accent' aria-hidden='true' />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className='border-b border-line/70'>
            <div className='mx-auto w-full max-w-6xl px-4 py-16 sm:px-6'>
              <div className='mb-8 space-y-3'>
                <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>Testimonials</p>
                <h2 className='font-serif text-3xl sm:text-4xl'>What clients say</h2>
              </div>

              <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                {testimonials.map((testimonial) => (
                  <figure key={testimonial.quote} className='rounded-3xl border border-line bg-white p-5 shadow-card'>
                    <blockquote className='text-sm leading-relaxed text-muted'>
                      {`"${testimonial.quote}"`}
                    </blockquote>
                    <figcaption className='mt-4 text-sm font-semibold text-ink'>{testimonial.author}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section id='contact' className='border-b border-line/70 bg-white/80'>
            <div className='mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]'>
              <div className='space-y-6'>
                <div className='space-y-3'>
                  <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>Contact</p>
                  <h2 className='font-serif text-3xl sm:text-4xl'>Let&apos;s organize your space</h2>
                  <p className='text-sm leading-relaxed text-muted'>
                    Serving Northern Virginia, Washington DC, and Montgomery County (MD).
                  </p>
                </div>

                <div className='space-y-3 rounded-3xl border border-line bg-surface p-5 shadow-card'>
                  <a href={siteConfig.phoneHref} className='flex items-center gap-2 text-sm hover:text-accent'>
                    <Icon name='phone' className='h-4 w-4 text-accent' aria-hidden='true' />
                    {siteConfig.phoneDisplay}
                  </a>
                  <a href={siteConfig.emailHref} className='flex items-center gap-2 text-sm hover:text-accent'>
                    <Icon name='mail' className='h-4 w-4 text-accent' aria-hidden='true' />
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <ContactForm endpoint={contactEndpoint} />
            </div>
          </section>

          <section id='booking' className='border-b border-line/70'>
            <div className='mx-auto w-full max-w-6xl px-4 py-16 sm:px-6'>
              <div className='mb-6 space-y-3'>
                <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>Booking</p>
                <h2 className='font-serif text-3xl sm:text-4xl'>Book Your Session</h2>
                <p className='max-w-2xl text-sm leading-relaxed text-muted'>
                  Use our online calendar to book organizing sessions at a time that works for your
                  schedule.
                </p>
                <p className='max-w-2xl text-sm leading-relaxed text-muted'>
                  For consultations, please call or send a message through the contact form.
                </p>
              </div>

              {bookingEnabled ? (
                <div className='space-y-5'>
                  <a
                    href={bookingUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md'
                  >
                    Book Appointment
                  </a>

                  {canEmbedBooking && (
                    <div className='overflow-hidden rounded-3xl border border-line bg-white shadow-card'>
                      <iframe
                        title='Google Calendar Appointment Scheduling'
                        src={bookingUrl}
                        loading='lazy'
                        className='h-[680px] w-full'
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className='rounded-3xl border border-dashed border-line bg-surface p-5 text-sm text-muted'>
                  Booking URL not configured. Set <code>NEXT_PUBLIC_BOOKING_URL</code> to your Google
                  Calendar appointment scheduling link.
                </div>
              )}
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

          <div className='border-t border-white/15'>
            <div className='mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-white/65 sm:px-6'>
              <p>(c) {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
              <a href={siteConfig.domain} className='hover:text-white'>
                {siteConfig.domain}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
