import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalNavigation from './components/ConditionalNavigation'
import { LanguageProvider } from './context/LanguageContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'raul.kz',
  description: 'Кофейня RAUL - ваш уютный уголок для наслаждения кофе',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <LanguageProvider>
          <ConditionalNavigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
