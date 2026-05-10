export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-night/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="min-w-0">
          <p className="truncate text-[10px] uppercase tracking-[0.22em] text-gold sm:text-xs sm:tracking-[0.35em]">
            La Maison des Pyjamas
          </p>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-cream/70 lg:flex">
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

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="https://wa.me/2290197338843"
            className="rounded-full bg-blush px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-white transition hover:scale-105 sm:px-5 sm:py-3 sm:text-xs"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
