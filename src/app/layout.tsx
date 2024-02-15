import type { Metadata } from 'next'
import './globals.css'
import { Source_Code_Pro } from 'next/font/google'

const scp_font = Source_Code_Pro({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-scp',
})

export const metadata: Metadata = {
  title: 'Coming Soon...',
  description: 'Hello! This is everything I work on.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={scp_font.className}>{children}</body>
    </html>
  )
}
