const posts = [
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85'
  },
  {
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=85'
  },
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85'
  },
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85'
  }
]

export default function InstagramGallery() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold sm:text-sm">
              Instagram
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              L'ambiance de La Maison des Pyjamas.
            </h2>
          </div>

          <a href="https://www.instagram.com/lamaisondespyjamas" className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm uppercase tracking-[0.25em] text-cream/80 transition hover:border-gold hover:text-white">
            Voir Instagram
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {posts.map((post, index) => (
            <div key={index} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black">
              <img
                src={`/.netlify/images?url=${encodeURIComponent(post.image)}&w=900&h=1200&fit=cover&fm=webp&q=90`}
                alt="La Maison des Pyjamas"
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
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
