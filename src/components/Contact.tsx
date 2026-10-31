import { useEffect, useId, useState, type FormEvent, type ReactNode } from 'react'
import {
  getSmsHref,
  getWhatsAppUrl,
  serviceOptions,
  siteConfig,
  type ServiceOption,
} from '../data/site'
import { buildCallAriaLabel, buildSmsAriaLabel } from '../lib/contact'

type FormState = {
  fullName: string
  phone: string
  email: string
  city: string
  service: ServiceOption | ''
  details: string
  company: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = {
  fullName: '',
  phone: '',
  email: '',
  city: '',
  service: '',
  details: '',
  company: '',
}

function readServiceFromLocation(): ServiceOption | '' {
  const params = new URLSearchParams(window.location.search)
  const hash = window.location.hash
  const fromQuery = params.get('service')
  const hashMatch = hash.match(/service=([^&]+)/)
  const raw = fromQuery ?? (hashMatch ? decodeURIComponent(hashMatch[1]) : '')
  if (!raw) return ''
  return serviceOptions.includes(raw as ServiceOption)
    ? (raw as ServiceOption)
    : ''
}

export function Contact() {
  const formEnabled = siteConfig.form.enabled && Boolean(siteConfig.form.endpoint)
  const whatsappUrl = getWhatsAppUrl()
  const formId = useId()
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    const applyService = (service?: string) => {
      const next = service ?? readServiceFromLocation()
      if (!next) return
      if (serviceOptions.includes(next as ServiceOption)) {
        setForm((current) => ({
          ...current,
          service: next as ServiceOption,
        }))
      }
    }

    applyService()

    const onPreselect = (event: Event) => {
      const detail = (event as CustomEvent<{ service?: string }>).detail
      applyService(detail?.service)
    }

    window.addEventListener('fmd:preselect-service', onPreselect)
    return () => window.removeEventListener('fmd:preselect-service', onPreselect)
  }, [])

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.'
    if (!form.city.trim()) next.city = 'Please enter your city or town.'
    if (!form.service) next.service = 'Please select a service.'
    if (!form.details.trim()) {
      next.details = 'Please share a short description of your project.'
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    return next
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!formEnabled) return

    if (form.company.trim()) {
      setStatus('error')
      setStatusMessage('Unable to send your request. Please try again or call us.')
      return
    }

    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('error')
      setStatusMessage('Please review the highlighted fields and try again.')
      return
    }

    setStatus('submitting')
    setStatusMessage('')

    try {
      const response = await fetch(siteConfig.form.endpoint, {
        method: siteConfig.form.method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          city: form.city.trim(),
          service: form.service,
          details: form.details.trim(),
          source: 'fmd-landing-page',
        }),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setStatus('success')
      setStatusMessage(
        'Thank you. Your estimate request was sent. We will follow up soon.',
      )
      setForm(initialForm)
    } catch {
      setStatus('error')
      setStatusMessage(
        'We could not send your request right now. Please call us or try again.',
      )
    }
  }

  return (
    <section
      id="contact"
      className="section-pad bg-ink text-cream"
      aria-labelledby="contact-heading"
    >
      <div className="site-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <p className="eyebrow">LET’S TALK ABOUT YOUR PROJECT</p>
          <h2 id="contact-heading" className="section-title text-white">
            Ready to Improve Your Space?
          </h2>
          <p className="section-lead text-mist">
            Tell us what you have in mind. Contact FMD Remodeling Inc. to discuss
            your remodeling project in Massachusetts.
          </p>

          <dl className="mt-7 space-y-5 rounded-xl border border-white/10 bg-graphite/70 p-5 sm:mt-8 sm:p-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-gold">
                Company
              </dt>
              <dd className="mt-1 font-display text-lg text-white">
                {siteConfig.companyName}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-gold">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center gap-2 text-lg text-white transition hover:text-gold"
                  aria-label={buildCallAriaLabel()}
                >
                  <i className="bi bi-telephone" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-gold">
                Service Area
              </dt>
              <dd className="mt-1 text-mist">{siteConfig.serviceAreaSummary}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={getSmsHref()}
              className="btn-primary"
              aria-label={buildSmsAriaLabel()}
            >
              Text Us
              <i className="bi bi-chat-dots" aria-hidden="true" />
            </a>
            <a href={siteConfig.phoneTel} className="btn-secondary">
              Call Now
              <i className="bi bi-telephone" aria-hidden="true" />
            </a>
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
                <i className="bi bi-whatsapp" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative rounded-xl border border-white/10 bg-graphite p-5 shadow-lift sm:p-8">
          {formEnabled ? (
            <form
              onSubmit={onSubmit}
              noValidate
              className="relative"
              aria-describedby={statusMessage ? `${formId}-status` : undefined}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id={`${formId}-name`}
                  label="Full Name"
                  required
                  error={errors.fullName}
                >
                  <input
                    id={`${formId}-name`}
                    name="fullName"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className="field-input"
                    aria-invalid={Boolean(errors.fullName)}
                  />
                </Field>

                <Field
                  id={`${formId}-phone`}
                  label="Phone Number"
                  required
                  error={errors.phone}
                >
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="field-input"
                    aria-invalid={Boolean(errors.phone)}
                  />
                </Field>

                <Field id={`${formId}-email`} label="Email" error={errors.email}>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="field-input"
                    aria-invalid={Boolean(errors.email)}
                  />
                </Field>

                <Field
                  id={`${formId}-city`}
                  label="City / Town"
                  required
                  error={errors.city}
                >
                  <input
                    id={`${formId}-city`}
                    name="city"
                    autoComplete="address-level2"
                    value={form.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    className="field-input"
                    aria-invalid={Boolean(errors.city)}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field
                    id={`${formId}-service`}
                    label="Service Needed"
                    required
                    error={errors.service}
                  >
                    <select
                      id={`${formId}-service`}
                      name="service"
                      value={form.service}
                      onChange={(e) =>
                        updateField('service', e.target.value as ServiceOption | '')
                      }
                      className="field-input"
                      aria-invalid={Boolean(errors.service)}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <Field
                    id={`${formId}-details`}
                    label="Project Details"
                    required
                    error={errors.details}
                  >
                    <textarea
                      id={`${formId}-details`}
                      name="details"
                      rows={5}
                      value={form.details}
                      onChange={(e) => updateField('details', e.target.value)}
                      className="field-input resize-y"
                      aria-invalid={Boolean(errors.details)}
                    />
                  </Field>
                </div>
              </div>

              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor={`${formId}-company`}>Company</label>
                <input
                  id={`${formId}-company`}
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) => updateField('company', e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-6 w-full sm:w-auto"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Request My Estimate'}
              </button>

              {statusMessage ? (
                <p
                  id={`${formId}-status`}
                  role="status"
                  className={`mt-4 text-sm ${
                    status === 'success' ? 'text-gold-light' : 'text-red-300'
                  }`}
                >
                  {statusMessage}
                </p>
              ) : null}
            </form>
          ) : (
            <div>
              <div className="gold-rule" />
              <h3 className="mt-5 font-display text-2xl text-white">
                Request an Estimate by Text
              </h3>
              <p className="mt-3 text-mist">
                Send us a message to discuss your remodeling project. A short
                text with your service type and city helps us get started.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-cream/90">
                <li className="flex items-start gap-3">
                  <i className="bi bi-check2-circle mt-0.5 text-gold" aria-hidden="true" />
                  Share the service you need and your city.
                </li>
                <li className="flex items-start gap-3">
                  <i className="bi bi-check2-circle mt-0.5 text-gold" aria-hidden="true" />
                  Describe the scope in a few sentences.
                </li>
                <li className="flex items-start gap-3">
                  <i className="bi bi-check2-circle mt-0.5 text-gold" aria-hidden="true" />
                  Photos can also help when shared through an available channel.
                </li>
              </ul>
              <a
                href={getSmsHref()}
                className="btn-primary mt-8"
                aria-label={buildSmsAriaLabel()}
              >
                Text {siteConfig.phoneDisplay}
                <i className="bi bi-chat-dots" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  const errorId = `${id}-error`
  return (
    <div className="relative">
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-cream">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  )
}
