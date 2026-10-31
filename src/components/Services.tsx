import { getServiceMedia } from '../data/media'
import { serviceBlocks } from '../data/services'
import { getSmsHref } from '../data/site'
import { buildSmsAriaLabel } from '../lib/contact'
import { ProjectImage } from './ProjectImage'

export function Services() {
  return (
    <section
      id="services"
      className="section-pad bg-cream"
      aria-labelledby="services-heading"
    >
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow">WHAT WE DO</p>
          <h2 id="services-heading" className="section-title">
            Remodeling Services for Homes &amp; Businesses.
          </h2>
          <p className="section-lead">
            From focused improvements to larger remodeling projects, explore the
            services available for your property.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceBlocks.map((service) => {
            const photo = getServiceMedia(service.id)
            const showPhoto = Boolean(photo)

            return (
              <article
                key={service.id}
                className="group card-surface overflow-hidden"
              >
                {showPhoto && photo ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
                    <ProjectImage
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: photo.objectPosition ?? 'center' }}
                      loading="lazy"
                    />
                    {photo.stage === 'in-progress' ? (
                      <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-cream">
                        In Progress
                      </span>
                    ) : null}
                  </div>
                ) : null}

                <div className="p-5 sm:p-7">
                  {!showPhoto ? (
                    <span className="icon-badge" aria-hidden="true">
                      <i className={`bi ${service.icon}`} />
                    </span>
                  ) : null}
                  <h3
                    className={`font-display text-xl text-ink ${showPhoto ? '' : 'mt-4'}`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75 sm:text-[0.95rem]">
                    {service.description}
                  </p>
                  <a
                    href={getSmsHref({ service: service.formValue })}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold"
                    aria-label={buildSmsAriaLabel(service.formValue)}
                  >
                    Discuss Your Project
                    <i className="bi bi-chat-dots" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
