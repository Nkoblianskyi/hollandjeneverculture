import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Holland Jenever Culture — De Traditie van Nederlandse Jenever',
  description:
    'Ontdek de rijke geschiedenis en traditie van Nederlandse jenever. Van Schiedam tot de bruine kroeg — alles over de voorvader van gin.',
  keywords: ['jenever', 'Nederlandse jenever', 'hollands', 'Schiedam', 'korenwijn', 'oude jenever', 'jonge jenever'],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${playfair.variable} ${lora.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
