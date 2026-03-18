"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="offre" className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.2), transparent)" }} />

      {/* Glow centré */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(207,165,92,0.07) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px" }} ref={ref}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "28px" }}>
            <div style={{ width: "40px", height: "1px", background: "rgba(207,165,92,0.5)" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(207,165,92,0.65)" }}>
              L&apos;offre
            </span>
            <div style={{ width: "40px", height: "1px", background: "rgba(207,165,92,0.5)" }} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#F5EDD8",
            letterSpacing: "-0.01em",
            marginBottom: "32px",
          }}>
            Jugez sur pièce{" "}
            <span style={{ fontStyle: "italic", color: "#CFA55C" }}>avant de vous engager.</span>
          </h2>
        </motion.div>

        {/* Card principale */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: "56px 64px",
            borderRadius: "16px",
            border: "1px solid rgba(207,165,92,0.25)",
            background: "linear-gradient(145deg, rgba(207,165,92,0.08) 0%, rgba(255,255,255,0.02) 60%, rgba(207,165,92,0.05) 100%)",
            boxShadow: "0 8px 64px rgba(0,0,0,0.3), inset 0 1px 0 rgba(245,237,216,0.04)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow coin */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "350px", height: "250px", background: "radial-gradient(ellipse at 100% 0%, rgba(207,165,92,0.12), transparent 65%)", pointerEvents: "none" }} />

          {/* Badge prix */}
          <div style={{ marginBottom: "32px" }}>
            <span style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "100px",
              background: "linear-gradient(135deg, #CFA55C 0%, #E8C07A 100%)",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#2E2214",
            }}>
              Maquette sur-mesure — 50€ remboursés*
            </span>
          </div>

          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1.05rem",
            lineHeight: 1.9,
            color: "rgba(245,237,216,0.65)",
            marginBottom: "48px",
            maxWidth: "640px",
          }}>
            Je sais qu&apos;il est difficile de se projeter. C&apos;est pourquoi je vous propose de concevoir la maquette sur-mesure de la page d&apos;accueil de votre futur site en moins d&apos;une semaine. Pour garantir un travail de haute qualité et filtrer les demandes, cette création initiale est facturée <span style={{ color: "#CFA55C", fontWeight: 600 }}>50&nbsp;€</span>. La bonne nouvelle&nbsp;? Ces 50&nbsp;€ seront intégralement déduits de votre facture finale si vous décidez de valider le projet. C&apos;est un premier pas sans risque vers votre nouvelle vitrine digitale.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 40px",
              background: "linear-gradient(135deg, #CFA55C 0%, #E8C07A 100%)",
              color: "#2E2214",
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: "4px",
              boxShadow: "0 8px 32px rgba(196,169,106,0.25), 0 2px 8px rgba(196,169,106,0.15)",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(196,169,106,0.4), 0 4px 12px rgba(196,169,106,0.2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(196,169,106,0.25), 0 2px 8px rgba(196,169,106,0.15)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Lancer ma maquette pour 50€
            <ArrowRight size={16} />
          </a>

          {/* Note */}
          <p style={{
            marginTop: "20px",
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            color: "rgba(245,237,216,0.3)",
            letterSpacing: "0.04em",
          }}>
            * Les 50€ sont intégralement remboursés si vous validez le projet complet.
          </p>
        </motion.div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.12), transparent)" }} />
    </section>
  );
}
