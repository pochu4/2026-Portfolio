import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { getLenis } from '../lib/lenis'
import MobileNav from './MobileNav'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const headerRef = useRef(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Exposes the sticky header's real rendered height as a CSS var so pages
  // can size full-viewport sections against the space actually left below it.
  useLayoutEffect(() => {
    const el = headerRef.current
    if (!el) return
    const setHeaderHeight = () => {
      document.documentElement.style.setProperty(
        '--header-h',
        `${el.offsetHeight}px`,
      )
    }
    setHeaderHeight()
    const observer = new ResizeObserver(setHeaderHeight)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${
          open
            ? 'border-transparent bg-white'
            : scrolled
              ? 'border-line bg-white/80 backdrop-blur-md'
              : 'border-transparent bg-white/0'
        }`}
      >
        <div className="shell flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2 text-sm">
            <span className="font-medium">{site.name}</span>
            <span className="text-muted hidden sm:inline">•</span>
            <span className="text-muted hidden sm:inline">{site.role}</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            {[
              { label: 'Projects', to: '/projects' },
              { label: 'About', to: '/about' },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={site.links.resume}
              className="text-muted hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                const lenis = getLenis()
                if (!lenis) return
                e.preventDefault()
                lenis.scrollTo('#contact')
              }}
              className="bg-ink ease-out rounded-full px-5 py-2.5 text-white transition-[opacity,transform] duration-150 hover:opacity-85 active:scale-[0.97]"
            >
              Get in Touch
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="ease-out relative z-50 flex h-6 w-7 flex-col justify-center gap-1.5 transition-transform duration-150 active:scale-90 md:hidden"
          >
            <span
              className={`bg-ink block h-px w-full transition-transform duration-300 ${
                open ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`bg-ink block h-px w-full transition-transform duration-300 ${
                open ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
