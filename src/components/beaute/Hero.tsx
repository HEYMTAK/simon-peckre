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
      style={{ backgroundColor: "#2E2214" }}
    >
      {/* ══ FOND — calques de lumière chaude ══════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Voile ambré principal — haut centre */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 95% 70% at 50% 0%, rgba(220,165,80,0.28) 0%, transparent 65%)",
        }} />

        {/* Glow pêche/miel — droite */}
        <div style={{
          position: "absolute",
          top: "0%", right: "-5%",
          width: "55%", height: "80%",
          background: "radial-gradient(ellipse, rgba(210,155,75,0.22) 0%, transparent 58%)",
          filter: "blur(30px)",
        }} />

        {/* Glow cannelle — bas gauche */}
        <div style={{
          position: "absolute",
          bottom: "-5%", left: "-5%",
          width: "50%", height: "60%",
          background: "radial-gradient(ellipse, rgba(190,130,60,0.2) 0%, transparent 58%)",
          filter: "blur(40px)",
        }} />

        {/* Halo centre — chaleur ambiante */}
        <div style={{
          position: "absolute",
          top: "30%", left: "50%", transform: "translateX(-50%)",
          width: "70%", height: "40%",
          background: "radial-gradient(ellipse, rgba(200,150,65,0.12) 0%, transparent 65%)",
          filter: "blur(55px)",
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-center">

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
                color: "#F5EDD8",
                marginBottom: "2rem",
              }}
            >
              Transformez vos visiteurs<br />
              <span style={{
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(135deg, #CFA55C 0%, #E2C98A 45%, #CFA55C 100%)",
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
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
                lineHeight: 1.7,
                color: "rgba(240,234,224,0.85)",
                maxWidth: "520px",
                marginBottom: "2.75rem",
              }}
            >
              Vos avis Google attirent l&apos;attention. Votre site web premium déclenche
              la réservation. Offrez à vos futurs clients l&apos;accueil digital qu&apos;ils méritent,{" "}
              <span style={{ color: "#CFA55C", fontWeight: 500 }}>à partir de 350€.</span>
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
                  (e.currentTarget as HTMLElement).style.color = "#CFA55C";
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
                    color: "#CFA55C",
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

          {/* ── Colonne droite — carte Google Maps ── */}
          <motion.div
            initial={{ opacity: 0, y: 32, x: 16 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Carte Google Business */}
            <div style={{
              borderRadius: "18px",
              border: "1px solid rgba(207,165,92,0.15)",
              background: "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(24px)",
              overflow: "hidden",
              boxShadow: "0 32px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(207,165,92,0.08)",
            }}>
              {/* Header carte — bande Maps */}
              <div style={{
                padding: "14px 18px 12px",
                background: "rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(207,165,92,0.1)",
                display: "flex", alignItems: "center", gap: "8px",
              }}>
                {/* Pin Maps SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
                  <circle cx="12" cy="9" r="2.5" fill="white"/>
                </svg>
                <span style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "rgba(245,237,216,0.5)",
                  textTransform: "uppercase",
                }}>Google Maps</span>
                {/* Points colorés Google */}
                <div style={{ marginLeft: "auto", display: "flex", gap: "4px" }}>
                  {["#EA4335","#FBBC04","#34A853","#4285F4"].map(c => (
                    <div key={c} style={{ width: "6px", height: "6px", borderRadius: "50%", background: c, opacity: 0.8 }} />
                  ))}
                </div>
              </div>

              {/* Fausse mini-map */}
              <div style={{
                height: "90px",
                background: "linear-gradient(135deg, rgba(52,68,40,0.5) 0%, rgba(44,58,34,0.6) 50%, rgba(60,76,46,0.4) 100%)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Grille de rues stylisée */}
                <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
                  <line x1="0" y1="40" x2="320" y2="40" stroke="rgba(245,237,216,0.4)" strokeWidth="1.5"/>
                  <line x1="0" y1="70" x2="320" y2="70" stroke="rgba(245,237,216,0.2)" strokeWidth="1"/>
                  <line x1="60" y1="0" x2="60" y2="90" stroke="rgba(245,237,216,0.3)" strokeWidth="1.5"/>
                  <line x1="160" y1="0" x2="160" y2="90" stroke="rgba(245,237,216,0.2)" strokeWidth="1"/>
                  <line x1="240" y1="0" x2="240" y2="90" stroke="rgba(245,237,216,0.15)" strokeWidth="1"/>
                  {/* Bloc bâtiment */}
                  <rect x="80" y="20" width="60" height="35" rx="3" fill="rgba(207,165,92,0.12)" stroke="rgba(207,165,92,0.2)" strokeWidth="1"/>
                  <rect x="170" y="10" width="45" height="25" rx="3" fill="rgba(207,165,92,0.08)" stroke="rgba(207,165,92,0.15)" strokeWidth="1"/>
                </svg>
                {/* Pin animé */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "18px", left: "50%", transform: "translateX(-50%)",
                  }}
                >
                  <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 18 12 18S24 21 24 12C24 5.37 18.63 0 12 0z" fill="#EA4335"/>
                    <circle cx="12" cy="12" r="5" fill="white"/>
                    <circle cx="12" cy="12" r="3" fill="#EA4335"/>
                  </svg>
                  {/* Ombre du pin */}
                  <div style={{
                    width: "12px", height: "4px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.3)",
                    margin: "0 auto",
                    filter: "blur(2px)",
                  }} />
                </motion.div>
              </div>

              {/* Infos business */}
              <div style={{ padding: "18px" }}>
                <div style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#F5EDD8",
                  marginBottom: "4px",
                }}>Institut Lumière</div>

                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  marginBottom: "6px",
                }}>
                  {/* Étoiles */}
                  <span style={{ color: "#FBBC04", fontSize: "12px", letterSpacing: "1px" }}>★★★★★</span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 700, color: "#F5EDD8" }}>4.9</span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "rgba(245,237,216,0.4)" }}>(143 avis)</span>
                </div>

                <div style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  color: "rgba(245,237,216,0.4)",
                  marginBottom: "14px",
                  letterSpacing: "0.02em",
                }}>
                  Institut de beauté · Ouvert jusqu&apos;à 20h
                </div>

                {/* Boutons */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{
                    flex: 1, padding: "7px 10px",
                    background: "rgba(66,133,244,0.15)",
                    border: "1px solid rgba(66,133,244,0.25)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#7EB3FF",
                    textAlign: "center",
                    letterSpacing: "0.03em",
                  }}>
                    Itinéraire
                  </div>
                  <div style={{
                    flex: 1, padding: "7px 10px",
                    background: "rgba(207,165,92,0.15)",
                    border: "1px solid rgba(207,165,92,0.3)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#CFA55C",
                    textAlign: "center",
                    letterSpacing: "0.03em",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "4px",
                  }}>
                    Site web
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#CFA55C" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge "Votre site ici" */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
              style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "11px 16px",
                borderRadius: "12px",
                background: "rgba(207,165,92,0.07)",
                border: "1px solid rgba(207,165,92,0.18)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#CFA55C" strokeWidth="1.5"/>
                <path d="M12 6v6l4 2" stroke="#CFA55C" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 500,
                color: "rgba(207,165,92,0.7)",
                letterSpacing: "0.05em",
              }}>
                Votre site web s&apos;affiche ici → clients directs
              </span>
            </motion.div>
          </motion.div>

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
          bottom: "33%", right: "8%",
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
