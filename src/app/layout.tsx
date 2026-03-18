import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaki Studio — Sites Web Premium",
  description:
    "Kaki Studio. Sites web premium pour instituts de beauté, salons de massage, auto detailing et artisans. À partir de 350€.",
  keywords: ["kaki studio", "agence web", "site web premium", "salon de massage", "institut de beauté"],
  authors: [{ name: "Kaki Studio" }],
  openGraph: {
    title: "Kaki Studio — Sites Web Premium",
    description: "Sites web premium qui convertissent vos visiteurs en clients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
