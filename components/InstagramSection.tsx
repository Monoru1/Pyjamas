export default function InstagramSection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold">
              Instagram
            </p>

            <h2 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
              L'univers de La Maison des Pyjamas.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/lamaisondespyjamas"
            className="rounded-full border border-white/10 px-8 py-4 text-sm uppercase tracking-[0.25em] text-cream/80 transition hover:border-gold hover:text-white"
          >
            Voir Instagram
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-blush/20 via-transparent to-gold/10 transition duration-500 group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-gold">
                  @lamaisondespyjamas
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
