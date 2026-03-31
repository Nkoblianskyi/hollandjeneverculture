import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Hollands Bier — Pilsner, Witbier, Bock & Tripel | Holland Jenever Culture',
  description:
    'Ontdek de rijke Nederlandse biertraditie. Alles over Pilsner, Witbier, Bock en Tripel — geschiedenis, smaakprofiel, krachtigheidheid en spijscombinaties.',
}

const beers = [
  {
    id: 'pilsner',
    name: 'Pilsner',
    tagline: 'Het dagelijkse bier van Nederland',
    strength: '4,5–5,5% vol.',
    strengthNum: 5,
    color: 'Helder goudgeel',
    season: 'Zomer — maar altijd goed',
    serving: 'IJskoud, in een fluitje of bierglas',
    image: '/images/bier-pilsner.jpg',
    history:
      'De Pilsner is het meest gedronken bier in Nederland en heeft zijn wortels in de 19e eeuw. Het bier werd voor het eerst gebrouwen in de Tsjechische stad Pilsen in 1842, maar sloeg snel aan in heel Europa — ook in Nederland. In de 20e eeuw werd Pilsner de absolute dominante biersoort, mede door grote Nederlandse brouwerijen zoals Heineken, Amstel en Grolsch. Het frisse, lichte karakter past perfect bij het Nederlandse klimaat en de eetcultuur.',
    taste:
      'Helder, licht en verfrissend. Matige hopbitterheid met een schone, droge afdronk. Koolzuurrijke mousse en een lichte graanachtige ondertoon. Ideaal om te drinken op een warme dag of naast een borrel jenever als onderdeel van de beroemde Kopstoot.',
    production:
      'Gebrouwen met lagersgist die fermenteert op lage temperatuur (koud gisten). Gebruik van bleek mout, hop en water. Lagering (rijping bij lage temperatuur) gedurende meerdere weken voor een heldere, schone smaak.',
    pairings: ['Bitterballen', 'Kaas', 'Haring', 'Pizza', 'Lichte salades', 'Jenever (Kopstoot)'],
    funFact:
      'Heineken Pilsner, gebrouwen in Amsterdam, is een van de meest geëxporteerde bieren ter wereld en vertegenwoordigt Nederland in meer dan 190 landen.',
  },
  {
    id: 'witbier',
    name: 'Witbier',
    tagline: 'Fris, kruidig en verfrissend zomerbier',
    strength: '4,5–5,5% vol.',
    strengthNum: 5,
    color: 'Troebel bleekgoud',
    season: 'Lente & Zomer',
    serving: 'Licht gekoeld, in een tulpglas met sinaasappelschijf',
    image: '/images/bier-witbier.jpg',
    history:
      'Witbier heeft een lange traditie in de Lage Landen. Al in de Middeleeuwen brouwden monniken en stedelingen tarwebier met kruiden. In de 20e eeuw raakte het stijl bijna vergeten, totdat Pierre Celis in 1966 in Hoegaarden (België) het recept nieuw leven inblies. In Nederland pakte brouwers het stijl op en maakten het tot een zomerhit. Het bekende Witte Wieckse (gebrouwen door Heineken) is een van de populairste witeieren in ons land.',
    taste:
      'Troebel en fris met een licht fruitig-kruidig aroma. Citroenzeste en korianderaroma geven het bier zijn kenmerkende frisheid. Licht zoet met een zachte, romige mousse. Ideaal als dorstlesser op een warme zomerse dag.',
    production:
      'Gebrouwen met een mix van gerst- en tarwemout (doorgaans 30–50% tarwe). Bovengegiste gist fermenteert op hogere temperatuur. Korianderzaad en gedroogde sinaasappelschil worden tijdens het brouwen toegevoegd voor de kenmerkende smaak. Niet gefilterd — vandaar de troebele kleur.',
    pairings: ['Mosselen', 'Citroenvis', 'Zachte kaas', 'Groentesalades', 'Lichte pastagerechten'],
    funFact:
      'De troebele kleur van Witbier komt door de aanwezigheid van gistresten en eiwitten uit de tarwe. Sommige brouwerijen schudden de fles voor het inschenken voor extra troebeling.',
  },
  {
    id: 'bock',
    name: 'Bock',
    tagline: 'Stevig, moutrijk herfst- en winterbier',
    strength: '6–7,5% vol.',
    strengthNum: 6.8,
    color: 'Amberbruin tot donkerbruin',
    season: 'Herfst & Winter',
    serving: 'Op keldertemperatuur, in een zwaar bierglas',
    image: '/images/bier-bock.jpg',
    history:
      'Bockbier heeft zijn oorsprong in de Noord-Duitse stad Einbeck (14e eeuw), maar werd later geperfectioneerd door Beierse brouwers in München. De naam "Bock" is een verkorting van "Einbeck" in Beiers dialect. In Nederland werd Bock populair in de 19e eeuw als seizoensbrouwerij. Elk najaar lanceren Nederlandse brouwers hun Bockbier — een traditie die duizenden bierliefhebbers naar de kroeg lokt. Helles Bock (licht) en Dunkel Bock (donker) zijn de twee hoofdvarianten.',
    taste:
      'Vol en moutrijk met uitgesproken karamel- en broodkorsttonen. Lichte zoetheid in de afdronk, uitgebalanceerd door een subtiele hopbitterheid. De donkere variant heeft extra tonen van gedroogd fruit (pruimen, rozijnen) en chocolade. Relatief hogere alcohol voegt warmte toe.',
    production:
      'Gebrouwen met zwaarder geschikte (meer gefermenteerde) mout voor een rijkere, zoeiere smaak. Lagergist werkt op lage temperatuur. Langere lagering dan Pilsner voor extra complexiteit. De donkere variant gebruikt geroosterde mout voor de karakteristieke donkere kleur.',
    pairings: ['Wild en gevogelte', 'Stevige kazen', 'Stoofpotten', 'Chocoladetaart', 'Rookvlees'],
    funFact:
      'In Nederland is de release van het eerste Bockbier van het seizoen (oktober/november) een echt evenement. Bierliefhebbers staan in de rij bij brouwerijen voor het allereerste glas van het nieuwe Bockbier.',
  },
  {
    id: 'tripel',
    name: 'Tripel',
    tagline: 'Krachtig kloosterbier van goudgele kleur',
    strength: '7,5–9,5% vol.',
    strengthNum: 8.5,
    color: 'Goudgeel tot licht amberkleurig',
    season: 'Heel het jaar',
    serving: 'Op kamertemperatuur of licht gekoeld, in een kloosterglas',
    image: '/images/bier-tripel.jpg',
    history:
      'Tripel is een Belgisch-Nederlandse kloostertraditie. Trappistenbrouwerijen en abdijbrouwerijen ontwikkelden dit sterke, aromatische bier door meer mout te gebruiken ("tripel" verwijst naar de hoeveelheid mout ten opzichte van een gewoon bier). In Nederland brouwt La Trappe (Tilburg) een van de bekendste Tripels ter wereld. Het bier staat symbool voor de monastieke brouwtraditie die eeuwenlang de ontwikkeling van ambachtelijk bier in de Lage Landen bepaalde.',
    taste:
      'Complex en aromatisch. Fruitige estertonen (banaan, peer, pruim), kruidige phenolen (peper, kruidnagel) en een zacht, zoet moutig fundament. Hoog alcoholpercentage is goed verborgen, waardoor het bier misleidend gemakkelijk drinkt. Lange, verwarmende afdronk.',
    production:
      'Bovengegiste gist op hogere fermentatietemperatuur. Gebruik van bleek Pilsnermout en kandijsuiker (om te vergisten zonder meer body toe te voegen). Hergisting op fles voegt extra complexiteit toe. Minimale of geen filtering voor naturel gist in het glas.',
    pairings: ['Belegen kaas', 'Mosselen met room', 'Kip met kruidensaus', 'Licht gekruide desserts', 'Noten'],
    funFact:
      'La Trappe in Berkel-Enschot (Noord-Brabant) is de enige Nederlandse Trappistbrouwerij en een van de tien erkende Trappistbrouwerijen ter wereld. Hun Tripel is gecertificeerd als Authentic Trappist Product.',
  },
]

function StrengthBar({ value }: { value: number }) {
  const pct = Math.min(100, (value / 10) * 100)
  return (
    <div className="w-full bg-border rounded-full h-2 mt-1.5">
      <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: '#c9a84c' }} />
    </div>
  )
}

export default function BierPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src="/images/bier-hero.jpg"
            alt="Vier soorten Hollands bier op een traditionele bruine kroeg bar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(42,22,8,0.55)' }} />
          <div className="relative z-10 h-full flex items-end max-w-6xl mx-auto px-6 pb-10">
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.3em] mb-2" style={{ color: '#c9a84c' }}>
                Nederlandse Biertraditie
              </p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white text-balance">
                Hollands Bier
              </h1>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 py-14 text-center">
          <p className="font-heading text-xl text-foreground leading-relaxed text-balance mb-6">
            Nederland heeft een rijke biertraditie die eeuwenlang naast de jenever-cultuur heeft bestaan.
            Van de verfrissende Pilsner tot de complexe Tripel — elk bierstijl heeft zijn eigen karakter,
            geschiedenis en moment.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Bier speelt een centrale rol in de <em>Kopstoot</em> — de typisch Hollandse combinatie van een borrel
            jenever en een glas koud bier. Ontdek hieronder de vier populairste bierstijlen van Nederland.
          </p>
        </section>

        {/* Beer styles */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="flex flex-col gap-20">
            {beers.map((beer, i) => (
              <article
                key={beer.id}
                id={beer.id}
                className={`grid md:grid-cols-2 gap-10 items-start ${
                  i % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}
              >
                {/* Image */}
                <div className="md:[direction:ltr] relative aspect-[4/3] rounded overflow-hidden shadow-xl group">
                  <Image
                    src={beer.image}
                    alt={`${beer.name} — ${beer.tagline}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(31,17,8,0.85) 0%, transparent 100%)' }}>
                    <p className="font-sans text-sm font-semibold" style={{ color: '#c9a84c' }}>
                      {beer.season}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="md:[direction:ltr] flex flex-col gap-5">
                  <div>
                    <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-1">
                      Bierstijl
                    </p>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-1 text-balance">
                      {beer.name}
                    </h2>
                    <p className="font-sans text-muted-foreground text-base italic">{beer.tagline}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary rounded p-4">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Sterkte</p>
                      <p className="font-heading font-bold text-primary text-xl">{beer.strength}</p>
                      <StrengthBar value={beer.strengthNum} />
                    </div>
                    <div className="bg-secondary rounded p-4">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Kleur</p>
                      <p className="font-sans text-foreground text-sm font-medium">{beer.color}</p>
                      <p className="font-sans text-xs text-muted-foreground mt-1">{beer.serving}</p>
                    </div>
                  </div>

                  {/* History */}
                  <div className="border-l-2 border-primary pl-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Geschiedenis</p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{beer.history}</p>
                  </div>

                  {/* Taste */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Smaakprofiel</p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{beer.taste}</p>
                  </div>

                  {/* Pairings */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Past goed bij</p>
                    <div className="flex flex-wrap gap-2">
                      {beer.pairings.map((p) => (
                        <span
                          key={p}
                          className="text-xs bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Fun fact */}
                  <div className="bg-card border border-border rounded p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Wist u dat?</p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{beer.funFact}</p>
                  </div>

                  {/* Production */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Productieproces</p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{beer.production}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Kopstoot CTA */}
        <section className="py-16" style={{ backgroundColor: '#1f1108' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-sans text-sm uppercase tracking-[0.3em] mb-4" style={{ color: '#c9a84c' }}>
              De perfecte combinatie
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-5 text-balance" style={{ color: '#f5f0e8' }}>
              Bier + Jenever = De Kopstoot
            </h2>
            <p className="font-sans leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.8)' }}>
              Een borrel jenever naast een koud glas Pilsner — samen vormen ze de iconische
              Nederlandse Kopstoot. Ontdek meer over jenever en zijn rijke traditie.
            </p>
            <Link
              href="/catalogus"
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity rounded"
              style={{ backgroundColor: '#c9a84c', color: '#1f1108' }}
            >
              Ontdek de jenevers
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </section>

        {/* Responsible drinking */}
        <section className="bg-secondary py-10">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
              Alle bieren op deze pagina bevatten alcohol. Drink verantwoord en nooit als u gaat rijden.
              Uitsluitend voor personen van <strong className="text-foreground">18 jaar en ouder</strong>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
