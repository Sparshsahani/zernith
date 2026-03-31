import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOSInit from "@/components/AOSInit";
import Newsletter from "@/components/home/Newsletter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zarnith - Premium Perfumes & Fragrances | Luxury Scents Online",
  description: "Discover premium perfumes, agarbatti, loban, and car fragrances at Zarnith. Shop authentic men's, women's, and unisex perfumes with free shipping on orders above ₹999.",
  keywords: "perfumes, fragrances, agarbatti, loban, car perfume, men perfume, women perfume, unisex perfume, luxury scents, premium fragrances",
  authors: [{ name: "Zarnith" }],
  creator: "Zarnith",
  publisher: "Zarnith",
  openGraph: {
    title: "Zarnith - Premium Perfumes & Fragrances",
    description: "Shop authentic premium perfumes and fragrances online",
    type: "website",
    locale: "en_IN",
    siteName: "Zarnith",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarnith - Premium Perfumes & Fragrances",
    description: "Shop authentic premium perfumes and fragrances online",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AOSInit />
        <Header />
        {children}
        {/* Newsletter Section (animated component) */}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
