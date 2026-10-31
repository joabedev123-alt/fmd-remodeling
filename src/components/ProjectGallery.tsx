import { useMemo, useState } from 'react'
import {
  categoryLabels,
  getGalleryCategories,
  getGalleryMedia,
  type MediaCategory,
} from '../data/media'
import { getSmsHref } from '../data/site'
import { buildSmsAriaLabel } from '../lib/contact'
import { Lightbox } from './Lightbox'
import { ProjectImage } from './ProjectImage'

export function ProjectGallery() {
  const media = getGalleryMedia()
  const categories = getGalleryCategories()
  const showFilters = media.length >= 6 && categories.length >= 2
  const [filter, setFilter] = useState<'all' | MediaCategory>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    if (filter === 'all') return media
    return media.filter((item) => item.category === filter)
  }, [filter, media])

  return (
    <section
      id="our-work"
      className="section-pad bg-ink text-cream"
      aria-labelledby="work-heading"
    >
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow">OUR WORK</p>
          <h2 id="work-heading" className="section-title text-white">
            Real Projects. Visible Attention to Detail.
          </h2>
          <p className="section-lead text-mist">
            Explore work completed and in progress by FMD Remodeling Inc.
          </p>
        </div>

        {showFilters ? (
          <div
            className="gallery-filters mt-6 sm:mt-8"
            role="group"
            aria-label="Filter projects"
          >
            <button
              type="button"
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === 'all'
                  ? 'border-gold bg-gold/15 text-gold'
                  : 'border-white/15 text-mist hover:border-gold/50 hover:text-cream'
              }`}
              aria-pressed={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  filter === category
                    ? 'border-gold bg-gold/15 text-gold'
                    : 'border-white/15 text-mist hover:border-gold/50 hover:text-cream'
                }`}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        ) : null}

        {filtered.length > 0 ? (
          <div className="mt-7 grid auto-rows-[176px] gap-2.5 sm:mt-10 sm:auto-rows-[220px] sm:grid-cols-2 sm:gap-4 lg:auto-rows-[260px] lg:grid-cols-3">
            {filtered.map((item, index) => {
              const span =
                index % 7 === 0
                  ? 'sm:col-span-2 sm:row-span-2'
                  : index % 5 === 0
                    ? 'lg:row-span-2'
                    : ''

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`gallery-tile group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${span}`}
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Open photo: ${item.caption}`}
                >
                  <ProjectImage
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    style={{ objectPosition: item.objectPosition ?? 'center' }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    {item.stage === 'in-progress' ? (
                      <span className="mb-1.5 inline-flex rounded-full bg-gold/20 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-light sm:mb-2 sm:text-[0.7rem]">
                        In Progress
                      </span>
                    ) : null}
                    <p className="font-display text-[0.8rem] leading-snug text-white sm:text-base">
                      {item.caption}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-white/10 bg-graphite/80 p-8 sm:p-10">
            <div className="gold-rule" />
            <h3 className="mt-5 font-display text-2xl text-white">
              Project photography coming soon
            </h3>
            <p className="mt-3 max-w-2xl text-mist">
              Real photos from FMD Remodeling Inc. projects will appear in this
              gallery. In-progress and completed work will be labeled clearly,
              without stock imagery or invented project details.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Careful finishes', 'Organized execution', 'Clear communication'].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-ink/40 px-4 py-5"
                  >
                    <i
                      className="bi bi-check2-circle text-gold"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-sm text-cream">{label}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-display text-xl text-white sm:text-2xl">
            Have a similar project in mind?
          </p>
          <a
            href={getSmsHref()}
            className="btn-primary"
            aria-label={buildSmsAriaLabel()}
          >
            Let’s Talk About It
            <i className="bi bi-chat-dots" aria-hidden="true" />
          </a>
        </div>
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </section>
  )
}
