import type { Metadata } from 'next'
import LayoutClient from './layout.client'
import Nav from '@/components/Nav'
import { Container, Stack } from '@mui/material'
import { WeatherProvider } from '@/weatherContext'

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
          <WeatherProvider>
            <Container disableGutters>
              <Stack maxWidth={1200}>
                <Nav />
                {children}
              </Stack>
            </Container>
          </WeatherProvider>
        </LayoutClient>
      </body>
    </html>
  )
}
// #fffbef
// #f0eadc
