export default function ChristmasSection() {
  return (
    <section
      id="noel"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute inset-0 opacity-10 noise" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold">
            Christmas Collection
          </p>

          <h2 className="mx-auto mb-8 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            La magie des fêtes commence à la maison.
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-cream/70">
            Des pyjamas pensés pour les soirées cocooning,
            les photos de famille, les cadeaux et les souvenirs de Noël.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Matching Family',
              text: 'Des ensembles assortis pour toute la famille.'
            },
            {
              title: 'Cadeaux de Noël',
              text: 'Offrez douceur et confort pendant les fêtes.'
            },
            {
              title: 'Ambiance Cozy',
              text: 'Une collection inspirée des nuits chaleureuses.'
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-10 backdrop-blur-sm"
            >
              <div className="mb-10 h-56 rounded-3xl bg-gradient-to-br from-christmasRed/20 via-transparent to-gold/10" />

              <h3 className="mb-4 text-3xl font-semibold">
                {item.title}
              </h3>

              <p className="text-cream/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
