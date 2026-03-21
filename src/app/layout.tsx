import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#A05222",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Azienda Agricola Nonna Palma - Olio Extravergine di Puglia",
  description: "L'Olio Extravergine che sa di casa. Tradizione familiare pugliese a Carovigno.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nonna Palma",
  },
  icons: {
    icon: [
      { url: "/nonna-palma-icon.png?v=6", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/nonna-palma-apple-icon.png?v=6", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/nonna-palma-icon.png?v=6"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${montserrat.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f4f1] text-[#411E06] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
