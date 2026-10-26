import type { Metadata } from "next";
import { Anton, Bodoni_Moda, Italiana, Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "@/components/CartProvider";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const italiana = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-logo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const wordmark = Bodoni_Moda({ weight: "500", subsets: ["latin"], variable: "--font-wordmark", display: "swap" });

export const metadata: Metadata = {
  title: "AURA – Winter x Gen-Z",
  description: "Modern fashion for bold and confident lifestyles.",
  icons: {
    icon: { url: "/icon.png", type: "image/png" },
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${italiana.variable} ${inter.variable} ${wordmark.variable}`} suppressHydrationWarning>
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
