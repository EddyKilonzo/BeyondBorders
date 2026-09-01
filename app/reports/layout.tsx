import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research & Reports',
  description:
    'Community-led research, project documentation, and feminist analysis from the Northern Kenya ASAL corridor — free to read, download, and share.',
  alternates: {
    canonical: '/reports',
  },
  openGraph: {
    title: 'Research & Reports | Beyond Borders',
    description:
      'Community-led research, project documentation, and feminist analysis from the Northern Kenya ASAL corridor.',
    type: 'website',
  },
}

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
