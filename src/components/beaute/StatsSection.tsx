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
    value: "86",
    suffix: "%",
    title: "Consultent Google Maps",
    desc: "86% des Français utilisent Maps pour trouver un établissement de proximité.",
    source: "Digitaleo",
  },
  {
    value: "80",
    suffix: "%",
    title: "Vérifient le site web",
    desc: "80% des consommateurs exigent un site web avant de se rendre sur place.",
    source: "Médiamétrie",
    highlight: true,
  },
  {
    value: "31",
    suffix: "%",
    title: "Fuient sans site",
    desc: "31% des clients refusent un pro sans site, le jugeant non professionnel.",
    source: "Forbes",
  },
  {
    value: "37",
    suffix: "%",
    title: "De CA en plus",
    desc: "+37% de revenus en moyenne pour un commerce avec réservation en ligne 24/7.",
    source: "Capterra",
    prefix: "+",
  },
];

function StatCard({ value, suffix, prefix = "", title, desc, source, highlight = false, delay = 0 }: {
  value: string; suffix: string; prefix?: string; title: string; desc: string; source: string; highlight?: boolean; delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const num = useCounter(parseInt(value), 1.6, isInView);

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
        border: highlight ? "1px solid rgba(207,165,92,0.35)" : "1px solid rgba(207,165,92,0.1)",
        background: highlight
          ? "linear-gradient(145deg, rgba(207,165,92,0.09) 0%, rgba(46,34,20,0.4) 100%)"
          : "rgba(46,34,20,0.25)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        overflow: "hidden",
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {/* Glow intérieur si highlight */}
      {highlight && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "80px", background: "radial-gradient(ellipse at 50% 0%, rgba(207,165,92,0.12), transparent 70%)", pointerEvents: "none" }} />
      )}

      {/* Numéro */}
      <div style={{
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontSize: "clamp(3rem, 5vw, 4.2rem)",
        fontWeight: 300,
        lineHeight: 1,
        color: highlight ? "#E8C07A" : "#CFA55C",
        letterSpacing: "-0.02em",
        marginBottom: "16px",
      }}>
        {prefix}{num}{suffix}
      </div>

      {/* Séparateur */}
      <div style={{ width: "28px", height: "1px", background: highlight ? "rgba(207,165,92,0.5)" : "rgba(207,165,92,0.25)", marginBottom: "16px" }} />

      {/* Titre */}
      <div style={{
        fontFamily: "var(--font-inter)",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "rgba(207,165,92,0.8)",
        marginBottom: "10px",
      }}>
        {title}
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontStyle: "italic",
        fontSize: "1.05rem",
        lineHeight: 1.65,
        color: "#F5EDD8",
        marginBottom: "16px",
      }}>
        {desc}
      </p>

      {/* Source */}
      <span style={{
        fontFamily: "var(--font-inter)",
        fontSize: "10px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "rgba(207,165,92,0.35)",
      }}>
        Source : {source}
      </span>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="roi" className="relative overflow-hidden" style={{ padding: "120px 0" }}>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.2), transparent)" }} />

      {/* Glow droit */}
      <div style={{ position: "absolute", top: "10%", right: "-8%", width: "45%", height: "70%", background: "radial-gradient(ellipse, rgba(207,165,92,0.06) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }} ref={ref}>

        {/* ── En-tête split ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end", marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
              <div style={{ width: "40px", height: "1px", background: "rgba(207,165,92,0.5)" }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(207,165,92,0.65)" }}>
                Pourquoi un site web
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "#F5EDD8",
              letterSpacing: "-0.01em",
            }}>
              Votre fiche Maps<br />attire.{" "}
              <span style={{ fontStyle: "italic", color: "#CFA55C" }}>Votre site</span><br />
              <span style={{ fontStyle: "italic", color: "#CFA55C" }}>convertit.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", lineHeight: 1.85, color: "rgba(245,237,216,0.5)" }}>
              Aujourd&apos;hui vos futurs clients vous cherchent sur smartphone. Ils voient vos avis, mais exigent un site professionnel pour se rassurer. Sans site, ils filent chez le concurrent. Avec notre{" "}
              <span style={{ color: "#CFA55C", fontWeight: 600 }}>module de réservation (+75€)</span>, votre site agit comme un réceptionniste 24/7 — le client réserve en 3 clics, même quand votre salon est fermé.
            </p>
          </motion.div>
        </div>

        {/* ── Grille stats ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.title} {...stat} delay={i * 0.1 + 0.2} />
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.12), transparent)" }} />
    </section>
  );
}
