import { siteConfig } from '../data/site'
import { buildCallAriaLabel } from '../lib/contact'

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-ink text-mist md:block">
      <div className="site-container flex h-10 items-center justify-between gap-4 text-xs tracking-wide">
        <p className="truncate">
          Residential &amp; Commercial Remodeling in Massachusetts
        </p>
        <a
          href={siteConfig.phoneTel}
          className="inline-flex items-center gap-2 text-cream transition hover:text-gold"
          aria-label={buildCallAriaLabel()}
        >
          <i className="bi bi-telephone" aria-hidden="true" />
          <span>{siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </div>
  )
}
