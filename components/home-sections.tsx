import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-jenever.jpg"
          alt="Traditionele Nederlandse bruine kroeg met jenever"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(42,22,8,0.58)' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-0">
        <div className="max-w-2xl">
          <p className="font-sans text-sm uppercase tracking-[0.3em] mb-4" style={{ color: '#c9a84c' }}>
            Sinds de 16e eeuw
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight text-balance mb-6">
            De ziel van Nederland in een glas
          </h1>
          <p className="font-sans text-white/85 text-lg leading-relaxed mb-8 max-w-xl">
            Jenever — het legendaire gedistilleerde dranken uit Nederland, voorvader van de moderne gin.
            Ontdek vijf eeuwen smaak, vakmanschap en bruine-kroeg-cultuur.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/bier"
              className="px-7 py-3 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity rounded"
              style={{ backgroundColor: '#c9a84c', color: '#1f1108' }}
            >
              Ontdek onze bieren
            </Link>
            <Link
              href="/geschiedenis"
              className="px-7 py-3 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors rounded"
            >
              Lees de geschiedenis
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  )
}

export function AlcoholWarning() {
  return (
    <section className="bg-secondary border-y border-border py-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <AlertTriangle className="text-primary" size={22} />
          </div>
        </div>
        <h2 className="font-heading font-bold text-xl text-foreground mb-3">
          Verantwoord alcoholgebruik — uitsluitend voor 18+
        </h2>
        <p className="font-sans text-muted-foreground leading-relaxed text-sm max-w-2xl mx-auto">
          Jenever en bier bevatten alcohol. De inhoud van deze website is uitsluitend bedoeld voor personen van{' '}
          <strong className="text-foreground">18 jaar en ouder</strong>. Drink met mate en zorg dat u nooit rijdt
          onder invloed van alcohol. Alcohol kan schadelijk zijn voor uw gezondheid. Laat u niet verleiden tot
          overmatig gebruik.
        </p>
        <p className="font-sans text-xs text-muted-foreground mt-4 tracking-wide uppercase">
          Jenever: 35–48% vol. — Bier: 4,5–9,5% vol.
        </p>
      </div>
    </section>
  )
}

export function FeaturedJenever() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded overflow-hidden aspect-[3/4] shadow-xl">
          <Image
            src="/images/korenwijn-bottle.jpg"
            alt="Korenwijn fles — de sterkste jenever"
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded"
              style={{ backgroundColor: '#c9a84c', color: '#1f1108' }}
            >
              Sterkste jenever
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">Uitgelicht</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
            Korenwijn — de Kroon van de Jenever
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed mb-4">
            Korenwijn is de meest ambachtelijke en krachtigste jenever, gedistilleerd met minimaal 51% graan
            en gerijpt op eikenhouten vaten. Met een alcoholpercentage tot <strong>48% vol.</strong> en een
            rijke, complexe smaak is dit de absolute top van de Hollandse distilleerkunst.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed mb-6">
            Gedronken puur, op kamertemperatuur, in een traditioneel tulpvormig glas — dit is geen drankje,
            dit is een ervaring.
          </p>
          <div className="flex items-center gap-6 mb-8">
            <div className="text-center">
              <p className="font-heading font-bold text-2xl text-primary">48%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Max. vol.</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-heading font-bold text-2xl text-primary">51%+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Graandestillaat</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-heading font-bold text-2xl text-primary">Oud</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Op eikenhout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HistoryPreview() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">Geschiedenis</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
              500 jaar vakmanschap — van medicijn tot volksdrank
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-4">
              In de 16e eeuw bereidde Sylvius de Bouve een medicinale drank op basis van jeneverbes —
              een geneesmiddel dat de wereld zou veranderen. Wat begon als apothekersdrank groeide uit
              tot het nationale symbool van Nederland.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Van de gouden eeuw tot de bruine kroeg, van Schiedam tot Londen — de reis van jenever
              is een verhaal over avontuur, handel en cultuur.
            </p>
            <Link
              href="/geschiedenis"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity"
            >
              Lees het volledige verhaal
              <span className="text-lg leading-none">→</span>
            </Link>
          </div>

          {/* Image */}
          <div className="relative rounded overflow-hidden aspect-video shadow-xl">
            <Image
              src="/images/history-preview.jpg"
              alt="Historische Schiedamse distilleerderij"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function CatalogPreview() {
  const items = [
    {
      name: 'Jonge Jenever',
      strength: '35% vol.',
      desc: 'Licht, helder en fris. De moderne stijl — ideaal als basis voor cocktails.',
      image: '/images/jonge-jenever.jpg',
    },
    {
      name: 'Oude Jenever',
      strength: '38% vol.',
      desc: 'Rijker en ronder van smaak, met een moutachtig karakter. De klassieke stijl.',
      image: '/images/oude-jenever.jpg',
    },
    {
      name: 'Korenwijn',
      strength: '48% vol.',
      desc: 'Gedistilleerd uit minimaal 51% graan. De meest ambachtelijke en krachtige jenever.',
      image: '/images/korenwijn-card.jpg',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">Catalogus</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-balance">
          Ontdek de drie stijlen van jenever
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <Link
            key={item.name}
            href="/catalogus"
            className="group block bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading font-bold text-lg text-foreground">{item.name}</h3>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded">
                  {item.strength}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/catalogus"
          className="inline-flex px-8 py-3 border border-primary text-primary text-sm font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors rounded"
        >
          Volledige catalogus bekijken
        </Link>
      </div>
    </section>
  )
}

export function KopstootSection() {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: '#1f1108' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-sans text-sm uppercase tracking-[0.3em] mb-4" style={{ color: '#c9a84c' }}>
          De Hollandse Traditie
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 text-balance" style={{ color: '#f5f0e8' }}>
          De Kopstoot
        </h2>
        <p className="font-sans text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: 'rgba(245,240,232,0.8)' }}>
          Een borrel jenever tot aan de rand gevuld, gedronken naast een koud glas bier. Geen cocktail,
          geen mix — gewoon twee glazen, een ritueel en honderd jaar tradities in elke slok.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { label: '1', sub: 'Borrelglas jenever' },
            { label: '+', sub: '\u00a0' },
            { label: '1', sub: 'Koud glas pils' },
            { label: '=', sub: '\u00a0' },
            { label: 'Kopstoot', sub: 'Pure traditie' },
          ].map((item) => (
            <div
              key={item.label + item.sub}
              className="rounded px-6 py-4 text-center"
              style={{ backgroundColor: 'rgba(245,240,232,0.08)' }}
            >
              <p className="font-heading font-bold text-2xl" style={{ color: '#c9a84c' }}>{item.label}</p>
              <p className="font-sans text-sm mt-1" style={{ color: 'rgba(245,240,232,0.7)' }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BeerSection() {
  const beers = [
    {
      name: 'Pilsner',
      strength: '4,5–5,5%',
      desc: 'Helder, fris en verfrissend met een milde hopbitterheid. Het meest gedronken bier van Nederland.',
      season: 'Zomer',
      image: '/images/bier-pilsner.jpg',
    },
    {
      name: 'Witbier',
      strength: '4,5–5,5%',
      desc: 'Troebel tarwebier met koriander en sinaasappelschil. Licht fruitig en kruidig.',
      season: 'Zomer',
      image: '/images/bier-witbier.jpg',
    },
    {
      name: 'Bock',
      strength: '6–7,5%',
      desc: 'Zwaarder, moutrijker bier met een zoete afdronk. Bestaat als licht (helles) of donker (dunkel).',
      season: 'Herfst / Winter',
      image: '/images/bier-bock.jpg',
    },
    {
      name: 'Tripel',
      strength: '7,5–9,5%',
      desc: 'Sterk kloosterbier met fruitige en kruidige tonen — banaan, peer en peper.',
      season: 'Heel het jaar',
      image: '/images/bier-tripel.jpg',
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header + hero image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">Nederlandse Biertraditie</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
              Hollands bier — de perfecte gezel van jenever
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-4">
              Nederland heeft een rijke biertraditie die hand in hand gaat met de jenever-cultuur.
              Van de lichte, frisse Pilsner op een zomerse dag tot een zwaar Tripel in een warme bruine
              kroeg — elk bier vertelt zijn eigen verhaal.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              De beroemde <em>Kopstoot</em> — een borrel jenever gecombineerd met een glas Pilsner —
              is het ultieme bewijs dat deze twee tradities onlosmakelijk met elkaar verbonden zijn.
            </p>
            <Link
              href="/bier"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity rounded"
            >
              Ontdek de volledige biergids
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
          <div className="relative rounded overflow-hidden aspect-video shadow-xl">
            <Image
              src="/images/bier-hero.jpg"
              alt="Vier soorten Hollands bier op een bruine kroeg bar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Beer cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beers.map((beer) => (
            <Link
              key={beer.name}
              href={`/bier#${beer.name.toLowerCase()}`}
              className="group block bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={beer.image}
                  alt={`${beer.name} bier`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-heading font-bold text-lg text-foreground">{beer.name}</h3>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded shrink-0">
                    {beer.strength}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{beer.season}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{beer.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/bier"
            className="inline-flex px-8 py-3 border border-primary text-primary text-sm font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors rounded"
          >
            Lees alles over Hollands bier
          </Link>
        </div>
      </div>
    </section>
  )
}
