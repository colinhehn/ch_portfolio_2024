import type { Metadata } from 'next'
import './globals.css'
import { Libre_Caslon_Text } from 'next/font/google'

const caslon = Libre_Caslon_Text({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-caslon',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Hello! This is everything I work on.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={caslon.className}>{children}</body>
    </html>
  )
}
