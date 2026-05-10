type ProductCardProps = {
  name: string
  category: string
  price: string
  badge: string
  description: string
  sizes: string[]
}

export default function ProductCard({
  name,
  category,
  price,
  badge,
  description,
  sizes
}: ProductCardProps) {
  const message = encodeURIComponent(
    `Bonjour, je souhaite avoir plus d'informations sur le produit : ${name}. Taille souhaitée : ${sizes[0] || 'à préciser'}.`
  )

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition duration-500 hover:-translate-y-2 hover:border-gold/40">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-blush/20 via-transparent to-gold/10">
        <div className="absolute left-5 top-5 rounded-full bg-night/70 px-4 py-2 text-xs uppercase tracking-widest text-gold backdrop-blur-md">
          {badge}
        </div>

        <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-night/60 p-5 backdrop-blur-xl">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
            {category}
          </p>
          <h3 className="text-2xl font-semibold text-cream">{name}</h3>
        </div>
      </div>

      <div className="p-7">
        <p className="mb-5 text-cream/65">{description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {sizes.map((size) => (
            <span
              key={size}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-cream/60"
            >
              {size}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-widest text-gold">{price}</p>

          <a
            href={`https://wa.me/2290197338843?text=${message}`}
            className="rounded-full bg-blush px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:scale-105"
          >
            Commander
          </a>
        </div>
      </div>
    </article>
  )
}
