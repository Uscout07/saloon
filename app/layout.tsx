import type { Metadata } from 'next'
import { Bodoni_Moda, Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './globals.css'

// Configure font imports
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Luxe Salon - Transformative Beauty Experiences',
  description: 'Elevate your personal aesthetic with our bespoke beauty treatments',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bodoni.variable} ${inter.variable}`}>
      <body className={`${bodoni.variable} ${inter.variable} bg-neutral-50 text-neutral-800`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}