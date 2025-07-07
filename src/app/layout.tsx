import React from 'react'
import Footer from '../components/Footer'
import '../styles.css'
import { ThemeProvider } from '../components/ThemeProvider'
import FileSamosaQueryClientProvider from '../components/QueryClientProvider'
import { Viewport } from 'next'
import { ViewTransitions } from 'next-view-transitions'

export const metadata = {
  title: 'FileSamosa • Your files, delivered.',
  description: 'Peer-to-peer file transfers in your web browser.',
  charSet: 'utf-8',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <FileSamosaQueryClientProvider>
              <main>{children}</main>
              <Footer />
            </FileSamosaQueryClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
