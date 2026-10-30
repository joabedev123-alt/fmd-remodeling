import { useEffect, useId, useRef } from 'react'
import type { MediaItem } from '../data/media'
import { categoryLabels } from '../data/media'
import { ProjectImage } from './ProjectImage'

type LightboxProps = {
  items: MediaItem[]
  index: number
  onClose: () => void
  onNavigate: (nextIndex: number) => void
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const item = items[index]

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNavigate((index + 1) % items.length)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onNavigate((index - 1 + items.length) % items.length)
      }
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
      previous?.focus()
    }
  }, [index, items.length, onClose, onNavigate])

  if (!item) return null

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="relative flex max-h-[92svh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl bg-graphite shadow-lift sm:rounded-xl"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-cream">
          <div className="min-w-0">
            <p id={titleId} className="truncate font-display text-sm sm:text-base">
              {item.caption}
            </p>
            <p className="mt-0.5 text-xs text-mist">
              {categoryLabels[item.category]}
              {item.stage === 'in-progress' ? ' · In Progress' : ''}
              {` · ${index + 1} of ${items.length}`}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 text-cream hover:border-gold hover:text-gold"
            aria-label="Close gallery"
            onClick={onClose}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex min-h-[50svh] flex-1 items-center justify-center bg-ink p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:min-h-0 sm:p-6">
          <ProjectImage
            key={item.id}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="max-h-[62svh] w-auto max-w-full object-contain sm:max-h-[70vh]"
            style={{ objectPosition: item.objectPosition ?? 'center' }}
            loading="eager"
          />

          {items.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/80 text-cream hover:border-gold hover:text-gold sm:left-3 sm:h-11 sm:w-11"
                aria-label="Previous photo"
                onClick={() => onNavigate((index - 1 + items.length) % items.length)}
              >
                <i className="bi bi-chevron-left" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/80 text-cream hover:border-gold hover:text-gold sm:right-3 sm:h-11 sm:w-11"
                aria-label="Next photo"
                onClick={() => onNavigate((index + 1) % items.length)}
              >
                <i className="bi bi-chevron-right" aria-hidden="true" />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
