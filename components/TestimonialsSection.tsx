const testimonials = [
  {
    name: 'Cliente Cotonou',
    text: 'Les pyjamas sont magnifiques et très confortables. L’ambiance de la boutique est incroyable.'
  },
  {
    name: 'Famille cliente',
    text: 'Nous avons adoré les ensembles famille pour Noël. Très belle qualité.'
  },
  {
    name: 'Cliente fidèle',
    text: 'Une vraie maison du confort. Toujours de belles nouveautés.'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="border-y border-white/10 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold sm:text-sm">
            Avis Clients
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Ils adorent La Maison.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="mb-6 flex gap-1 text-gold">
                ★★★★★
              </div>

              <p className="mb-8 leading-8 text-cream/70">
                “{testimonial.text}”
              </p>

              <p className="text-sm uppercase tracking-[0.25em] text-gold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
