"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blocs = [
  {
    number: "01",
    emoji: "🏆",
    title: "Dominez le Top 3 (Local Pack)",
    text: "Les 3 premiers résultats sur Google Maps captent 42\u00a0% des clics. Avoir un site web avec des pages optimisées par soin est le moteur n°1 pour propulser votre fiche dans ce Top 3, vous garantissant 126\u00a0% d'appels en plus (BrightLocal).",
  },
  {
    number: "02",
    emoji: "🎯",
    title: "Captez la \"Longue Traîne\"",
    text: "Ne vous battez plus seulement sur \"Massage Paris\". Un site web permet de capter les requêtes ultra-précises (ex\u00a0: \"massage californien femme enceinte proche de moi\"). Ces recherches ont un taux de conversion 2,5 fois supérieur car l'intention d'achat est immédiate (Ahrefs).",
  },
  {
    number: "03",
    emoji: "📱",
    title: "La conversion \"Mobile & Immédiate\"",
    text: "76\u00a0% des recherches locales sur smartphone (ex\u00a0: \"salon de beauté à proximité\") aboutissent à une visite dans la journée (Think With Google). Votre site est pensé à 100\u00a0% pour le mobile, offrant une réservation en 3 clics à la cliente stressée dans la rue.",
  },
];

export default function SeoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden" style={{ padding: "100px 0" }}>
      {/* Séparateur haut */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.2), transparent)" }} />

      {/* Glow droite */}
      <div style={{ position: "absolute", top: "20%", right: "-8%", width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(207,165,92,0.06) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }} ref={ref}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "72px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
            <div style={{ width: "40px", height: "1px", background: "rgba(207,165,92,0.5)" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(207,165,92,0.65)" }}>
              SEO Local
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            color: "#F5EDD8",
            letterSpacing: "-0.01em",
            marginBottom: "24px",
            maxWidth: "700px",
          }}>
            Ne laissez plus vos concurrents{" "}
            <span style={{ fontStyle: "italic", color: "#CFA55C" }}>monopoliser Google.</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "rgba(245,237,216,0.6)",
            maxWidth: "620px",
          }}>
            Avoir un beau site, c&apos;est bien. Être trouvé, c&apos;est mieux. Notre structure web est conçue pour aspirer la clientèle locale prête à acheter.
          </p>
        </motion.div>

        {/* Blocs verticaux */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {blocs.map((bloc, i) => (
            <motion.div
              key={bloc.number}
              initial={{ opacity: 0, x: -32 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.15 + 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "40px",
                alignItems: "start",
                padding: "40px 48px",
                borderRadius: "16px",
                border: "1px solid rgba(207,165,92,0.1)",
                background: i === 1 ? "rgba(207,165,92,0.04)" : "rgba(255,255,255,0.02)",
                position: "relative",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              {/* Numéro / Emoji */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", paddingTop: "4px" }}>
                <span style={{ fontSize: "2rem" }}>{bloc.emoji}</span>
                <span style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "rgba(207,165,92,0.3)",
                  letterSpacing: "0.1em",
                }}>
                  {bloc.number}
                </span>
              </div>

              {/* Contenu */}
              <div>
                <h3 style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#F5EDD8",
                  marginBottom: "14px",
                  lineHeight: 1.2,
                }}>
                  {bloc.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "rgba(245,237,216,0.55)",
                  maxWidth: "640px",
                }}>
                  {bloc.text}
                </p>
              </div>

              {/* Ligne déco gauche */}
              {i === 1 && (
                <div style={{ position: "absolute", left: 0, top: "20%", bottom: "20%", width: "2px", background: "linear-gradient(to bottom, transparent, rgba(207,165,92,0.4), transparent)" }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.12), transparent)" }} />
    </section>
  );
}
