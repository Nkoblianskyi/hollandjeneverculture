// Home page
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import {
  HeroSection,
  AlcoholWarning,
  FeaturedJenever,
  HistoryPreview,
  KopstootSection,
  BeerSection,
} from '@/components/home-sections'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AlcoholWarning />
        <FeaturedJenever />
        <HistoryPreview />
        <KopstootSection />
        <BeerSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
