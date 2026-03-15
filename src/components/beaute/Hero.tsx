"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";

/* ─── Petites lignes décoratives ─── */
function DecoLine({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={`absolute pointer-events-none ${className ?? ""}`} style={style} />;
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#221A10" }}
    >
      {/* ══ FOND — calques de lumière chaude ══════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Voile chaud principal — haut centre */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 90% 65% at 50% 0%, rgba(210,160,80,0.22) 0%, transparent 68%)",
        }} />

        {/* Glow ambre chaud — droite */}
        <div style={{
          position: "absolute",
          top: "5%", right: "-5%",
          width: "50%", height: "75%",
          background: "radial-gradient(ellipse, rgba(195,145,65,0.18) 0%, transparent 60%)",
          filter: "blur(35px)",
        }} />

        {/* Glow terre cuite — bas gauche */}
        <div style={{
          position: "absolute",
          bottom: "-5%", left: "-5%",
          width: "45%", height: "55%",
          background: "radial-gradient(ellipse, rgba(170,120,55,0.16) 0%, transparent 60%)",
          filter: "blur(45px)",
        }} />

        {/* Accent caramel — centre-bas */}
        <div style={{
          position: "absolute",
          bottom: "15%", left: "50%", transform: "translateX(-50%)",
          width: "60%", height: "30%",
          background: "radial-gradient(ellipse, rgba(180,135,60,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }} />

        {/* Grain / texture tissu */}
        <div style={{
          position: "absolute", inset: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "280px 280px",
        }} />

        {/* Grille très fine */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(196,169,106,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(196,169,106,0.03) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }} />
      </div>

      {/* ══ ÉLÉMENTS DÉCORATIFS ════════════════════════════════════════════════ */}

      {/* Grand arc de cercle — haut droite */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute", pointerEvents: "none",
          top: "-200px", right: "-200px",
          width: "700px", height: "700px",
          borderRadius: "50%",
          border: "1px solid rgba(196,169,106,0.07)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute", pointerEvents: "none",
          top: "-100px", right: "-100px",
          width: "500px", height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(196,169,106,0.05)",
        }}
      />

      {/* Ligne horizontale déco — milieu gauche */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute", pointerEvents: "none",
          top: "42%", left: 0,
          width: "15%", height: "1px",
          background: "linear-gradient(90deg, rgba(196,169,106,0.3), transparent)",
          transformOrigin: "left",
        }}
      />

      {/* Numéro fantôme */}
      <div style={{
        position: "absolute", pointerEvents: "none", userSelect: "none",
        bottom: "-80px", right: "-30px",
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontWeight: 300,
        fontSize: "clamp(220px, 28vw, 420px)",
        lineHeight: 1,
        color: "rgba(196,169,106,0.028)",
        letterSpacing: "-0.04em",
      }}>
        01
      </div>

      {/* ══ CONTENU PRINCIPAL ═════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 sm:px-12 pt-36 pb-28">

        <div className="grid grid-cols-1 gap-16 items-center">

          {/* ── Colonne gauche ── */}
          <div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-10"
            >
              <div style={{
                width: "32px", height: "1px",
                background: "rgba(196,169,106,0.6)",
              }} />
              <span style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(196,169,106,0.7)",
              }}>
                Instituts de beauté · Salons de massage
              </span>
            </motion.div>

            {/* H1 — Cormorant, typographie éditoriale */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(3.2rem, 7vw, 6rem)",
                fontWeight: 300,
                lineHeight: 1.06,
                letterSpacing: "-0.01em",
                color: "#F0EAE0",
                marginBottom: "2rem",
              }}
            >
              Transformez vos visiteurs<br />
              <span style={{
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(135deg, #C4A96A 0%, #E2C98A 45%, #C4A96A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Google Maps
              </span>
              <br />
              <span style={{ fontWeight: 300 }}>en clients fidèles.</span>
            </motion.h1>

            {/* Séparateur */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: "48px", height: "1px",
                background: "rgba(196,169,106,0.45)",
                marginBottom: "1.75rem",
                transformOrigin: "left",
              }}
            />

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)",
                lineHeight: 1.75,
                color: "rgba(232,223,208,0.55)",
                maxWidth: "520px",
                marginBottom: "2.75rem",
              }}
            >
              Vos avis Google attirent l&apos;attention. Votre site web premium déclenche
              la réservation. Offrez à vos futurs clients l&apos;accueil digital qu&apos;ils méritent,{" "}
              <span style={{ color: "#C4A96A", fontWeight: 500 }}>à partir de 350€.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              {/* Bouton primaire */}
              <a
                href="#tarifs"
                className="group inline-flex items-center gap-3"
                style={{
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #C4A96A 0%, #DEC48A 100%)",
                  color: "#221A10",
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  boxShadow: "0 8px 32px rgba(196,169,106,0.2), 0 2px 8px rgba(196,169,106,0.15)",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(196,169,106,0.35), 0 4px 12px rgba(196,169,106,0.2)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(196,169,106,0.2), 0 2px 8px rgba(196,169,106,0.15)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Découvrir l&apos;offre
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Bouton secondaire — ghost élégant */}
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3"
                style={{
                  padding: "14px 28px",
                  border: "1px solid rgba(196,169,106,0.22)",
                  color: "rgba(232,223,208,0.65)",
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  background: "rgba(196,169,106,0.04)",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,169,106,0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#C4A96A";
                  (e.currentTarget as HTMLElement).style.background = "rgba(196,169,106,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,169,106,0.22)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(232,223,208,0.65)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(196,169,106,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Voir les réalisations
                <MoveRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

            {/* Proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                marginTop: "3.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(196,169,106,0.1)",
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              {[
                { n: "7j", label: "Délai livraison" },
                { n: "350€", label: "À partir de" },
                { n: "100%", label: "Mobile-first" },
              ].map(({ n, label }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.7rem",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#C4A96A",
                  }}>{n}</span>
                  <span style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(196,169,106,0.4)",
                  }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* ══ SCROLL INDICATOR ════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "40px", left: "calc(50% - 60px)",
          display: "flex", flexDirection: "row", alignItems: "center", gap: "12px",
        }}
      >
        <motion.div
          animate={{ x: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          style={{
            width: "32px", height: "1px",
            background: "linear-gradient(to right, transparent, rgba(196,169,106,0.5))",
          }}
        />
        <span style={{
          fontFamily: "var(--font-inter)",
          fontSize: "9px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(196,169,106,0.35)",
          whiteSpace: "nowrap",
        }}>
          Défiler
        </span>
        <motion.div
          animate={{ x: [4, -4, 4] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          style={{
            width: "32px", height: "1px",
            background: "linear-gradient(to left, transparent, rgba(196,169,106,0.5))",
          }}
        />
      </motion.div>

      {/* Ligne séparatrice bas de section */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
}
