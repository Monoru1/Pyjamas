import products from '@/content/products.json'
import ProductCard from './ProductCard'

export default function ProductSection() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">
              Catalogue
            </p>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
              Des collections pensées pour le confort.
            </h2>
          </div>

          <a
            href="https://wa.me/2290197338843"
            className="rounded-full border border-white/10 px-8 py-4 text-sm uppercase tracking-[0.25em] text-cream/80 transition hover:border-gold hover:text-white"
          >
            Voir tous les produits
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              badge={product.badge}
              description={product.description}
              sizes={product.sizes}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
