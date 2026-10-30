import { useEffect, useId, useState } from 'react'
import { navLinks } from '../data/navigation'
import { siteConfig } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { getSmsHref } from '../data/site'
import { buildCallAriaLabel, buildSmsAriaLabel } from '../lib/contact'
import { BrandMark } from './BrandMark'
import { TopBar } from './TopBar'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection([
    'home',
    'services',
    'our-work',
    'about',
    'service-areas',
    'contact',
  ])
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || open
            ? 'border-white/10 bg-ink'
            : 'border-transparent bg-ink/70 backdrop-blur-md'
        }`}
      >
        <div className="site-container flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
          <a href="#home" className="relative z-10 shrink-0" onClick={closeMenu}>
            <BrandMark compact />
          </a>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  data-active={activeId === id}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={getSmsHref()}
              className="btn-primary"
              aria-label={buildSmsAriaLabel()}
            >
              Request an Estimate
              <i className="bi bi-chat-dots" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-cream lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'} text-xl`} aria-hidden="true" />
          </button>
        </div>

        <div
          id={menuId}
          className={`border-t border-white/10 bg-ink lg:hidden ${open ? 'block' : 'hidden'}`}
        >
          <nav
            className="site-container flex max-h-[min(70svh,28rem)] flex-col gap-1 overflow-y-auto py-4 pb-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base text-cream hover:bg-white/5 hover:text-gold"
                  data-active={activeId === id}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href={siteConfig.phoneTel}
              className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-3 text-cream hover:text-gold"
              aria-label={buildCallAriaLabel()}
              onClick={closeMenu}
            >
              <i className="bi bi-telephone" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={getSmsHref()}
              className="btn-primary mt-2"
              aria-label={buildSmsAriaLabel()}
              onClick={closeMenu}
            >
              Request an Estimate
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
