"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="#CFA55C" strokeWidth="1.5"/>
        <path d="M9 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#CFA55C" strokeWidth="1.5"/>
        <line x1="14" y1="11" x2="14" y2="17" stroke="#CFA55C" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11" y1="14" x2="17" y2="14" stroke="#CFA55C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Le Mur Digital",
    text: "Sur Google Maps, une fiche sans site web génère 7 fois moins d'interactions (Source\u00a0: Partoo / Google France).",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#CFA55C" strokeWidth="1.5"/>
        <path d="M10 14l3 3 5-5" stroke="#CFA55C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="#CFA55C" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: "La Fuite Visuelle",
    text: "52\u00a0% des consommateurs ferment la page et partent chez le concurrent si l'univers visuel ne les rassure pas instantanément (Source\u00a0: Arobaz).",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L16.5 10H24L18 14.5L20.5 21.5L14 17L7.5 21.5L10 14.5L4 10H11.5L14 3Z" stroke="#CFA55C" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "L'Exigence Beauté",
    text: "Dans l'esthétique, 86\u00a0% des clientes jugent le sérieux d'un institut sur ses photos d'ambiance et la description de ses soins (Source\u00a0: Devmiweb). Un simple calendrier de réservation ne peut pas faire ça.",
  },
];

export default function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden" style={{ padding: "100px 0" }}>
      {/* Séparateur haut */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.2), transparent)" }} />

      {/* Glow ambré centré */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "60%", height: "60%", background: "radial-gradient(ellipse, rgba(207,165,92,0.05) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }} ref={ref}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "72px", maxWidth: "760px", margin: "0 auto 72px" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "28px" }}>
            <div style={{ width: "40px", height: "1px", background: "rgba(207,165,92,0.5)" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(207,165,92,0.65)" }}>
              Le problème
            </span>
            <div style={{ width: "40px", height: "1px", background: "rgba(207,165,92,0.5)" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#F5EDD8",
            letterSpacing: "-0.01em",
            marginBottom: "28px",
          }}>
            Google Maps attire les curieux.{" "}
            <span style={{ fontStyle: "italic", color: "#CFA55C" }}>Votre site web crée la confiance.</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "rgba(245,237,216,0.6)",
            maxWidth: "640px",
            margin: "0 auto",
          }}>
            Vous avez d&apos;excellents avis sur Google&nbsp;? C&apos;est parfait. Mais la fiche Maps n&apos;est que l&apos;adresse de votre salon, pas son âme. Pire encore&nbsp;: se contenter d&apos;un simple lien Planity ou Treatwell, c&apos;est comme donner une liste de prix froide à un client qui cherche de la détente.
          </p>
        </motion.div>

        {/* Grille 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: "36px 32px",
                borderRadius: "16px",
                border: "1px solid rgba(207,165,92,0.15)",
                background: "rgba(255,255,255,0.04)",
                boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow coin haut-gauche */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "120px", height: "120px", background: "radial-gradient(ellipse at 0% 0%, rgba(207,165,92,0.07), transparent 70%)", pointerEvents: "none" }} />

              {/* Icône */}
              <div style={{
                width: "52px", height: "52px",
                borderRadius: "12px",
                border: "1px solid rgba(207,165,92,0.2)",
                background: "rgba(207,165,92,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "24px",
              }}>
                {card.icon}
              </div>

              {/* Titre */}
              <h3 style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.45rem",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#F5EDD8",
                marginBottom: "14px",
                lineHeight: 1.2,
              }}>
                {card.title}
              </h3>

              {/* Texte */}
              <p style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "rgba(245,237,216,0.55)",
              }}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.12), transparent)" }} />
    </section>
  );
}
