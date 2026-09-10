import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Dragi Zekavica | Legal Services Toronto, Ontario',
    template: '%s | Dragi Zekavica - Legal Services',
  },
  description:
    'Professional legal services in Toronto, Ontario. Experienced guidance and trusted representation across Family Law, Criminal Law, Personal Injury, Civil Litigation, Real Estate, Estate Planning, Business Law, and Immigration.',
  metadataBase: new URL('https://dragizekavica-law.ca'),
  openGraph: {
    title: 'Dragi Zekavica | Experienced Legal Guidance Toronto',
    description:
      'Trusted legal counsel in Toronto, Ontario. Focused on helping clients understand their legal options and move forward with confidence.',
    type: 'website',
    images: [
      {
        url: '/images/dragi-zekavica.png',
        width: 800,
        height: 1000,
        alt: 'Dragi Zekavica Legal Counsel Toronto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dragi Zekavica | Legal Services Toronto',
    description:
      'Experienced legal guidance and trusted representation in Toronto, Ontario.',
    images: ['/images/dragi-zekavica.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#171717] antialiased selection:bg-[#F8ECEC] selection:text-[#B85A5A]" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

