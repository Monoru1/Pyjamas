export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#050505] px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-4">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gold">
            La Maison des Pyjamas
          </p>

          <p className="text-cream/65">
            Le confort, la douceur et l'ambiance chaleureuse des fêtes à Cotonou.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Collections</h3>

          <div className="space-y-3 text-cream/65">
            <p>Femme</p>
            <p>Homme</p>
            <p>Enfant</p>
            <p>Famille</p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Informations</h3>

          <div className="space-y-3 text-cream/65">
            <p>Kindonou, Cotonou</p>
            <p>09h00 — 19h00</p>
            <p>+229 01 97 33 88 43</p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Réseaux</h3>

          <div className="space-y-3 text-cream/65">
            <a
              href="https://www.instagram.com/lamaisondespyjamas"
              className="block transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@lamaison_des_pyjamas"
              className="block transition hover:text-white"
            >
              TikTok
            </a>

            <a
              href="https://wa.me/2290197338843"
              className="block transition hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
