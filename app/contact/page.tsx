import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnnouncementBar from '@/components/AnnouncementBar'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-night text-cream">
      <AnnouncementBar />
      <Navbar />

      <section className="px-4 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold sm:text-sm">
            Contact
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Parlons confort.
          </h1>

          <p className="mx-auto mb-16 max-w-2xl leading-8 text-cream/70">
            Une question sur un produit, une taille ou une commande ?
            Contactez directement La Maison des Pyjamas.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <h2 className="mb-8 text-3xl font-semibold">Informations</h2>

            <div className="space-y-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
                  WhatsApp
                </p>
                <p className="text-xl">+229 01 97 33 88 43</p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
                  Adresse
                </p>
                <p className="text-xl">Kindonou, Cotonou</p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
                  Horaires
                </p>
                <p className="text-xl">09h00 — 19h00</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blush/10 via-transparent to-gold/10 p-8 sm:p-10">
            <h2 className="mb-8 text-3xl font-semibold">
              Commander rapidement
            </h2>

            <p className="mb-10 leading-8 text-cream/70">
              Cliquez ci-dessous pour ouvrir directement une conversation WhatsApp avec la boutique.
            </p>

            <a
              href="https://wa.me/2290197338843"
              className="inline-flex rounded-full bg-blush px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:scale-105"
            >
              Ouvrir WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
