import Head from 'next/head'
import { siteConfig } from '@/config/site'

export default function TermsAndConditionsPage() {
  const canonical = `${siteConfig.domain}/terms-and-conditions`
  const privacyPolicyUrl = `${siteConfig.domain}/privacy-policy`

  return (
    <>
      <Head>
        <title>Terms &amp; Conditions | DMV Organizers SMS Program</title>
        <meta
          name='description'
          content='Terms and Conditions for DMV Organizers LLC SMS communication program, including opt-out, help, consent, and contact details.'
        />
        <meta property='og:title' content='Terms &amp; Conditions | DMV Organizers SMS Program' />
        <meta
          property='og:description'
          content='Read the DMV Organizers LLC SMS Program Terms and Conditions.'
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

        <main className='mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-16'>
          <article className='rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8'>
            <h1 className='font-serif text-3xl sm:text-4xl'>
              Terms &amp; Conditions - DMV Organizers SMS Program
            </h1>
            <p className='mt-3 text-sm font-medium text-muted'>Effective Date: 03.12.2026</p>
            <p className='mt-6 text-sm leading-relaxed text-muted sm:text-base'>
              By contacting DMV Organizers LLC via phone or text, you agree to receive SMS messages
              related to your inquiry.
            </p>

            <section className='mt-8 space-y-3'>
              <h2 className='text-xl font-semibold'>1. Program Description</h2>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                DMV Organizers LLC provides SMS communication for:
              </p>
              <ul className='space-y-2 text-sm leading-relaxed text-muted sm:text-base'>
                <li>- Responding to missed calls</li>
                <li>- Customer support and inquiries</li>
                <li>- Appointment coordination and updates</li>
              </ul>
            </section>

            <section className='mt-8 space-y-3'>
              <h2 className='text-xl font-semibold'>2. Message Frequency</h2>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                Message frequency varies depending on your interaction with us.
              </p>
            </section>

            <section className='mt-8 space-y-3'>
              <h2 className='text-xl font-semibold'>3. Message &amp; Data Rates</h2>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                Message and data rates may apply depending on your mobile carrier plan.
              </p>
            </section>

            <section className='mt-8 space-y-3'>
              <h2 className='text-xl font-semibold'>4. Opt-Out Instructions</h2>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                You can opt out at any time by replying STOP to any message.
              </p>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                After opting out, you will no longer receive SMS messages from us.
              </p>
            </section>

            <section className='mt-8 space-y-3'>
              <h2 className='text-xl font-semibold'>5. Help Instructions</h2>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                For assistance, reply HELP or contact us at:
              </p>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>Phone: 202-256-6678</p>
            </section>

            <section className='mt-8 space-y-3'>
              <h2 className='text-xl font-semibold'>6. Consent</h2>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                By providing your phone number and engaging with us (via call, SMS, or website
                forms), you consent to receive SMS messages from DMV Organizers LLC.
              </p>
            </section>

            <section className='mt-8 space-y-3'>
              <h2 className='text-xl font-semibold'>7. Privacy</h2>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                Your information will be handled in accordance with our Privacy Policy:{' '}
                <a href={privacyPolicyUrl} className='font-medium text-ink hover:text-accent'>
                  {privacyPolicyUrl}
                </a>
              </p>
            </section>

            <section className='mt-8 space-y-3'>
              <h2 className='text-xl font-semibold'>8. Contact Information</h2>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>DMV Organizers LLC</p>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                Phone:{' '}
                <a href={siteConfig.phoneHref} className='font-medium text-ink hover:text-accent'>
                  202-256-6678
                </a>
              </p>
              <p className='text-sm leading-relaxed text-muted sm:text-base'>
                Email:{' '}
                <a href={siteConfig.emailHref} className='font-medium text-ink hover:text-accent'>
                  dmvorganizersllc@gmail.com
                </a>
              </p>
            </section>
          </article>
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
