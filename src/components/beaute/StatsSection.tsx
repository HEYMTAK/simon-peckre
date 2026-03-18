"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCounter(target: number, duration: number, isInView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);
  return count;
}

const stats = [
  {
    value: 80,
    prefix: "",
    suffix: "%",
    title: "Le Réflexe de Vérification",
    desc: "8 Français sur 10 se renseignent sur un site web avant de se rendre physiquement dans un commerce. S'ils ne trouvent que votre fiche Maps sans vitrine, la majorité passe au concurrent.",
    source: "France Num / Fevad",
    highlight: false,
  },
  {
    value: 75,
    prefix: "",
    suffix: "%",
    title: "La Confiance par le Design",
    desc: "75\u00a0% des internautes jugent la crédibilité et le professionnalisme de votre établissement uniquement sur le design de votre site web. Un bel accueil digital rassure instantanément.",
    source: "Stanford",
    highlight: true,
  },
  {
    value: 25,
    prefix: "+",
    suffix: "%",
    title: "L'Augmentation du Panier Moyen",
    desc: "Détailler l'ambiance et les bienfaits de vos soins sur un site immersif donne envie. L'expérience visuelle justifie vos tarifs et augmente l'achat de prestations ou produits complémentaires de 15 à 26\u00a0%.",
    source: "LS Institut / Fideneo",
    highlight: false,
  },
  {
    value: 1065,
    prefix: "",
    suffix: "%",
    title: "L'Impact Visuel SEO",
    desc: "Les fiches Google liées à un site web riche en photos professionnelles (cabines, soins) reçoivent 1065\u00a0% de clics supplémentaires vers leur réservation.",
    source: "BrightLocal",
    highlight: false,
  },
];

function StatCard({ value, prefix = "", suffix, title, desc, source, highlight = false, delay = 0 }: {
  value: number; suffix: string; prefix?: string; title: string; desc: string; source: string; highlight?: boolean; delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const num = useCounter(value, 2, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "relative",
        padding: "36px 32px",
        borderRadius: "16px",
        border: "1px solid rgba(166,124,82,0.15)",
        background: "#FAF9F6",
        boxShadow: "0 4px 30px rgba(44,35,24,0.06)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        overflow: "hidden",
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {/* Numéro animé */}
      <div style={{
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontSize: "clamp(3rem, 5vw, 4.2rem)",
        fontWeight: 700,
        lineHeight: 1,
        color: "#A67C52",
        letterSpacing: "-0.02em",
        marginBottom: "16px",
      }}>
        {prefix}{num}{suffix}
      </div>

      {/* Séparateur */}
      <div style={{ width: "28px", height: "1px", background: "rgba(166,124,82,0.25)", marginBottom: "16px" }} />

      {/* Titre */}
      <div style={{
        fontFamily: "var(--font-inter)",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#2C2318",
        marginBottom: "10px",
      }}>
        {title}
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "var(--font-inter)",
        fontSize: "14px",
        lineHeight: 1.7,
        color: "#6B5E52",
        marginBottom: "16px",
      }}>
        {desc}
      </p>

      {/* Source */}
      <span style={{
        fontFamily: "var(--font-inter)",
        fontSize: "12px",
        letterSpacing: "0.06em",
        color: "rgba(107,94,82,0.6)",
      }}>
        ({source})
      </span>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="roi" className="relative overflow-hidden" style={{ padding: "120px 0", background: "#F3F0EB" }}>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(166,124,82,0.2), transparent)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }} ref={ref}>

        {/* ── En-tête split ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end", marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
              <div style={{ width: "40px", height: "1px", background: "rgba(166,124,82,0.5)" }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A67C52" }}>
                Chiffres clés
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#2C2318",
              letterSpacing: "-0.01em",
            }}>
              Ce que vos futurs clients<br />
              <span style={{ fontStyle: "italic", color: "#A67C52" }}>regardent vraiment.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", lineHeight: 1.85, color: "#6B5E52" }}>
              Les chiffres parlent d&apos;eux-mêmes. Dans un secteur où l&apos;image et la confiance sont tout, investir dans un site web professionnel n&apos;est pas une option — c&apos;est la condition sine qua non pour{" "}
              <span style={{ color: "#A67C52", fontWeight: 600 }}>transformer la curiosité en réservation.</span>
            </p>
          </motion.div>
        </div>

        {/* ── Grille stats 4 cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.title} {...stat} delay={i * 0.1 + 0.2} />
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(166,124,82,0.12), transparent)" }} />
    </section>
  );
}
