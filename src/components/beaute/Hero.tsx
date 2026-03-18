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
      style={{ backgroundColor: "#1A1008" }}
    >
      {/* ══ IMAGE DE FOND — photo spa/massage ════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Photo spa chaude */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          opacity: 1,
        }} />

        {/* Overlay sombre brun chaud — texte blanc lisible */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(110deg, rgba(18,10,4,0.88) 0%, rgba(18,10,4,0.72) 55%, rgba(18,10,4,0.45) 100%)",
        }} />

        {/* Fondu bas — raccord avec page claire */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "260px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(18,10,4,0.6) 60%, #FAF9F6 100%)",
        }} />

        {/* Lueur ambre douce — profondeur */}
        <div style={{
          position: "absolute", bottom: "20%", left: "5%",
          width: "45%", height: "50%",
          background: "radial-gradient(ellipse, rgba(180,130,55,0.14) 0%, transparent 65%)",
          filter: "blur(50px)",
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
          border: "1px solid rgba(166,124,82,0.08)",
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
          border: "1px solid rgba(166,124,82,0.08)",
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
          background: "linear-gradient(90deg, rgba(166,124,82,0.3), transparent)",
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
        color: "rgba(166,124,82,0.04)",
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
                background: "rgba(166,124,82,0.6)",
              }} />
              <span style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(232,185,106,0.8)",
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
                border: "1px solid rgba(232,185,106,0.35)",
                borderRadius: "100px",
                background: "rgba(232,185,106,0.10)",
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#E8B96A",
              }}>
                Votre site sur-mesure dès 350€
              </span>
            </motion.div>

            {/* H1 — Playfair Display, typographie éditoriale */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(3rem, 6.5vw, 6.2rem)",
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#FAF9F6",
                marginBottom: "2.25rem",
              }}
            >
              Transformez les visiteurs de{" "}
              <span style={{
                fontStyle: "italic",
                fontWeight: 700,
                background: "linear-gradient(135deg, #E8B96A 0%, #F5D08A 50%, #E0A84E 100%)",
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
                background: "rgba(166,124,82,0.45)",
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
                color: "rgba(245,237,216,0.65)",
                maxWidth: "620px",
                marginBottom: "2.75rem",
              }}
            >
              <p style={{ marginBottom: "0.9em" }}>
                <span style={{ color: "#E8B96A", fontWeight: 700, fontSize: "1.08em" }}>80 %</span>
                {" "}des Français se renseignent{" "}
                <span style={{ color: "#FAF9F6", fontWeight: 600 }}>d&apos;abord en ligne</span>{" "}
                avant de franchir votre porte.
              </p>
              <p style={{ marginBottom: "0.9em" }}>
                Sans site web pour les rassurer,{" "}
                <span style={{ color: "#E8B96A", fontWeight: 700, fontSize: "1.08em" }}>70 %</span>
                {" "}d&apos;entre eux{" "}
                <span style={{ color: "#FAF9F6", fontWeight: 600 }}>fuient par simple facilité de sélection.</span>
              </p>
              <p>
                Offrez-leur un{" "}
                <span style={{ color: "#FAF9F6", fontWeight: 600 }}>accueil digital à la hauteur</span>{" "}
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
                  background: "linear-gradient(135deg, #A67C52 0%, #C4966A 100%)",
                  color: "white",
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  boxShadow: "0 8px 32px rgba(166,124,82,0.2), 0 2px 8px rgba(166,124,82,0.15)",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(166,124,82,0.35), 0 4px 12px rgba(166,124,82,0.2)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(166,124,82,0.2), 0 2px 8px rgba(166,124,82,0.15)";
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
                  border: "1px solid rgba(166,124,82,0.35)",
                  color: "#2C2318",
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  background: "transparent",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(166,124,82,0.6)";
                  (e.currentTarget as HTMLElement).style.color = "#A67C52";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(166,124,82,0.35)";
                  (e.currentTarget as HTMLElement).style.color = "#2C2318";
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
                borderTop: "1px solid rgba(232,185,106,0.2)",
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
                    color: "#E8B96A",
                  }}>{n}</span>
                  <span style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(245,237,216,0.45)",
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
          color: "rgba(166,124,82,0.5)",
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
            background: "linear-gradient(to bottom, rgba(166,124,82,0.4), transparent)",
            transformOrigin: "top",
          }}
        />
        {/* Flèche bas */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.4 }}>
          <path d="M1 1L5 5L9 1" stroke="#A67C52" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Ligne séparatrice bas de section */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
}
