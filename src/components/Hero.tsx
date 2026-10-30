import { getHeroMedia } from '../data/media'
import { siteConfig } from '../data/site'
import { buildCallAriaLabel } from '../lib/contact'
import { ProjectImage } from './ProjectImage'

const attributes = [
  { icon: 'bi-house-door', label: 'Residential & Commercial' },
  { icon: 'bi-check2-circle', label: 'Detail-Focused Work' },
  { icon: 'bi-tools', label: 'Organized Project Approach' },
] as const

export function Hero() {
  const heroMedia = getHeroMedia()
  const isCompleted = heroMedia?.stage === 'completed'

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-ink text-cream"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        {heroMedia ? (
          <>
            <ProjectImage
              src={heroMedia.src}
              alt={heroMedia.alt}
              width={heroMedia.width}
              height={heroMedia.height}
              className="h-full w-full object-cover"
              style={{ objectPosition: heroMedia.objectPosition ?? 'center' }}
              fetchPriority="high"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/90 sm:bg-gradient-to-r sm:from-ink/90 sm:via-ink/50 sm:to-ink/20" />
            <div className="absolute inset-0 hidden bg-gradient-to-t from-ink/80 via-transparent to-ink/25 sm:block" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.16),_transparent_55%),linear-gradient(160deg,#101010_0%,#1b1b1b_48%,#101010_100%)]" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(232,201,106,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(232,201,106,0.35) 1px, transparent 1px)',
                backgroundSize: '72px 72px',
              }}
              aria-hidden="true"
            />
          </>
        )}
      </div>

      <div className="site-container flex flex-col justify-end pb-10 pt-16 sm:min-h-[calc(100svh-6.5rem)] sm:justify-center sm:py-20 lg:min-h-[82vh] lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-light">
            FMD REMODELING INC. · MASSACHUSETTS
          </p>
          <h1
            id="hero-heading"
            className="mt-3 font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl"
          >
            Thoughtful Remodeling. Quality in Every Detail.
          </h1>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-mist sm:mt-5 sm:text-lg">
            Residential and commercial remodeling across Greater Boston and
            nearby Massachusetts communities. From kitchens and bathrooms to
            flooring, painting, decks, and carpentry, we bring care and
            commitment to every project.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#contact" className="btn-primary">
              Request an Estimate
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
            <a href="#our-work" className="btn-secondary">
              Explore Our Work
            </a>
          </div>

          <a
            href={siteConfig.phoneTel}
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-cream/90 transition hover:text-gold sm:mt-5"
            aria-label={buildCallAriaLabel()}
          >
            <i className="bi bi-telephone" aria-hidden="true" />
            Call {siteConfig.phoneDisplay}
          </a>

          {heroMedia && !isCompleted ? (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-mist">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              Featured photo: work in progress
            </p>
          ) : null}
        </div>

        <ul className="mt-8 grid gap-2.5 border-t border-white/10 pt-6 sm:mt-12 sm:grid-cols-3 sm:gap-3 sm:pt-8">
          {attributes.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-mist sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
            >
              <span className="icon-badge shrink-0 !h-9 !w-9 text-base sm:!h-11 sm:!w-11 sm:text-lg" aria-hidden="true">
                <i className={`bi ${item.icon}`} />
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
