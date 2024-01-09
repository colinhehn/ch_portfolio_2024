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
      <body className={scp_font.className}>{children}</body>
    </html>
  )
}
