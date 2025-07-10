import type { Metadata } from 'next'
import './globals.css'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    default: 'Beyond Borders - Refugee-Led Impact',
    template: '%s | Beyond Borders'
  },
  description: 'A refugee-led nonprofit bridging gaps in aid and advocacy along the Kenya-Somalia border, creating lasting change through community-driven solutions.',
  keywords: ['refugee', 'nonprofit', 'humanitarian', 'Kenya', 'Somalia', 'border', 'aid', 'advocacy', 'community', 'development'],
  authors: [{ name: 'Beyond Borders' }],
  creator: 'Beyond Borders',
  publisher: 'Beyond Borders',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://beyondborders.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beyondborders.org',
    title: 'Beyond Borders - Refugee-Led Impact',
    description: 'A refugee-led nonprofit bridging gaps in aid and advocacy along the Kenya-Somalia border, creating lasting change through community-driven solutions.',
    siteName: 'Beyond Borders',
    images: [
      {
        url: '/logo_black_bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Beyond Borders Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Borders - Refugee-Led Impact',
    description: 'A refugee-led nonprofit bridging gaps in aid and advocacy along the Kenya-Somalia border, creating lasting change through community-driven solutions.',
    images: ['/logo_black_bg.jpg'],
    creator: '@beyondborders',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
