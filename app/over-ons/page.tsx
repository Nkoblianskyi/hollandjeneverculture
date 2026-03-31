import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Over Ons | Holland Jenever Culture',
  description:
    'Ontdek wie wij zijn en waarom wij de tradities van Nederlandse jenever en bier met de wereld willen delen.',
}

const values = [
  {
    title: 'Authentiek',
    desc: 'Wij vertellen het verhaal van jenever zoals het werkelijk is — zonder glans, zonder marketing. Alleen eerlijke informatie over een eerlijk product.',
  },
  {
    title: 'Respectvol',
    desc: 'Alcohol vraagt om respect. Wij promoten nooit overmatig gebruik en richten ons uitsluitend op verantwoorde volwassenen van 18 jaar en ouder.',
  },
  {
    title: 'Historisch gefundeerd',
    desc: 'Elke tekst op deze website is gebaseerd op historische bronnen. De vijf eeuwen tradities van jenever verdienen nauwkeurige documentatie.',
  },
  {
    title: 'Cultureel bewust',
    desc: 'Jenever is meer dan een drank — het is een spiegel van de Nederlandse cultuur, van de bruine kroeg tot de Kopstoot. Dat vieren wij.',
  },
]

export default function OverOnsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src="/images/over-ons-hero.jpg"
            alt="Sfeervolle bruine kroeg bar — de thuis van jenever"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(42,22,8,0.58)' }} />
          <div className="relative z-10 h-full flex items-end max-w-6xl mx-auto px-6 pb-10">
            <div>
              <p
                className="font-sans text-sm uppercase tracking-[0.3em] mb-2"
                style={{ color: '#c9a84c' }}
              >
                Wie zijn wij
              </p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white text-balance">
                Over Ons
              </h1>
            </div>
          </div>
        </section>

        {/* Mission statement */}
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="font-heading text-xl text-foreground leading-relaxed text-balance mb-6">
            Holland Jenever Culture is een platform gewijd aan het bewaren en verspreiden van de
            rijke Nederlandse jenever- en biertraditie.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Wij geloven dat een drank pas echt te waarderen is als je zijn geschiedenis kent —
            de mensen die hem maakten, de steden die groeiden dankzij hem en de rituelen die
            generaties lang rond hem zijn ontstaan.
          </p>
        </section>

        {/* Story + image */}
        <section className="bg-secondary py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-xl">
              <Image
                src="/images/over-ons-team.jpg"
                alt="Jenever cultuurobjecten — boek, glas, jeneverbessen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">
                Ons verhaal
              </p>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-5 text-balance">
                Passie voor de Hollandse tradities
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                Holland Jenever Culture is opgericht vanuit een diepe bewondering voor wat Nederland
                aan de wereld heeft gegeven: een van de meest historische gedistilleerde dranken ooit
                — jenever. De voorvader van gin, geboren in Schiedam en gekoesterd in de bruine kroeg.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                Ons platform bundelt historische informatie, smaakprofielen, verhalen over distilleerkunst
                en de eetcultuur rondom jenever en Hollands bier. Wij zijn geen producent, geen winkel —
                wij zijn verhalenvertellers.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Achter dit platform staat een team van enthousiastelingen dat gelooft dat tradities niet
                alleen bewaard moeten worden in musea, maar ook beleefd en gedeeld moeten worden met
                iedereen die nieuwsgierig is naar de Hollandse cultuur.
              </p>
            </div>
          </div>
        </section>

        {/* Values grid */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">
              Wat ons drijft
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-balance">
              Onze waarden
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card border border-border rounded p-8"
              >
                <div
                  className="w-1 h-8 rounded-full mb-5"
                  style={{ backgroundColor: '#c9a84c' }}
                />
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{v.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legal note */}
        <section className="py-14" style={{ backgroundColor: '#1f1108' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p
              className="font-sans text-sm uppercase tracking-[0.25em] mb-4"
              style={{ color: '#c9a84c' }}
            >
              Juridische informatie
            </p>
            <p
              className="font-sans leading-relaxed mb-3"
              style={{ color: 'rgba(245,240,232,0.85)' }}
            >
              Holland Jenever Culture is een initiatief van{' '}
              <strong style={{ color: '#f5f0e8' }}>
                FISCUS NOSTRUM FUND SERVICES LIMITED
              </strong>
              , geregistreerd in Cyprus (Myrianthous Anna, Panagioti Kaspi 5A, Nicosia 1095).
            </p>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.6)' }}
            >
              Deze website bevat informatie over alcoholische dranken en is uitsluitend bestemd voor
              personen van 18 jaar en ouder. Wij promoten verantwoord alcoholgebruik.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <Link
                href="/privacybeleid"
                className="font-sans text-sm underline transition-opacity hover:opacity-70"
                style={{ color: 'rgba(245,240,232,0.7)' }}
              >
                Privacybeleid
              </Link>
              <Link
                href="/cookie-beleid"
                className="font-sans text-sm underline transition-opacity hover:opacity-70"
                style={{ color: 'rgba(245,240,232,0.7)' }}
              >
                Cookiebeleid
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
