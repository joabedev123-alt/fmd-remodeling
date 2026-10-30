import { useEffect, useState, type CSSProperties } from 'react'

type ProjectImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  style?: CSSProperties
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'async' | 'auto' | 'sync'
}

function alternateExtension(path: string): string | null {
  if (/\.jpg$/i.test(path)) return path.replace(/\.jpg$/i, '.jpeg')
  if (/\.jpeg$/i.test(path)) return path.replace(/\.jpeg$/i, '.jpg')
  return null
}

export function ProjectImage({
  src,
  alt,
  width,
  height,
  className,
  style,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
}: ProjectImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [triedAlternate, setTriedAlternate] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setCurrentSrc(src)
    setTriedAlternate(false)
    setFailed(false)
  }, [src])

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-graphite text-center text-sm text-mist ${className ?? ''}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        Photo unavailable
      </div>
    )
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      onError={() => {
        const next = !triedAlternate ? alternateExtension(currentSrc) : null
        if (next) {
          setTriedAlternate(true)
          setCurrentSrc(next)
          return
        }
        setFailed(true)
      }}
    />
  )
}
