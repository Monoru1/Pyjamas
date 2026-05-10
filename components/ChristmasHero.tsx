export default function ChristmasHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#140407] px-4 pb-16 pt-36 text-center sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(233,23,134,0.35),transparent_32%),radial-gradient(circle_at_20%_75%,rgba(216,184,106,0.22),transparent_28%),linear-gradient(135deg,rgba(177,18,38,0.45),rgba(8,8,8,0.92)_55%,rgba(15,81,50,0.45))]" />
      <div className="absolute inset-0 opacity-[0.08] noise" />

      <div className="pointer-events-none absolute left-6 top-32 text-6xl opacity-80 sm:text-8xl">🎄</div>
      <div className="pointer-events-none absolute right-8 top-44 text-5xl opacity-70 sm:text-7xl">🎁</div>
      <div className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 text-7xl opacity-40 sm:text-9xl">❄️</div>

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center">
        <p className="mb-5 rounded-full border border-gold/30 bg-black/30 px-5 py-2 text-[10px] uppercase tracking-[0.35em] text-gold backdrop-blur-md sm:text-sm">
          Noël à Cotonou • La Maison des Pyjamas
        </p>

        <h1 className="mx-auto mb-7 max-w-6xl text-5xl font-black leading-[0.92] text-cream sm:text-7xl md:text-8xl lg:text-9xl">
          Le Noël le plus doux commence en pyjama.
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-base leading-8 text-cream/85 sm:text-xl md:text-2xl">
          Pyjamas femme, homme, enfant et ensembles famille pour créer des photos,
          des cadeaux et des souvenirs chaleureux pendant les fêtes.
        </p>

        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a href="/catalogue" className="rounded-full bg-blush px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_40px_rgba(233,23,134,0.45)] transition hover:scale-105">
            Voir le catalogue
          </a>
          <a href="https://wa.me/2290197338843" className="rounded-full border border-gold/40 bg-black/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-cream backdrop-blur-md transition hover:bg-gold hover:text-night">
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
