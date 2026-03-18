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
      style={{ backgroundColor: "#1E160D" }}
    >
      {/* ══ IMAGE DE FOND — photo spa/massage en fondu ════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Photo spa — pleine visibilité */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          opacity: 1,
        }} />

        {/* Overlay sombre gauche — zone texte lisible */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(15,9,4,0.88) 0%, rgba(15,9,4,0.72) 40%, rgba(15,9,4,0.30) 70%, rgba(15,9,4,0.15) 100%)",
        }} />

        {/* Fondu bas — raccord avec le reste du site */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "220px",
          background: "linear-gradient(to bottom, transparent, #1E160D)",
        }} />

        {/* Voile ambre subtil — chaleur */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(180,130,55,0.12) 0%, transparent 65%)",
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 sm:px-14 pb-32" style={{ paddingTop: "210px" }}>

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

            {/* Badge prix */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: "1.5rem" }}
            >
              <span style={{
                display: "inline-block",
                padding: "6px 16px",
                border: "1px solid rgba(207,165,92,0.35)",
                borderRadius: "100px",
                background: "rgba(207,165,92,0.08)",
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#CFA55C",
              }}>
                Votre site sur-mesure dès 350€
              </span>
            </motion.div>

            {/* H1 — Cormorant, typographie éditoriale */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.8rem, 6vw, 5.8rem)",
                fontWeight: 300,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#F5EDD8",
                marginBottom: "2.25rem",
              }}
            >
              Transformez les visiteurs de{" "}
              <span style={{
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(135deg, #CFA55C 0%, #E2C98A 45%, #CFA55C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Google Maps
              </span>{" "}
              en réservations dans votre salon.
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "clamp(1rem, 1.7vw, 1.15rem)",
                lineHeight: 2,
                color: "rgba(245,237,216,0.62)",
                maxWidth: "620px",
                marginBottom: "2.75rem",
              }}
            >
              <p style={{ marginBottom: "0.9em" }}>
                <span style={{ color: "#CFA55C", fontWeight: 700, fontSize: "1.08em" }}>80 %</span>
                {" "}des Français se renseignent{" "}
                <span style={{ color: "#F5EDD8", fontWeight: 600 }}>d&apos;abord en ligne</span>{" "}
                avant de franchir votre porte.
              </p>
              <p style={{ marginBottom: "0.9em" }}>
                Sans site web pour les rassurer,{" "}
                <span style={{ color: "#CFA55C", fontWeight: 700, fontSize: "1.08em" }}>70 %</span>
                {" "}d&apos;entre eux{" "}
                <span style={{ color: "#F5EDD8", fontWeight: 600 }}>fuient par simple facilité de sélection.</span>
              </p>
              <p>
                Offrez-leur un{" "}
                <span style={{ color: "#F5EDD8", fontWeight: 600 }}>accueil digital à la hauteur</span>{" "}
                de la qualité de vos soins.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              {/* Bouton primaire */}
              <a
                href="#offre"
                className="group inline-flex items-center gap-3"
                style={{
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #CFA55C 0%, #E8C07A 100%)",
                  color: "#2E2214",
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
                Demander ma maquette (50€ remboursés*)
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Bouton secondaire — ghost élégant */}
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3"
                style={{
                  padding: "14px 28px",
                  border: "1px solid rgba(196,169,106,0.22)",
                  color: "#F5EDD8",
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
                  (e.currentTarget as HTMLElement).style.color = "#CFA55C";
                  (e.currentTarget as HTMLElement).style.background = "rgba(196,169,106,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,169,106,0.22)";
                  (e.currentTarget as HTMLElement).style.color = "#F5EDD8";
                  (e.currentTarget as HTMLElement).style.background = "rgba(196,169,106,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Voir mes réalisations
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
                    color: "#CFA55C",
                  }}>{n}</span>
                  <span style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#F5EDD8",
                  }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* ══ SCROLL INDICATOR — droite, visible dès l'arrivée ══════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, -30, 0] }}
        transition={{
          opacity: { delay: 0.9, duration: 0.8 },
          y: { delay: 1.2, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          bottom: "calc(42% + 10px)", right: "8%",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
        }}
      >
        <span style={{
          fontFamily: "var(--font-inter)",
          fontSize: "9px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(196,169,106,0.45)",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}>
          Défiler
        </span>
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            width: "1px", height: "52px",
            background: "linear-gradient(to bottom, rgba(196,169,106,0.6), transparent)",
            transformOrigin: "top",
          }}
        />
        {/* Flèche bas */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.4 }}>
          <path d="M1 1L5 5L9 1" stroke="#CFA55C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Ligne séparatrice bas de section */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
}
