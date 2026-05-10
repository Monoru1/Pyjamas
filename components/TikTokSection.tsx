export default function TikTokSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold sm:text-sm">
            TikTok
          </p>

          <h2 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            La vibe pyjama en mouvement.
          </h2>

          <p className="mb-8 max-w-xl text-base leading-8 text-cream/70 sm:text-lg">
            Découvrez les arrivages, les inspirations tenues maison, les idées cadeaux
            et les moments cozy de La Maison des Pyjamas sur TikTok.
          </p>

          <a
            href="https://www.tiktok.com/@lamaison_des_pyjamas"
            className="inline-flex rounded-full bg-cream px-7 py-4 text-xs font-semibold uppercase tracking-widest text-night transition hover:scale-105 sm:text-sm"
          >
            Voir TikTok
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {["Arrivages", "Noël", "Conseils"].map((item) => (
            <div
              key={item}
              className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blush/20 via-night to-gold/10 p-6"
            >
              <div className="absolute inset-x-6 top-6 h-40 rounded-3xl bg-white/10" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">
                  @lamaison_des_pyjamas
                </p>
                <h3 className="text-2xl font-semibold">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
