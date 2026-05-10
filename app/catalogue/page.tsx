import products from '@/content/products.json'
import ProductCard from '@/components/ProductCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnnouncementBar from '@/components/AnnouncementBar'

export default function CataloguePage() {
  return (
    <main className="min-h-screen bg-night text-cream">
      <AnnouncementBar />
      <Navbar />

      <section className="px-4 pb-16 pt-40 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold sm:text-sm">
          Catalogue
        </p>

        <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
          Tous les essentiels confort.
        </h1>

        <p className="mx-auto max-w-2xl leading-8 text-cream/70">
          Parcourez les modèles disponibles et contactez directement La Maison des Pyjamas sur WhatsApp pour confirmer les tailles, les couleurs et les arrivages.
        </p>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
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
      </section>

      <Footer />
    </main>
  )
}
