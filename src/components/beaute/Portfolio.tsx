"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const videos = [
  { src: "/videos/institut-beaute-2.mp4", label: "Institut de beauté", location: "Romans-sur-Isère" },
  { src: "/videos/mood-massage.mp4", label: "Institut de massage", location: "Troyes" },
  { src: "/videos/institut-beaute-1.mp4", label: "Institut de beauté / massage", location: "Argelès-Gazost" },
];

function VideoCard({ video, index, isInView }: { video: typeof videos[0]; index: number; isInView: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const manuallyPaused = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!manuallyPaused.current) { el.play().catch(() => {}); setPlaying(true); }
        } else {
          el.pause(); setPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function togglePlay() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) { manuallyPaused.current = false; el.play(); setPlaying(true); }
    else { manuallyPaused.current = true; el.pause(); setPlaying(false); }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: index * 18 - 18, y: 48 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.18 + 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "relative" }}
    >
      {/* Glow ambiant derrière la card */}
      <div style={{
        position: "absolute",
        inset: "-24px",
        borderRadius: "32px",
        background: "radial-gradient(ellipse at 40% 60%, rgba(207,165,92,0.10) 0%, transparent 70%)",
        filter: "blur(24px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <motion.div
        whileHover={{ y: -8, scale: 1.012, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
        style={{
          position: "relative",
          zIndex: 1,
          borderRadius: "20px",
          overflow: "hidden",
          cursor: "pointer",
          /* Double bordure : fine ligne or externe + fond sombre */
          background: "linear-gradient(145deg, rgba(207,165,92,0.18) 0%, rgba(207,165,92,0.04) 50%, rgba(207,165,92,0.10) 100%)",
          padding: "1px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(207,165,92,0.08), inset 0 1px 0 rgba(245,237,216,0.06)",
        }}
      >
        {/* Inner card */}
        <div style={{ borderRadius: "19px", overflow: "hidden", background: "#1E2A1C" }}>

          {/* Header overlay : tag + numéro */}
          <div style={{ position: "relative", lineHeight: 0, fontSize: 0 }}>
            {/* Numéro watermark */}
            <div style={{
              position: "absolute", top: "12px", right: "20px", zIndex: 10,
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "52px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(207,165,92,0.07)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              userSelect: "none",
            }}>
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Skeleton de chargement */}
            {!loaded && (
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(160deg, #1E2A1C, #161E14)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px",
                zIndex: 5,
                minHeight: "220px",
              }}>
                {/* Spinner doré */}
                <div style={{
                  width: "36px", height: "36px",
                  borderRadius: "50%",
                  border: "2px solid rgba(207,165,92,0.12)",
                  borderTopColor: "rgba(207,165,92,0.7)",
                  animation: "spin 1s linear infinite",
                }} />
                <span style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9.5px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(207,165,92,0.4)",
                }}>
                  Chargement…
                </span>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            )}

            {/* Vidéo */}
            <video
              ref={videoRef}
              src={video.src}
              muted
              loop
              playsInline
              onCanPlay={() => setLoaded(true)}
              style={{ width: "100%", height: "auto", display: "block", opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
            />
          </div>

          {/* Footer */}
          <div style={{
            padding: "20px 24px 22px",
            background: "linear-gradient(180deg, rgba(30,42,28,0) 0%, #1E2A1C 100%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "12px",
          }}>
            <div>
              {/* Ligne décorative */}
              <div style={{ width: "28px", height: "1px", background: "rgba(207,165,92,0.45)", marginBottom: "10px" }} />
              <div style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#F5EDD8",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
              }}>
                {video.label}
              </div>
              <div style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9.5px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(207,165,92,0.45)",
                marginTop: "6px",
              }}>
                {video.location}
              </div>
            </div>

            {/* Bouton play / pause */}
            <div
              onClick={togglePlay}
              style={{
                flexShrink: 0,
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid rgba(207,165,92,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: playing ? "rgba(207,165,92,0.14)" : "rgba(207,165,92,0.06)",
                cursor: "pointer",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
            >
              {playing ? (
                /* Icône pause */
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="2.5" y="1.5" width="2.5" height="9" rx="1" fill="#CFA55C" />
                  <rect x="7" y="1.5" width="2.5" height="9" rx="1" fill="#CFA55C" />
                </svg>
              ) : (
                /* Icône play */
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 1.5L10 6L2.5 10.5V1.5Z" fill="#CFA55C" />
                </svg>
              )}
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="portfolio" className="relative overflow-hidden" style={{ padding: "120px 0" }}>

      {/* Séparateur haut */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.2), transparent)" }} />

      {/* Glow ambré gauche */}
      <div style={{ position: "absolute", top: "20%", left: "-10%", width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(207,165,92,0.06) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }} ref={ref}>

        {/* ── En-tête éditorial ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end", marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
              <div style={{ width: "40px", height: "1px", background: "rgba(207,165,92,0.5)" }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(207,165,92,0.65)" }}>
                Réalisations
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
              Un standing<br />
              <span style={{ fontStyle: "italic", color: "#CFA55C" }}>professionnel</span><br />
              instantané.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,237,216,0.5)", marginBottom: "32px" }}>
  Sur Google Maps, vos futurs clients hésitent souvent entre plusieurs adresses. Ce qu&apos;ils cherchent avant tout, c&apos;est d&apos;être rassurés. Une fiche Google donne vos horaires, mais <span style={{ color: "#F5EDD8", fontWeight: 600 }}>un site web soigné prolonge l&apos;expérience et l&apos;atmosphère de votre salon</span> avant même qu&apos;ils n&apos;en franchissent la porte. C&apos;est cette attention aux détails qui prouve votre professionnalisme et <span style={{ color: "#F5EDD8", fontWeight: 600 }}>les invite à réserver chez vous en toute confiance.</span>
            </p>
            {/* Mini-stats en ligne */}
            <div style={{ display: "flex", gap: "32px" }}>
              {[
                { n: "83%", l: "Salons US en ligne" },
                { n: "7j", l: "Délai livraison" },
                { n: "350€", l: "À partir de" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", fontWeight: 500, color: "#CFA55C", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(207,165,92,0.4)", marginTop: "4px" }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Escalier vidéos ── */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "28px" }}>
          {videos.map((video, i) => (
            <div key={video.src} style={{ width: "65%", marginLeft: `${i * 17.5}%` }}>
              <VideoCard video={video} index={i} isInView={isInView} />
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ textAlign: "center", fontFamily: "var(--font-inter)", fontSize: "11px", color: "rgba(245,237,216,0.2)", marginTop: "32px", letterSpacing: "0.06em" }}
        >
          * Vos propres réalisations remplaceront ces aperçus.
        </motion.p>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(207,165,92,0.12), transparent)" }} />
    </section>
  );
}
