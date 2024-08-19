import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartes interactives",
  description: "Une liste de cartes utilisables gratuitement, sous certaines conditions, à personnaliser avec Leaflet",
  keywords: "Carte, fond de carte, cartes interactives, Leaflet, NextJS, TypeScript, OpenStreetMap",
  authors: { name: "Nicolas Troadec", url: "https://www.nicolastroadec.fr" },
  robots: "index, follow",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
