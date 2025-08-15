import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lever les Voiles - Croisières et Aventures Maritimes",
  description: "Découvrez l&apos;aventure maritime avec nos croisières exceptionnelles. Naviguez vers des destinations de rêve et créez des souvenirs inoubliables avec Lever les Voiles.",
  keywords: "croisière, voilier, navigation, mer, aventure maritime, location voilier, croisière sur mesure",
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
    title: "Lever les Voiles - Croisières et Aventures Maritimes",
    description: "Découvrez l&apos;aventure maritime avec nos croisières exceptionnelles. Naviguez vers des destinations de rêve et créez des souvenirs inoubliables.",
    url: 'https://leverlesvoiles.org',
    siteName: 'Lever les Voiles',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lever les Voiles - Croisières et Aventures Maritimes",
    description: "Découvrez l&apos;aventure maritime avec nos croisières exceptionnelles.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
