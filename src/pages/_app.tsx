import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { trackEvent } from '@/lib/analytics'
import '@/styles/globals.css'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DMV Organizers LLC',
  areaServed: ['Northern Virginia', 'Washington DC', 'Montgomery County'],
  serviceType: 'Home Organizing',
  telephone: '+1-202-256-6678',
  url: 'https://www.dmvorganizers.com',
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) {
        return
      }

      const callLink = target.closest('a[href^="tel:"]')
      if (!(callLink instanceof HTMLAnchorElement)) {
        return
      }

      const phoneHref = callLink.getAttribute('href') ?? ''
      trackEvent('click_to_call', {
        phone_number: phoneHref.replace(/^tel:/, ''),
        link_text: (callLink.textContent ?? '').trim(),
        page_path: window.location.pathname,
      })
      trackEvent('conversion', {
        send_to: 'AW-18012335118/axsBCObXtpwcEI7Y-YxD',
      })
    }

    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  useEffect(() => {
    const trackHomepageViewConversion = (url: string) => {
      const normalizedPath = (url.split('#')[0] ?? '').split('?')[0] || '/'
      if (normalizedPath !== '/') {
        return
      }

      trackEvent('conversion', {
        send_to: 'AW-18012335118/WzRoCMnlnpwcEI7Y-YxD',
      })
    }

    trackHomepageViewConversion(window.location.pathname)
    router.events.on('routeChangeComplete', trackHomepageViewConversion)

    return () => {
      router.events.off('routeChangeComplete', trackHomepageViewConversion)
    }
  }, [router])

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico?v=2' sizes='any' />
        <link rel='shortcut icon' href='/favicon.ico?v=2' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icon-192.png?v=2' />
        <link rel='icon' type='image/png' sizes='512x512' href='/icon-512.png?v=2' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png?v=2' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
