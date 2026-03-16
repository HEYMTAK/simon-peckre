"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Réalisations", href: "#portfolio" },
    { label: "Pourquoi un site", href: "#roi" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        backgroundColor: scrolled ? "rgba(16,14,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,169,106,0.1)" : "1px solid transparent",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 32px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        {/* ── Logo ── */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1px",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.35rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textDecoration: "none",
          }}
        >
          <span style={{ color: "#CFA55C", fontStyle: "italic" }}>Kaki</span>
          <span style={{
            color: "#F5EDD8",
            fontStyle: "normal",
            marginLeft: "6px",
          }}>Studio</span>
          <span style={{
            display: "inline-block",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#CFA55C",
            marginLeft: "3px",
            marginBottom: "2px",
            alignSelf: "flex-end",
          }} />
        </a>

        {/* ── Nav desktop ── */}
        <nav style={{ display: "flex", alignItems: "center", gap: "40px" }} className="hidden md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F5EDD8",
                textDecoration: "none",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CFA55C"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#F5EDD8"}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── CTA desktop ── */}
        <div className="hidden md:block" style={{ position: "relative" }}>
          <a
            href="#contact"
            className="group"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2E2214",
              textDecoration: "none",
              padding: "11px 26px",
              background: "linear-gradient(135deg, #CFA55C 0%, #E8C07A 40%, #CFA55C 100%)",
              backgroundSize: "200% 200%",
              borderRadius: "100px",
              transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              boxShadow: "0 0 0 1px rgba(232,192,122,0.4), 0 4px 20px rgba(207,165,92,0.25), inset 0 1px 0 rgba(255,255,255,0.25)",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 0 1px rgba(232,192,122,0.6), 0 8px 32px rgba(207,165,92,0.45), inset 0 1px 0 rgba(255,255,255,0.3)";
              el.style.transform = "translateY(-2px) scale(1.02)";
              el.style.backgroundPosition = "100% 100%";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 0 1px rgba(232,192,122,0.4), 0 4px 20px rgba(207,165,92,0.25), inset 0 1px 0 rgba(255,255,255,0.25)";
              el.style.transform = "translateY(0) scale(1)";
              el.style.backgroundPosition = "0% 0%";
            }}
          >
            {/* Shimmer layer */}
            <span style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "-100% 0",
              transition: "background-position 0.6s ease",
              borderRadius: "inherit",
              pointerEvents: "none",
            }}
              className="shimmer"
            />
            <span style={{ position: "relative", zIndex: 1 }}>Prendre RDV</span>
            {/* Petite flèche */}
            <span style={{
              position: "relative", zIndex: 1,
              display: "inline-flex",
              width: "18px", height: "18px",
              borderRadius: "50%",
              background: "rgba(46,34,20,0.15)",
              alignItems: "center", justifyContent: "center",
              transition: "transform 0.3s ease",
            }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="#2E2214" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        {/* ── Burger mobile ── */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(196,169,106,0.7)",
            padding: "4px",
            transition: "color 0.2s ease",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Menu mobile ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: "hidden",
              background: "rgba(16,14,10,0.97)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(196,169,106,0.1)",
            }}
          >
            <div style={{
              padding: "24px 32px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "rgba(232,223,208,0.7)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  marginTop: "8px",
                  padding: "14px 24px",
                  background: "linear-gradient(135deg, #CFA55C 0%, #E8C07A 100%)",
                  color: "#2E2214",
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Prendre RDV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
