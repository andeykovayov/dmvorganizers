type AnalyticsParams = Record<string, string | number | boolean>

type GtagFunction = (command: 'event', eventName: string, params?: AnalyticsParams) => void

type WindowWithGtag = Window & {
  gtag?: GtagFunction
}

export function trackEvent(eventName: string, params?: AnalyticsParams) {
  if (typeof window === 'undefined') {
    return
  }

  const gtag = (window as WindowWithGtag).gtag
  if (typeof gtag !== 'function') {
    return
  }

  gtag('event', eventName, params)
}
