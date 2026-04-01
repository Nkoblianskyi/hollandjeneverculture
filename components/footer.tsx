import Link from 'next/link'
import Image from 'next/image'

const GOLD = '#c9a84c'
const CREAM = '#f5f0e8'
const CREAM80 = 'rgba(245,240,232,0.8)'
const CREAM55 = 'rgba(245,240,232,0.55)'
const CREAM45 = 'rgba(245,240,232,0.45)'
const CREAM15 = 'rgba(245,240,232,0.15)'
const BG = '#1f1108'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/geschiedenis', label: 'Geschiedenis' },
  { href: '/catalogus', label: 'Catalogus' },
]

const legalLinks = [
  { href: '/cookie-beleid', label: 'Cookiebeleid' },
  { href: '/privacybeleid', label: 'Privacybeleid' },
]

export function Footer() {
  return (
    <footer className="mt-20" style={{ backgroundColor: BG, color: CREAM }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/favicon.ico" width={32} height={32} alt="Holland Jenever Culture" />
              <h3 className="font-heading font-bold text-xl" style={{ color: GOLD }}>
                Holland Jenever Culture
              </h3>
            </div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: CREAM80 }}>
              Gewijd aan de rijke traditie van Nederlandse jenever — de voorvader van gin, geboren in de 16e eeuw.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold mb-4 uppercase tracking-wider text-sm" style={{ color: GOLD }}>
              Navigatie
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-sm transition-opacity hover:opacity-70" style={{ color: CREAM80 }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + address */}
          <div>
            <h4 className="font-heading font-semibold mb-4 uppercase tracking-wider text-sm" style={{ color: GOLD }}>
              Juridisch
            </h4>
            <ul className="flex flex-col gap-2 mb-6">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-sm transition-opacity hover:opacity-70" style={{ color: CREAM80 }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <address className="not-italic font-sans text-xs leading-relaxed" style={{ color: CREAM55 }}>
              FISCUS NOSTRUM FUND SERVICES LIMITED<br />
              Myrianthous Anna, Panagioti Kaspi 5A<br />
              Nicosia 1095, Cyprus<br />
              E-mail:{' '}
              <a
                href="mailto:contac@hollandjeneverculture.com"
                className="transition-opacity hover:opacity-70"
                style={{ color: CREAM80 }}
              >
                contac@hollandjeneverculture.com
              </a>
            </address>
          </div>

        </div>

        <div
          className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs"
          style={{ borderColor: CREAM15, color: CREAM45 }}
        >
          <p>&copy; {new Date().getFullYear()} hollandjeneverculture.com — Alle rechten voorbehouden.</p>
          <p>Jenever en bier bevatten alcohol. De inhoud van deze website is uitsluitend bedoeld voor personen van 18 jaar en ouder.</p>
        </div>
      </div>
    </footer>
  )
}
