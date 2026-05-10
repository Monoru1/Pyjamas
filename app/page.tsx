export default function HomePage() {
  return (
    <main className="min-h-screen bg-night text-cream overflow-hidden">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center bg-heroGlow">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_50%)]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-gold">
            La Maison des Pyjamas • Cotonou
          </p>

          <h1 className="mb-8 text-6xl font-bold leading-tight md:text-8xl">
            Dormez autrement.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-cream/80 md:text-xl">
            Pyjamas, douceur et confort pour toute la famille.
            Une expérience chaleureuse pensée pour les nuits calmes,
            les souvenirs et la magie des fêtes.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#collections"
              className="rounded-full bg-blush px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:scale-105"
            >
              Découvrir la collection
            </a>

            <a
              href="https://wa.me/2290197338843"
              className="rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-cream hover:text-night"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="collections" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">
              Collections
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Noël à la Maison
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Femme',
              'Homme',
              'Enfant',
              'Famille Matching'
            ].map((collection) => (
              <div
                key={collection}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:border-gold/40"
              >
                <div className="mb-20 h-64 rounded-3xl bg-gradient-to-br from-blush/20 via-transparent to-gold/10" />

                <h3 className="mb-3 text-3xl font-semibold">
                  {collection}
                </h3>

                <p className="text-cream/70">
                  Une collection pensée pour le confort, la douceur et
                  l'ambiance chaleureuse des fêtes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">
              La Maison
            </p>

            <h2 className="mb-8 text-5xl font-bold leading-tight">
              Plus qu'un pyjama.
            </h2>

            <p className="mb-6 text-lg text-cream/75">
              La Maison des Pyjamas transforme les moments simples en souvenirs.
              Entre confort, élégance et chaleur familiale, chaque pièce est pensée
              pour accompagner les nuits douces, les réveils calmes et les fêtes de Noël.
            </p>

            <p className="text-cream/60">
              Située à Cotonou, la boutique accueille enfants, parents et familles
              dans un univers cosy inspiré du cocooning et du lifestyle moderne.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blush/10 via-transparent to-gold/10 p-10">
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-gold">
                  Adresse
                </p>
                <p className="text-xl">
                  Kindonou, Cotonou
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-gold">
                  Horaires
                </p>
                <p className="text-xl">
                  09h00 — 19h00
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-gold">
                  WhatsApp
                </p>
                <p className="text-xl">
                  +229 01 97 33 88 43
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
