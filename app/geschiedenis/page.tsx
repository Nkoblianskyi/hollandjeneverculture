import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Geschiedenis van Jenever | Holland Jenever Culture',
  description:
    'De fascinerende geschiedenis van Nederlandse jenever — van 16e-eeuws medicijn tot nationaal erfgoed. Ontdek Schiedam, de bruine kroeg en de wereldverovering van jenever.',
}

const timeline = [
  {
    year: '1269',
    title: 'De eerste vermelding',
    text: 'Een vroege vermelding van een gistende graandrank vermengd met jeneverbes wordt gevonden in middeleeuwse teksten van de Lage Landen. Het is de voorloper van wat later jenever zal worden.',
  },
  {
    year: '1572',
    title: 'Sylvius de Bouve — het begin',
    text: 'De Vlaamse arts Franciscus Sylvius de Bouve destilleert een medicinale drank op basis van graanwijn en jeneverbessen om nierziekten te behandelen. Dit wordt beschouwd als de geboorte van jenever.',
  },
  {
    year: '1600s',
    title: 'Van medicijn tot volksdrank',
    text: 'Tijdens de Tachtigjarige Oorlog drinken Nederlandse soldaten jenever voor moed op het slagveld — de Engelsen noemen dit "Dutch Courage". De drank verspreidt zich razendsnel door de bevolking.',
  },
  {
    year: '1650',
    title: 'Schiedam wordt hoofdstad',
    text: 'De stad Schiedam groeit uit tot het centrum van de jeneverproductie. Op het hoogtepunt telt de stad meer dan 400 distilleerderijen. De hoge molens — gebouwd om graan te malen — worden het symbool van de stad.',
  },
  {
    year: '1688',
    title: 'Jenever verovert Engeland',
    text: 'Willem III van Oranje wordt koning van Engeland en neemt zijn voorliefde voor jenever mee. In Engeland evolueert de drank tot gin — maar de roots liggen in Holland.',
  },
  {
    year: '1700s',
    title: 'De Gouden Eeuw van jenever',
    text: 'Hollandse jenever wordt in heel Europa gedronken. De VOC (Vereenigde Oost-Indische Compagnie) vervoert jenever naar de verste uithoeken van de wereld. Amsterdam en Rotterdam zijn de centra van de handel.',
  },
  {
    year: '1800s',
    title: 'Het onderscheid Oud en Jong',
    text: 'Door nieuwe distillatietechnieken ontstaat Jonge Jenever — lichter, neutraler en goedkoper te produceren. Oude Jenever behoudt zijn traditionele, graanrijke karakter. Het onderscheid bestaat nog altijd.',
  },
  {
    year: '1900s',
    title: 'De bruine kroeg — een instelling',
    text: 'Het bruine café (bruine kroeg) wordt een Nederlands cultureel icoon. Donker hout, gele verlichting, sigarenrook en een borrel jenever op de bar. Hier wordt geleeft, gediscussieerd en gerouwd.',
  },
  {
    year: '2008',
    title: 'Geografische bescherming',
    text: 'De Europese Unie kent jenever de status van Beschermde Geografische Aanduiding (BGA) toe. Alleen jenever geproduceerd in Nederland, België en bepaalde regio\'s van Duitsland en Frankrijk mag de naam dragen.',
  },
  {
    year: 'Heden',
    title: 'Renaissance van ambachtelijke jenever',
    text: 'Een nieuwe generatie distillateurs ontdekt jenever opnieuw. Ambachtelijke, kleine-batch producties met bijzondere ingrediënten geven de traditie een frisse impuls — met respect voor de eeuwenoude methoden.',
  },
]

export default function GeschiedenisPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page hero */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src="/images/history-hero.jpg"
            alt="Historische Schiedamse distilleerderij aan de gracht"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(42,22,8,0.58)' }} />
          <div className="relative z-10 h-full flex items-end max-w-6xl mx-auto px-6 pb-10">
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.3em] mb-2" style={{ color: '#c9a84c' }}>Ons erfgoed</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white text-balance">
                De Geschiedenis van Jenever
              </h1>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 py-14">
          <p className="font-heading text-xl text-foreground leading-relaxed text-balance text-center mb-6">
            Meer dan vijf eeuwen geleden begon het allemaal als een geneesmiddel in een apotheek.
            Vandaag is jenever het nationaal erfgoed van Nederland en de voorvader van gin.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed text-center">
            Dit is het verhaal van jenever — een verhaal over wetenschap, oorlog, handel, cultuur
            en de onsterfelijke geest van de Lage Landen.
          </p>
        </section>

        {/* Timeline */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Year bubble */}
                  <div className="relative z-10 shrink-0 w-16 h-16 bg-primary rounded-full flex flex-col items-center justify-center shadow md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                    <span className="font-heading font-bold text-primary-foreground text-xs text-center leading-tight px-1">
                      {item.year}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 bg-card border border-border rounded p-6 shadow-sm ml-6 md:ml-0 ${
                      i % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'
                    }`}
                  >
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schiedam section */}
        <section className="bg-secondary py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded overflow-hidden shadow-xl">
              <Image
                src="/images/schiedam.jpg"
                alt="Schiedam — de jenever-hoofdstad van Nederland"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">Schiedam</p>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-5 text-balance">
                De Jenever-Hoofdstad
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                Geen stad ter wereld is zo nauw verbonden met jenever als Schiedam. In de 17e en 18e eeuw
                telde deze kleine Hollandse stad meer dan 400 distilleerderijen. Om genoeg graan te malen
                voor de enorme productie werden de hoogste windmolens van de wereld gebouwd —
                sommige tot 33 meter hoog.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Vandaag is het Nationaal Jenevermuseum gevestigd in Schiedam, en enkele historische
                distilleerderijen zijn nog altijd actief. Een bezoek aan Schiedam is een reis terug
                in de tijd van de Hollandse distilleerkunst.
              </p>
            </div>
          </div>
        </section>

        {/* Brown café section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">Cultuur</p>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-5 text-balance">
                De Bruine Kroeg — een levend erfgoed
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                In het bruine café is de tijd blijven stilstaan. Eikenhouten toonbanken, geel licht,
                oude foto&apos;s aan de wand en het klikken van bierkoppen — dit is waar jenever echt thuis is.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                De bruine kroeg bestaat al eeuwen en is veel meer dan een café. Het is een ontmoetingsplek,
                een debatclub en een plek waar generaties hun herinneringen hebben gedeeld over een borrel.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Hier wordt de Kopstoot gedronken: een borrelglas jenever tot de rand gevuld, naast
                een koud glas pils. Geen mix, geen cocktail — puur ritueel.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-xl">
              <Image
                src="/images/bruine-kroeg.jpg"
                alt="Sfeervolle bruine kroeg in Amsterdam"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
