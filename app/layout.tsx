import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree'
});
 
export const metadata: Metadata = {
  title: 'Assembly Summit',
  description: 'A summit hosted by Assembly Ventures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${figtree.variable}`} lang="en">
      <body className={`min-w-screen bg-midnight-950 text-white antialiased`}>{children}</body>
    </html>
  )
}
