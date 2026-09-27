import { useEffect, useState } from 'react'
import './Header.css'

const links = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#about', label: 'About' },
  { href: '#sermons', label: 'Sermons' },
  { href: '#events', label: 'Events' },
  { href: '#give', label: 'Give' },
  { href: '#visit', label: 'Visit' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#" className="site-header__brand">
          <span className="site-header__mark" aria-hidden />
          <span className="site-header__name">Grace Community</span>
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#visit" className="btn btn-primary site-header__cta">
          Plan a visit
        </a>

        <button
          type="button"
          className="site-header__menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`site-header__drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#visit" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Plan a visit
          </a>
        </nav>
      </div>
    </header>
  )
}
