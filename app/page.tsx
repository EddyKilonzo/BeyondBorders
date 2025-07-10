import type { Metadata } from 'next'
import { HomePageClient } from './home-client'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Beyond Borders - Empowering displaced communities through dignity and justice. A refugee-led nonprofit creating lasting change along the Kenya-Somalia border.',
  keywords: ['refugee', 'humanitarian', 'Kenya', 'Somalia', 'border', 'aid', 'community', 'development', 'nonprofit'],
  openGraph: {
    title: 'Beyond Borders - Refugee-Led Impact',
    description: 'Empowering displaced communities through dignity and justice. A refugee-led nonprofit creating lasting change along the Kenya-Somalia border.',
    url: 'https://beyondborders.org',
    siteName: 'Beyond Borders',
    images: [
      {
        url: '/2.webp',
        width: 1200,
        height: 630,
        alt: 'Beyond Borders Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Borders - Refugee-Led Impact',
    description: 'Empowering displaced communities through dignity and justice.',
    images: ['/2.webp'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
