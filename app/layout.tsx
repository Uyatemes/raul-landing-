import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import SpaceMonoFont from './components/SpaceMonoFont'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'raul.kz',
  description: 'raul - coffee & snacks',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={jetbrainsMono.className}>
      <head>
        <link rel="icon" href="/svg/r.svg" type="image/svg+xml" />
      </head>
      <body>
        <SpaceMonoFont />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
