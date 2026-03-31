import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background image */}
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

      {/* Content */}
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  )
}
