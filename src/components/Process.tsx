import { processSteps } from '../data/navigation'

export function Process() {
  return (
    <section
      id="process"
      className="section-pad bg-graphite text-cream"
      aria-labelledby="process-heading"
    >
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 id="process-heading" className="section-title text-white">
            A Clear Path From First Contact to the Final Details.
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="relative rounded-xl border border-white/10 bg-ink/40 p-6"
            >
              <span className="font-display text-4xl font-semibold text-gold/90">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                {step.description}
              </p>
              {index < processSteps.length - 1 ? (
                <span
                  className="pointer-events-none absolute -right-3 top-10 hidden h-px w-6 bg-gold/50 lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
