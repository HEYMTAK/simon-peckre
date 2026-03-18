"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="offre" className="relative overflow-hidden" style={{ padding: "120px 0", background: "#FAF9F6" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(166,124,82,0.2), transparent)" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px" }} ref={ref}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "28px" }}>
            <div style={{ width: "40px", height: "1px", background: "rgba(166,124,82,0.5)" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A67C52" }}>
              L&apos;offre
            </span>
            <div style={{ width: "40px", height: "1px", background: "rgba(166,124,82,0.5)" }} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#2C2318",
            letterSpacing: "-0.01em",
            marginBottom: "32px",
          }}>
            Jugez sur pièce{" "}
            <span style={{ fontStyle: "italic", color: "#A67C52" }}>avant de vous engager.</span>
          </h2>
        </motion.div>

        {/* Card principale */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: "56px 64px",
            borderRadius: "24px",
            border: "1px solid rgba(166,124,82,0.2)",
            background: "#F3F0EB",
            boxShadow: "0 8px 48px rgba(44,35,24,0.08)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Badge prix */}
          <div style={{ marginBottom: "32px" }}>
            <span style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "100px",
              background: "linear-gradient(135deg, #A67C52 0%, #C4966A 100%)",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "white",
            }}>
              Maquette sur-mesure — 50€ remboursés*
            </span>
          </div>

          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1.05rem",
            lineHeight: 1.9,
            color: "#6B5E52",
            marginBottom: "48px",
            maxWidth: "640px",
          }}>
            Je sais qu&apos;il est difficile de se projeter. C&apos;est pourquoi je vous propose de concevoir la maquette sur-mesure de la page d&apos;accueil de votre futur site en moins d&apos;une semaine. Pour garantir un travail de haute qualité et filtrer les demandes, cette création initiale est facturée <span style={{ color: "#A67C52", fontWeight: 700 }}>50&nbsp;€</span>. La bonne nouvelle&nbsp;? Ces <span style={{ color: "#A67C52", fontWeight: 700 }}>7 jours</span> de travail sont <span style={{ color: "#A67C52", fontWeight: 700 }}>intégralement déduits</span> de votre facture finale si vous décidez de valider le projet. C&apos;est un premier pas sans risque vers votre nouvelle vitrine digitale.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 40px",
              background: "linear-gradient(135deg, #A67C52 0%, #C4966A 100%)",
              color: "white",
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: "4px",
              boxShadow: "0 8px 32px rgba(166,124,82,0.25), 0 2px 8px rgba(166,124,82,0.15)",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(166,124,82,0.4), 0 4px 12px rgba(166,124,82,0.2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(166,124,82,0.25), 0 2px 8px rgba(166,124,82,0.15)";
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
            color: "rgba(107,94,82,0.5)",
            letterSpacing: "0.04em",
          }}>
            * Les 50€ sont intégralement remboursés si vous validez le projet complet.
          </p>
        </motion.div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(166,124,82,0.12), transparent)" }} />
    </section>
  );
}
