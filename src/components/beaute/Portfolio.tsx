"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const videos = [
  { src: "/videos/institut-beaute-1.mp4", label: "Institut de beauté", location: "Paris 16e", tag: "Essentiel" },
  { src: "/videos/mood-massage.mp4", label: "Institut de massage", location: "Caen", tag: "Automatisé" },
  { src: "/videos/institut-beaute-2.mp4", label: "Institut de beauté", location: "Lyon Centre", tag: "Automatisé" },
];

function VideoCard({ video, index, isInView }: { video: typeof videos[0]; index: number; isInView: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      key={video.src}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid rgba(207,165,92,0.1)",
        boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Tag */}
      <div style={{
        position: "absolute", top: "16px", left: "16px", zIndex: 10,
        padding: "5px 12px",
        borderRadius: "100px",
        background: "rgba(46,34,20,0.75)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(207,165,92,0.25)",
        fontFamily: "var(--font-inter)",
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#CFA55C",
      }}>
        {video.tag}
      </div>

      {/* Numéro */}
      <div style={{
        position: "absolute", top: "14px", right: "16px", zIndex: 10,
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontSize: "13px",
        fontWeight: 400,
        color: "rgba(245,237,216,0.3)",
        letterSpacing: "0.1em",
      }}>
        0{index + 1}
      </div>

      {/* Vidéo */}
      <div style={{ position: "relative", background: "linear-gradient(160deg, rgba(60,44,26,0.8), rgba(30,22,14,0.95))" }}>
        <video
          ref={videoRef}
          src={video.src}
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        {/* Overlay gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,22,14,0.9) 0%, rgba(30,22,14,0.1) 50%, transparent 100%)" }} />
      </div>

      {/* Label bas */}
      <div style={{ padding: "16px 18px 18px", background: "linear-gradient(to bottom, rgba(30,22,14,0.85), rgba(20,14,8,0.97))" }}>
        <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.15rem", fontWeight: 500, fontStyle: "italic", color: "#F5EDD8", lineHeight: 1.2 }}>
          {video.label}
        </div>
        <div style={{ fontFamily: "var(--font-inter)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(207,165,92,0.5)", marginTop: "4px" }}>
          {video.location}
        </div>
      </div>
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
