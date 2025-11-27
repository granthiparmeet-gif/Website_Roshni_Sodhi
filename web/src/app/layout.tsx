import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.roshnisodhi.com'),
  title: {
    default: 'Roshni Sodhi | Healthcare & Wellness',
    template: '%s | Roshni Sodhi',
  },
  description: 'Personalized healthcare and wellness services by Roshni Sodhi.',
  openGraph: {
    title: 'Roshni Sodhi | Healthcare & Wellness',
    description: 'Personalized healthcare and wellness services by Roshni Sodhi.',
    url: 'https://www.roshnisodhi.com',
    siteName: 'Roshni Sodhi',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Roshni Sodhi',
    url: 'https://www.roshnisodhi.com',
    sameAs: [],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
