const faqs = [
  {
    question: 'Comment commander ?',
    answer: 'Choisissez un modèle sur le site puis cliquez sur Commander. Un message WhatsApp pré-rempli s’ouvre pour finaliser la commande avec la boutique.'
  },
  {
    question: 'Où se trouve la boutique ?',
    answer: 'La Maison des Pyjamas est située à Kindonou, Cotonou.'
  },
  {
    question: 'Les tailles sont-elles disponibles pour toute la famille ?',
    answer: 'Oui, la boutique propose des modèles pour femmes, hommes, enfants et des ensembles famille selon les arrivages disponibles.'
  },
  {
    question: 'Peut-on réserver un article ?',
    answer: 'La réservation se fait directement avec l’équipe via WhatsApp selon la disponibilité du produit et de la taille.'
  }
]

export default function FaqSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold sm:text-sm">
            FAQ
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8"
            >
              <h3 className="mb-3 text-xl font-semibold text-cream">
                {faq.question}
              </h3>

              <p className="leading-8 text-cream/65">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
