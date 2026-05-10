import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductSection from '@/components/ProductSection'
import ChristmasSection from '@/components/ChristmasSection'
import InstagramSection from '@/components/InstagramSection'
import TikTokSection from '@/components/TikTokSection'
import AnnouncementBar from '@/components/AnnouncementBar'

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-night text-cream">
      <AnnouncementBar />
      <Navbar />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-36 text-center sm:px-6 lg:px-8 bg-heroGlow">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.06] noise" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-gold sm:text-sm sm:tracking-[0.4em]">
            La Maison des Pyjamas • Cotonou
          </p>

          <h1 className="mb-7 text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            Dormez autrement.
          </h1>

          <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-cream/80 sm:text-lg md:text-xl">
            Pyjamas, douceur et confort pour toute la famille.
            Une expérience chaleureuse pensée pour les nuits calmes,
            les souvenirs et la magie des fêtes.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="#collections"
              className="rounded-full bg-blush px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:scale-105 sm:px-8 sm:text-sm"
            >
              Découvrir la collection
            </a>

            <a
              href="https://wa.me/2290197338843"
              className="rounded-full border border-cream/30 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-cream transition hover:bg-cream hover:text-night sm:px-8 sm:text-sm"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="collections" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center sm:mb-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">
              Collections
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Noël à la Maison
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {['Femme', 'Homme', 'Enfant', 'Famille Matching'].map((collection) => (
              <div
                key={collection}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-gold/40 sm:p-8"
              >
                <div className="mb-12 h-56 rounded-3xl bg-gradient-to-br from-blush/20 via-transparent to-gold/10 sm:mb-16 sm:h-64" />

                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl">
                  {collection}
                </h3>

                <p className="leading-7 text-cream/70">
                  Une collection pensée pour le confort, la douceur et l'ambiance chaleureuse des fêtes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductSection />
      <ChristmasSection />
      <TikTokSection />

      <section id="maison" className="border-y border-white/10 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">
              La Maison
            </p>

            <h2 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl">
              Plus qu'un pyjama.
            </h2>

            <p className="mb-6 text-base leading-8 text-cream/75 sm:text-lg">
              La Maison des Pyjamas transforme les moments simples en souvenirs.
              Entre confort, élégance et chaleur familiale, chaque pièce est pensée
              pour accompagner les nuits douces, les réveils calmes et les fêtes de Noël.
            </p>

            <p className="leading-8 text-cream/60">
              Située à Cotonou, la boutique accueille enfants, parents et familles
              dans un univers cosy inspiré du cocooning et du lifestyle moderne.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blush/10 via-transparent to-gold/10 p-7 sm:p-10">
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-gold sm:text-sm">
                  Adresse
                </p>
                <p className="text-lg sm:text-xl">Kindonou, Cotonou</p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-gold sm:text-sm">
                  Horaires
                </p>
                <p className="text-lg sm:text-xl">09h00 — 19h00</p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-gold sm:text-sm">
                  WhatsApp
                </p>
                <p className="text-lg sm:text-xl">+229 01 97 33 88 43</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramSection />
      <Footer />
    </main>
  )
}
