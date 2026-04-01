import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Privacybeleid | Holland Jenever Culture',
  description: 'Lees ons privacybeleid — hoe wij omgaan met uw persoonsgegevens op hollandjeneverculture.com.',
}

export default function PrivacybeleidPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p className="font-sans text-accent text-sm uppercase tracking-[0.25em] mb-3">Juridisch</p>
          <h1 className="font-heading font-bold text-4xl text-foreground mb-2">Privacybeleid</h1>
          <p className="font-sans text-muted-foreground text-sm mb-10">
            Laatst bijgewerkt: 2026
          </p>

          <div className="font-sans text-muted-foreground leading-relaxed space-y-8">

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">1. Wie zijn wij?</h2>
              <p>
                Holland Jenever Culture is een informatieve website over de Nederlandse jenevertraditie en
                -cultuur. De website wordt beheerd door:
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

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">2. Welke gegevens verzamelen wij?</h2>
              <p>Wij verzamelen minimale gegevens om de website te laten functioneren:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  <strong>Technische gegevens:</strong> IP-adres, browsertype, apparaattype en bezoekstatistieken
                  via Vercel Analytics. Deze gegevens zijn geanonimiseerd.
                </li>
                <li>
                  <strong>Cookie-instellingen:</strong> Uw toestemmingskeuze voor cookies wordt lokaal opgeslagen.
                </li>
              </ul>
              <p className="mt-3">
                Wij verzamelen geen namen, e-mailadressen of andere persoonlijk identificeerbare informatie,
                tenzij u ons dit vrijwillig verstrekt.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Om de website te laten functioneren en te verbeteren</li>
                <li>Om inzicht te krijgen in het websitegebruik (geanonimiseerde statistieken)</li>
                <li>Om te voldoen aan wettelijke verplichtingen</li>
              </ul>
              <p className="mt-3">
                Wij verkopen, verhuren of delen uw gegevens niet met derden voor commerciële doeleinden.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">4. Rechtsgrondslag</h2>
              <p>
                De verwerking van uw gegevens vindt plaats op basis van:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Gerechtvaardigd belang:</strong> voor technische analyses en websiteoptimalisatie.</li>
                <li><strong>Toestemming:</strong> voor niet-essentiële cookies, die u kunt intrekken via onze cookiebanner.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">5. Bewaartermijnen</h2>
              <p>
                Wij bewaren uw gegevens niet langer dan noodzakelijk. Geanonimiseerde analytische gegevens
                worden maximaal 12 maanden bewaard. Cookie-toestemmingsgegevens worden maximaal 12 maanden bewaard.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">6. Derden en externe diensten</h2>
              <p>Wij maken gebruik van de volgende externe diensten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  <strong>Vercel (hosting en analytics):</strong> onze website wordt gehost op Vercel.
                  Vercel voldoet aan de AVG/GDPR. Zie{' '}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                    className="text-primary underline">
                    vercel.com/legal/privacy-policy
                  </a>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">7. Uw rechten (AVG/GDPR)</h2>
              <p>Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Recht op inzage van uw persoonsgegevens</li>
                <li>Recht op rectificatie van onjuiste gegevens</li>
                <li>Recht op verwijdering (&ldquo;recht op vergetelheid&rdquo;)</li>
                <li>Recht op beperking van de verwerking</li>
                <li>Recht op dataportabiliteit</li>
                <li>Recht om bezwaar te maken</li>
                <li>Recht om toestemming in te trekken</li>
              </ul>
              <p className="mt-3">
                Om een van deze rechten uit te oefenen, kunt u contact met ons opnemen via het onderstaande adres.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">8. Klachten</h2>
              <p>
                Als u van mening bent dat wij uw persoonsgegevens niet correct verwerken, heeft u het recht
                een klacht in te dienen bij de Autoriteit Persoonsgegevens (Nederland) of de
                relevante toezichthoudende autoriteit in uw land.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">9. Wijzigingen in dit beleid</h2>
              <p>
                Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. De meest recente versie is altijd
                beschikbaar op deze pagina met de datum van de laatste update.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">10. Contact</h2>
              <p>
                Heeft u vragen over dit privacybeleid? Neem dan contact met ons op:
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
