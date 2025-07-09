import type { Metadata } from 'next'
import './globals.css'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Beyond Borders - Refugee-Led Impact',
  description: 'A refugee-led nonprofit bridging gaps in aid and advocacy along the Kenya-Somalia border, creating lasting change through community-driven solutions.',
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
