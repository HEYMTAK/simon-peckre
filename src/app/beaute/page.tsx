import type { Metadata } from "next";
import Header from "@/components/beaute/Header";
import Hero from "@/components/beaute/Hero";
import Portfolio from "@/components/beaute/Portfolio";
import StatsSection from "@/components/beaute/StatsSection";
import Pricing from "@/components/beaute/Pricing";
import Contact from "@/components/beaute/Contact";

export const metadata: Metadata = {
  title: "Simon Peckre — Sites Web pour Instituts de Beauté & Salons de Massage",
  description:
    "Webdesigner indépendant. Transformez vos visiteurs Google Maps en clients fidèles grâce à un site web premium. Site vitrine dès 350€, livré en 7 jours.",
  keywords: [
    "site web salon massage",
    "site web institut beauté",
    "webdesigner indépendant",
    "réservation en ligne salon",
    "création site web beauté",
  ],
};

export default function BeautePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <StatsSection />
      <Pricing />
      <Contact />
    </main>
  );
}
