import type { Metadata } from "next";
import { Cinzel, Nunito_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaki Studio — Agence Web Premium",
  description:
    "Kaki Studio. Sites web premium pour instituts de beauté, salons de massage, auto detailing et artisans. À partir de 350€.",
  keywords: ["kaki studio", "agence web", "site web premium", "vitrine", "réservation en ligne", "salon de massage", "institut de beauté"],
  authors: [{ name: "Kaki Studio" }],
  openGraph: {
    title: "Kaki Studio — Agence Web Premium",
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
    <html lang="fr" className={`${cinzel.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
