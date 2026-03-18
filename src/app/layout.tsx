import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
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
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
