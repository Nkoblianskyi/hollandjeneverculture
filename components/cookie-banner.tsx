'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookiemelding"
      className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl border-t"
      style={{ backgroundColor: 'var(--cafe-brown)', borderColor: 'rgba(245,240,232,0.15)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="font-sans text-sm leading-relaxed flex-1" style={{ color: 'rgba(245,240,232,0.9)' }}>
          Wij gebruiken cookies om uw ervaring te verbeteren en het websiteverkeer te analyseren.
          Door verder te gaan, gaat u akkoord met ons{' '}
          <Link
            href="/cookie-beleid"
            className="underline transition-colors hover:text-jenever-gold"
            style={{ color: 'rgba(245,240,232,0.9)' }}
          >
            cookiebeleid
          </Link>{' '}
          en{' '}
          <Link
            href="/privacybeleid"
            className="underline transition-colors hover:text-jenever-gold"
            style={{ color: 'rgba(245,240,232,0.9)' }}
          >
            privacybeleid
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 font-sans text-sm rounded transition-colors border"
            style={{ borderColor: 'rgba(245,240,232,0.35)', color: 'rgba(245,240,232,0.75)' }}
          >
            Weigeren
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 font-sans text-sm font-semibold rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#c9a84c', color: '#1f1108' }}
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  )
}
