import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lever les Voiles - Art Vivant et Authenticité",
  description: "Association dédiée à la promotion, la production et la diffusion de spectacles vivants et de diverses formes d&apos;art. Promouvoir l&apos;authenticité et l&apos;ouverture dans les relations sociales.",
  keywords: "art vivant, spectacle vivant, création artistique, association culturelle, authenticité, arts, culture, performance",
  authors: [{ name: "Lever les Voiles" }],
  creator: "Lever les Voiles",
  publisher: "Lever les Voiles",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://leverlesvoiles.org'),
  openGraph: {
    title: "Lever les Voiles - Art Vivant et Authenticité",
    description: "Association dédiée à la promotion, la production et la diffusion de spectacles vivants et de diverses formes d&apos;art.",
    url: 'https://leverlesvoiles.org',
    siteName: 'Lever les Voiles',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lever les Voiles - Art Vivant et Authenticité",
    description: "Association dédiée à la promotion, la production et la diffusion de spectacles vivants.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics />  
      </body>
      
    </html>
  );
}
