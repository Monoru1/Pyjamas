import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La Maison des Pyjamas',
  description: 'Pyjamas, confort et douceur pour toute la famille à Cotonou.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
