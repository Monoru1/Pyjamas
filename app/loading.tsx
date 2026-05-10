export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-night text-cream">
      <div className="text-center">
        <div className="mx-auto mb-6 h-20 w-20 animate-pulse rounded-full border border-gold/30 bg-blush/20" />

        <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm">
          La Maison des Pyjamas
        </p>
      </div>
    </div>
  )
}
