import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico?v=2' sizes='any' />
        <link rel='shortcut icon' href='/favicon.ico?v=2' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icon-192.png?v=2' />
        <link rel='icon' type='image/png' sizes='512x512' href='/icon-512.png?v=2' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png?v=2' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
