'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/geschiedenis', label: 'Geschiedenis' },
  { href: '/bier', label: 'Bier' },
  { href: '/over-ons', label: 'Over ons' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solidBg = !isHome || scrolled || open

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidBg
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`font-heading font-bold text-lg tracking-wide transition-colors ${
              solidBg ? 'text-primary' : 'text-white'
            }`}
          >
            Holland
          </span>
          <span
            className={`font-heading text-xs tracking-[0.2em] uppercase transition-colors ${
              solidBg ? 'text-accent' : ''
            }`}
            style={!solidBg ? { color: '#c9a84c' } : {}}
          >
            Jenever Culture
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-current after:transition-all after:duration-200 ${
                pathname === l.href
                  ? `after:w-full ${solidBg ? 'text-primary font-semibold' : 'text-white font-semibold'}`
                  : `after:w-0 hover:after:w-full ${solidBg ? 'text-foreground hover:text-primary' : 'text-white/80 hover:text-white'}`
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden transition-colors ${solidBg ? 'text-foreground' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu openen"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide py-1 transition-colors ${
                pathname === l.href ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t border-border pt-4 flex gap-4">
            <Link href="/cookie-beleid" className="text-xs text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Cookiebeleid</Link>
            <Link href="/privacybeleid" className="text-xs text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Privacybeleid</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
