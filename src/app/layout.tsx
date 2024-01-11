import type { Metadata } from 'next'
import './globals.css'
import { Source_Code_Pro } from 'next/font/google'
import Head from 'next/head'

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
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body className={scp_font.className}>{children}</body>
    </html>
  )
}
