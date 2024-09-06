import type { Metadata } from 'next'
import LayoutClient from './layout.client'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'MV Weather',
  description: 'MV Weather is a weather app',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>
          <Nav />
          {children}
        </LayoutClient>
      </body>
    </html>
  )
}
// #fffbef
// #f0eadc
