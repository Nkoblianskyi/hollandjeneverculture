import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Cookiebeleid | Holland Jenever Culture',
  description: 'Lees ons cookiebeleid — hoe wij cookies gebruiken op hollandjeneverculture.com.',
}

export default function CookieBeleidPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">Juridisch</p>
          <h1 className="font-heading font-bold text-4xl text-foreground mb-2">Cookiebeleid</h1>
          <p className="font-sans text-muted-foreground text-sm mb-10">
            Laatst bijgewerkt: 1 januari 2025
          </p>

          <div className="prose prose-neutral max-w-none font-sans text-muted-foreground leading-relaxed space-y-8">

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">1. Wat zijn cookies?</h2>
              <p>
                Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt.
                Ze helpen websites te herinneren wie u bent en hoe u de site gebruikt, zodat uw ervaring verbeterd
                kan worden bij een volgend bezoek.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">2. Welke cookies gebruiken wij?</h2>

              <h3 className="font-sans font-semibold text-foreground mb-2 mt-4">Noodzakelijke cookies</h3>
              <p>
                Deze cookies zijn essentieel voor het correct functioneren van de website. Zonder deze cookies
                werkt de website niet naar behoren. Ze vereisen geen toestemming.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>cookie-consent</strong> — Slaat uw cookievoorkeur op (accepteren / weigeren).</li>
              </ul>

              <h3 className="font-sans font-semibold text-foreground mb-2 mt-4">Analytische cookies</h3>
              <p>
                Wij kunnen analytische cookies gebruiken (zoals Vercel Analytics) om anoniem inzicht te krijgen
                in het websitebezoek. Deze cookies verzamelen geen persoonlijk identificeerbare informatie.
              </p>

              <h3 className="font-sans font-semibold text-foreground mb-2 mt-4">Marketing cookies</h3>
              <p>
                Wij gebruiken momenteel geen marketing- of advertentiecookies op deze website.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">3. Hoe lang worden cookies bewaard?</h2>
              <p>
                Sessiecookies worden verwijderd zodra u uw browser sluit. Permanente cookies worden bewaard voor
                de duur die in de cookie-instellingen is opgegeven, of totdat u ze handmatig verwijdert.
                Onze toestemmingscookie wordt maximaal 12 maanden bewaard.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">4. Hoe kunt u cookies beheren?</h2>
              <p>
                U kunt te allen tijde uw cookietoestemming intrekken of aanpassen door de cookies in uw browser
                te verwijderen. De meeste browsers bieden ook instellingen om cookies te blokkeren of te beheren:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Google Chrome: Instellingen &rsaquo; Privacy en beveiliging &rsaquo; Cookies</li>
                <li>Mozilla Firefox: Instellingen &rsaquo; Privacy en beveiliging</li>
                <li>Safari: Voorkeuren &rsaquo; Privacy</li>
                <li>Microsoft Edge: Instellingen &rsaquo; Cookies en sitemachtigingen</li>
              </ul>
              <p className="mt-3">
                Let op: het uitschakelen van cookies kan de functionaliteit van de website beïnvloeden.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">5. Contactgegevens</h2>
              <p>
                Heeft u vragen over ons cookiebeleid? Neem dan contact op via het contactformulier of schrijf naar:
              </p>
              <address className="not-italic mt-3 p-4 bg-secondary rounded border border-border text-sm">
                FISCUS NOSTRUM FUND SERVICES LIMITED<br />
                Myrianthous Anna<br />
                Panagioti Kaspi 5A<br />
                Nicosia 1095, Cyprus<br />
                <br />
                Website: hollandjeneverculture.com
              </address>
            </section>

          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
