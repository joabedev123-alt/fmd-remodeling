import { siteConfig } from '../data/site'

export function scrollToContact(service?: string): void {
  if (service) {
    const params = new URLSearchParams(window.location.search)
    params.set('service', service)
    const next = `${window.location.pathname}?${params.toString()}#contact`
    window.history.replaceState({}, '', next)
    window.dispatchEvent(
      new CustomEvent('fmd:preselect-service', { detail: { service } }),
    )
  }

  const target = document.getElementById('contact')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function getEstimateHref(service?: string): string {
  if (!service) return '#contact'
  return `#contact?service=${encodeURIComponent(service)}`
}

export function buildCallAriaLabel(): string {
  return `Call ${siteConfig.companyName} at ${siteConfig.phoneDisplay}`
}
