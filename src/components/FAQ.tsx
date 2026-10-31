import { useId, useState } from 'react'
import { faqItems } from '../data/faq'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)
  const baseId = useId()

  return (
    <section
      id="faq"
      className="section-pad bg-graphite text-cream"
      aria-labelledby="faq-heading"
    >
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading" className="section-title text-white">
            Questions Before You Get Started?
          </h2>
          <p className="mt-4 max-w-md text-mist">
            Straightforward answers about services, coverage, and how to start a
            conversation about your project.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => {
            const expanded = openId === item.id
            const panelId = `${baseId}-${item.id}-panel`
            const buttonId = `${baseId}-${item.id}-button`

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-white/10 bg-ink/35"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-trigger flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenId((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                  >
                    <span className="font-display text-base text-white sm:text-lg">
                      {item.question}
                    </span>
                    <i
                      className="faq-chevron bi bi-chevron-down shrink-0 text-gold transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!expanded}
                  className="border-t border-white/10 px-4 pb-5 pt-3 sm:px-5"
                >
                  <p className="text-sm leading-relaxed text-mist sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
