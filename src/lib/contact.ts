import { getSmsHref, siteConfig } from '../data/site'

export function openSmsEstimate(service?: string): void {
  window.location.href = getSmsHref({ service })
}

/** @deprecated Prefer openSmsEstimate for CTAs */
export function scrollToContact(service?: string): void {
  openSmsEstimate(service)
}

export function getEstimateHref(service?: string): string {
  return getSmsHref({ service })
}

export function buildCallAriaLabel(): string {
  return `Call ${siteConfig.companyName} at ${siteConfig.phoneDisplay}`
}

export function buildSmsAriaLabel(service?: string): string {
  const detail = service ? ` about ${service}` : ''
  return `Text ${siteConfig.companyName} at ${siteConfig.phoneDisplay}${detail}`
}
