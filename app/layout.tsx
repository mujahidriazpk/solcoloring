import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navigation/Navbar';
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SolColoring - Generate and Share Coloring Pages",
  description: "Create, share, and download AI-generated coloring pages. Join our community of artists and earn rewards on the Solana blockchain.",
  keywords: "coloring pages, AI art, Solana, NFT, digital art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center">
          <div className="container-custom w-full">
            {children}
          </div>
        </main>
        <footer className="w-full bg-white border-t border-gray-200 py-6 mt-auto">
          <div className="container-custom text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} SolColoring. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
