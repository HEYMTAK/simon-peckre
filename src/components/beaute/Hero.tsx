"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── BASE BACKGROUND ─────────────────────────────────── */}
      <div className="absolute inset-0" style={{ backgroundColor: "#0B0906" }} />

      {/* ── COLOUR BLOBS ────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main warm amber glow — centre */}
        <div
          className="absolute"
          style={{
            top: "10%", left: "50%", transform: "translateX(-50%)",
            width: "900px", height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(200,140,40,0.13) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Gold spot — top right */}
        <div
          className="absolute"
          style={{
            top: "-5%", right: "-10%",
            width: "600px", height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(220,170,70,0.08) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        {/* Warm copper — bottom left */}
        <div
          className="absolute"
          style={{
            bottom: "0%", left: "-5%",
            width: "500px", height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(160,100,30,0.1) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        {/* Tiny hot spot — left-centre */}
        <div
          className="absolute"
          style={{
            top: "40%", left: "15%",
            width: "200px", height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(230,180,80,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* ── GRAIN / NOISE TEXTURE ───────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.045,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "220px 220px",
        }}
      />

      {/* ── SUBTLE GRID ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,160,70,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,160,70,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── DECORATIVE RING — top right ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute pointer-events-none"
        style={{
          top: "-120px", right: "-120px",
          width: "600px", height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(200,160,70,0.08)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        className="absolute pointer-events-none"
        style={{
          top: "-60px", right: "-60px",
          width: "450px", height: "450px",
          borderRadius: "50%",
          border: "1px solid rgba(200,160,70,0.05)",
        }}
      />

      {/* ── DECORATIVE RING — bottom left ───────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute pointer-events-none"
        style={{
          bottom: "-150px", left: "-150px",
          width: "500px", height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(200,160,70,0.06)",
        }}
      />

      {/* ── LIGHT STREAK — diagonal ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute pointer-events-none"
        style={{
          top: "30%", left: "-10%",
          width: "55%", height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(200,160,70,0.12), transparent)",
          transform: "rotate(-15deg)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute pointer-events-none"
        style={{
          top: "55%", right: "-10%",
          width: "40%", height: "1px",
          background: "linear-gradient(270deg, transparent, rgba(200,160,70,0.08), transparent)",
          transform: "rotate(-15deg)",
        }}
      />

      {/* ── LARGE GHOST NUMBER ──────────────────────────────── */}
      <div
        className="absolute pointer-events-none select-none font-cinzel font-bold"
        style={{
          bottom: "-60px", right: "-20px",
          fontSize: "clamp(200px, 30vw, 400px)",
          lineHeight: 1,
          color: "rgba(200,160,70,0.025)",
          letterSpacing: "-0.05em",
        }}
      >
        01
      </div>

      {/* ── CONTENT ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-24 text-center">

        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2.5 mb-10"
        >
          <span
            className="flex items-center gap-2.5 px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase"
            style={{
              color: "#C8A45E",
              border: "1px solid rgba(200,164,94,0.25)",
              borderRadius: "100px",
              background: "rgba(200,164,94,0.06)",
              backdropFilter: "blur(6px)",
            }}
          >
            {/* Dot pulse */}
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "#C8A45E" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ backgroundColor: "#C8A45E" }}
              />
            </span>
            Instituts de beauté · Salons de massage
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="font-cinzel font-bold leading-[1.08] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)" }}
        >
          <span className="block text-white">Transformez vos visiteurs</span>
          <span className="block" style={{ color: "#C8A45E" }}>
            Google Maps
          </span>
          <span className="block text-white">en clients fidèles.</span>
        </motion.h1>

        {/* Separator line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mb-8 origin-center"
          style={{
            width: "60px", height: "1px",
            background: "linear-gradient(90deg, transparent, #C8A45E, transparent)",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="leading-relaxed max-w-2xl mx-auto mb-12"
          style={{
            color: "rgba(244,244,245,0.55)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
          }}
        >
          Vos avis Google attirent l&apos;attention. Votre site web premium déclenche la
          réservation. Offrez à vos futurs clients l&apos;accueil digital qu&apos;ils méritent,{" "}
          <span style={{ color: "#C8A45E", fontWeight: 600 }}>à partir de 350€.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#tarifs"
            className="group relative flex items-center gap-3 px-8 py-4 font-bold text-sm tracking-wide rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #C8A45E 0%, #E0C278 50%, #C8A45E 100%)",
              backgroundSize: "200% 200%",
              color: "#0B0906",
              boxShadow: "0 0 40px rgba(200,164,94,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 60px rgba(200,164,94,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 40px rgba(200,164,94,0.25), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
          >
            Découvrir l&apos;offre
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#portfolio"
            className="group flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: "rgba(244,244,245,0.75)",
              border: "1px solid rgba(200,164,94,0.2)",
              background: "rgba(200,164,94,0.04)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,94,0.5)";
              (e.currentTarget as HTMLElement).style.color = "#C8A45E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,94,0.2)";
              (e.currentTarget as HTMLElement).style.color = "rgba(244,244,245,0.75)";
            }}
          >
            <Play size={13} className="fill-current" />
            Voir mes réalisations
          </a>
        </motion.div>

        {/* Proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {[
            { icon: "⚡", text: "Livré en 7 jours" },
            { icon: "📱", text: "Mobile-first" },
            { icon: "🌐", text: "Hébergement inclus" },
            { icon: "📍", text: "SEO local optimisé" },
          ].map(({ icon, text }) => (
            <span
              key={text}
              className="flex items-center gap-2 text-xs tracking-wide whitespace-nowrap"
              style={{ color: "rgba(200,164,94,0.45)" }}
            >
              <span style={{ filter: "grayscale(0.4)" }}>{icon}</span>
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "rgba(200,164,94,0.3)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            width: "1px", height: "36px",
            background: "linear-gradient(to bottom, rgba(200,164,94,0.5), transparent)",
            borderRadius: "1px",
          }}
        />
      </motion.div>
    </section>
  );
}
