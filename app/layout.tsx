import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'European Summer Trip 2025',
  icons: {
    icon: '/eu.ico',
    shortcut: '/eu.ico',
    apple: '/eu.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
