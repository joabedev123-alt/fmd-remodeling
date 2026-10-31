import { brandMedia } from '../data/media'
import { siteConfig } from '../data/site'

type BrandMarkProps = {
  className?: string
  compact?: boolean
}

export function BrandMark({ className = '', compact = false }: BrandMarkProps) {
  const hasLogo = Boolean(brandMedia.logo.src)

  if (hasLogo) {
    return (
      <img
        src={brandMedia.logo.src}
        alt={brandMedia.logo.alt}
        width={brandMedia.logo.width}
        height={brandMedia.logo.height}
        className={`w-auto object-contain object-left ${
          compact
            ? 'h-12 max-h-12 sm:h-14 sm:max-h-14'
            : 'h-14 max-h-14 sm:h-16 sm:max-h-16'
        } ${className}`}
        decoding="async"
      />
    )
  }

  return (
    <span
      className={`inline-flex flex-col leading-none text-white ${className}`}
      aria-label={siteConfig.companyName}
    >
      <span className="font-display text-lg font-bold tracking-[0.14em] text-gold sm:text-xl">
        FMD
      </span>
      <span
        className={`mt-1 font-display text-[0.65rem] font-medium uppercase tracking-[0.18em] text-cream/90 ${
          compact ? 'hidden sm:inline' : ''
        }`}
      >
        Remodeling Inc.
      </span>
    </span>
  )
}
