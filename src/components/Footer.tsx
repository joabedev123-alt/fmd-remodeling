import { footerQuickLinks, footerServiceLinks } from '../data/navigation'
import { getWhatsAppUrl, hasSocialLinks, siteConfig } from '../data/site'
import { buildCallAriaLabel } from '../lib/contact'
import { BrandMark } from './BrandMark'

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappUrl = getWhatsAppUrl()
  const social = siteConfig.social

  return (
    <footer className="bg-ink text-mist">
      <div className="site-container grid gap-10 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Residential and commercial remodeling with attention to detail,
            organization, and commitment to every project.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5">
            {footerServiceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-2 hover:text-gold"
                aria-label={buildCallAriaLabel()}
              >
                <i className="bi bi-telephone" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <i className="bi bi-geo-alt mt-0.5" aria-hidden="true" />
              <span>
                Massachusetts
                <br />
                Greater Boston &amp; Surrounding Areas
              </span>
            </li>
            {whatsappUrl ? (
              <li>
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center gap-2 hover:text-gold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            ) : null}
            {hasSocialLinks() ? (
              <li className="flex flex-wrap gap-3 pt-1">
                {social.facebook ? (
                  <a href={social.facebook} className="hover:text-gold" target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                ) : null}
                {social.instagram ? (
                  <a href={social.instagram} className="hover:text-gold" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                ) : null}
                {social.linkedin ? (
                  <a href={social.linkedin} className="hover:text-gold" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                ) : null}
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="site-container flex flex-col gap-4 py-6 pb-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:pb-6">
        <p>
          © {year} {siteConfig.companyName}. All rights reserved.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href={siteConfig.credit.href}
            target="_blank"
            rel="noreferrer"
            className="text-mist/80 transition hover:text-gold"
          >
            {siteConfig.credit.label}
          </a>
          <a
            href="#home"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-cream transition hover:border-gold hover:text-gold sm:w-auto"
          >
            Back to Top
            <i className="bi bi-arrow-up" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
