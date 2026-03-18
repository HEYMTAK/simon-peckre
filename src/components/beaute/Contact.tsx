"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative overflow-hidden" style={{ padding: "120px 0", background: "#2C2318" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(166,124,82,0.3), transparent)" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px", textAlign: "center" }} ref={ref}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "32px" }}
        >
          <div style={{ width: "40px", height: "1px", background: "rgba(166,124,82,0.5)" }} />
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(166,124,82,0.8)" }}>
            Passez à l&apos;action
          </span>
          <div style={{ width: "40px", height: "1px", background: "rgba(166,124,82,0.5)" }} />
        </motion.div>

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
            fontWeight: 700,
            lineHeight: 1.06,
            color: "#FAF9F6",
            letterSpacing: "-0.02em",
            marginBottom: "28px",
          }}
        >
          Prêt(e) à remplir{" "}
          <span style={{ fontStyle: "italic", color: "#A67C52" }}>votre agenda ?</span>
        </motion.h2>

        {/* Texte */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: "rgba(250,249,246,0.65)",
            maxWidth: "620px",
            margin: "0 auto 48px",
          }}
        >
          Ne laissez plus vos concurrents monopoliser l&apos;attention sur Google Maps. Demandez votre démonstration aujourd&apos;hui. En moins d&apos;une semaine, je vous livre une maquette personnalisée, sans aucun engagement.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="https://www.planity.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "18px 48px",
              background: "#A67C52",
              color: "white",
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: "4px",
              boxShadow: "0 8px 40px rgba(166,124,82,0.3), 0 2px 8px rgba(166,124,82,0.2)",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 56px rgba(166,124,82,0.45), 0 4px 16px rgba(166,124,82,0.25)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(166,124,82,0.3), 0 2px 8px rgba(166,124,82,0.2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Demander ma maquette (50€ remboursés)
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: "80px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(166,124,82,0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <p style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.2rem",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(250,249,246,0.35)",
          }}>
            Kaki Studio · Webdesign premium pour instituts &amp; salons
          </p>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "rgba(250,249,246,0.2)",
          }}>
            © {new Date().getFullYear()} Kaki Studio — Tous droits réservés
          </p>
        </motion.div>
      </div>
    </section>
  );
}
