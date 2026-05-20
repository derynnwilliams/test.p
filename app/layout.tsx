import type { Metadata } from "next";
import { Geist, Geist_Mono, Poiret_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poiretOne = Poiret_One({
  variable: "--font-poiret-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Merchant — Industrial Chic Gifts, Stationery & Home",
  description:
    "A supplier of industrial chic wares, general gifts, stationery, and home furnishings. Carrying top brands like Voluspa, Matt & Nat, Rifle Paper Co., Fishs Eddy, and much more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poiretOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
