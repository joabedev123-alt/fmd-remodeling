import { getSmsHref, siteConfig } from '../data/site'
import { buildSmsAriaLabel } from '../lib/contact'

export function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="section-pad bg-cream"
      aria-labelledby="areas-heading"
    >
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">WHERE WE WORK</p>
            <h2 id="areas-heading" className="section-title">
              Serving Greater Boston &amp; Nearby Massachusetts Communities.
            </h2>
            <p className="section-lead">
              FMD Remodeling Inc. serves residential and commercial clients in
              Boston and surrounding Massachusetts communities.
            </p>
          </div>
          <p className="max-w-md text-sm text-charcoal/75 lg:justify-self-end">
            Don’t see your town listed? Contact us to ask about service
            availability.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.cities.map((city) => (
            <li
              key={city}
              className="flex items-center gap-3 rounded-xl border border-black/5 bg-white px-4 py-4 shadow-soft"
            >
              <span className="icon-badge shrink-0" aria-hidden="true">
                <i className="bi bi-geo-alt" />
              </span>
              <span className="font-display text-base text-ink">{city}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-dashed border-ink/15 bg-white/60 px-4 py-4 sm:flex-row sm:items-center sm:gap-3 sm:px-5">
          <div className="flex items-start gap-3 sm:items-center">
            <i className="bi bi-geo-alt mt-0.5 text-gold sm:mt-0" aria-hidden="true" />
            <p className="text-sm text-charcoal/80">
              Plus surrounding areas across {siteConfig.regionLabel}.
            </p>
          </div>
          <a
            href={getSmsHref()}
            className="btn-outline-dark sm:ml-auto"
            aria-label={buildSmsAriaLabel()}
          >
            Check Your Location
          </a>
        </div>
      </div>
    </section>
  )
}
