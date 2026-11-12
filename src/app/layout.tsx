import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { profile, site } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: profile.name, url: site.url }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: profile.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={geistSans.variable} data-scroll-behavior="smooth">
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
