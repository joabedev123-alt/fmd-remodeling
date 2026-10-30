import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'home',
  'services',
  'our-work',
  'about',
  'process',
  'service-areas',
  'faq',
  'contact',
] as const

export function useActiveSection(navIds: readonly string[] = SECTION_IDS) {
  const [activeId, setActiveId] = useState<string>('home')

  useEffect(() => {
    const elements = navIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [navIds])

  return activeId
}
