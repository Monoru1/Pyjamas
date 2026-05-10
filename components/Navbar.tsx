export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-night/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">
            La Maison des Pyjamas
          </p>
        </div>

        <nav className="hidden gap-8 text-sm text-cream/70 md:flex">
          <a href="#collections" className="transition hover:text-white">
            Collections
          </a>

          <a href="#maison" className="transition hover:text-white">
            La Maison
          </a>

          <a href="#noel" className="transition hover:text-white">
            Noël
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="https://wa.me/2290197338843"
          className="rounded-full bg-blush px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:scale-105"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}
