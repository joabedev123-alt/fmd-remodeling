import { getSmsHref, getWhatsAppUrl, siteConfig } from '../data/site'
import { buildCallAriaLabel, buildSmsAriaLabel } from '../lib/contact'

export function MobileContactBar() {
  const whatsappUrl = getWhatsAppUrl()
  const smsHref = getSmsHref()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur supports-[backdrop-filter]:bg-ink/88 md:hidden">
      <div
        className={`mx-auto grid max-w-site gap-2 ${whatsappUrl ? 'grid-cols-3' : 'grid-cols-2'}`}
      >
        <a
          href={siteConfig.phoneTel}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-3 text-sm font-semibold text-cream active:bg-white/10"
          aria-label={buildCallAriaLabel()}
        >
          <i className="bi bi-telephone" aria-hidden="true" />
          Call
        </a>
        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-3 text-sm font-semibold text-cream active:bg-white/10"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            WhatsApp
          </a>
        ) : null}
        <a
          href={smsHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gold px-3 text-sm font-semibold text-ink active:bg-gold-light"
          aria-label={buildSmsAriaLabel()}
        >
          <i className="bi bi-chat-dots" aria-hidden="true" />
          Text Us
        </a>
      </div>
    </div>
  )
}
