import { getAboutMedia } from '../data/media'
import { aboutHighlights } from '../data/navigation'
import { ProjectImage } from './ProjectImage'

export function About() {
  const photo = getAboutMedia()

  return (
    <section
      id="about"
      className="section-pad bg-cream"
      aria-labelledby="about-heading"
    >
      <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative overflow-hidden rounded-xl bg-graphite shadow-soft">
          {photo ? (
            <>
              <ProjectImage
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                style={{ objectPosition: photo.objectPosition ?? 'center' }}
                loading="lazy"
              />
              {photo.stage === 'in-progress' ? (
                <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-cream">
                  In Progress
                </span>
              ) : null}
            </>
          ) : (
            <div className="flex aspect-[4/5] flex-col justify-end bg-[linear-gradient(160deg,#1b1b1b,#101010)] p-8 sm:aspect-[5/4] lg:aspect-[4/5]">
              <div className="gold-rule" />
              <p className="mt-5 font-display text-2xl text-white">
                Care in preparation.
                <br />
                Care in the finish.
              </p>
              <p className="mt-3 max-w-sm text-sm text-mist">
                Project photography will appear here once official FMD images are
                added to the media library.
              </p>
            </div>
          )}
        </div>

        <div>
          <p className="eyebrow">ABOUT FMD</p>
          <h2 id="about-heading" className="section-title">
            Care for Your Space. Commitment to Your Project.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/80">
            <p>
              FMD Remodeling Inc. provides residential and commercial remodeling
              services across Massachusetts. We approach each project with
              attention to detail, an organized work process, and a commitment to
              the finished result.
            </p>
            <p>
              Whether you’re updating a kitchen, renovating a bathroom,
              refreshing your property, or improving an outdoor space, our focus
              is on understanding your goals and bringing care to every stage of
              the work.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-charcoal">
                <i
                  className="bi bi-check2-circle mt-0.5 text-gold"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-dark mt-8">
            Tell Us About Your Project
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
