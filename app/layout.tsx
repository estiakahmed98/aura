import type { Metadata } from "next";
import { Anton, Italiana, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const italiana = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-logo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

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
    <html lang="en" className={`${anton.variable} ${italiana.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
