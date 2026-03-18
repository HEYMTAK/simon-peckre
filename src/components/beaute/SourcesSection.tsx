"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sources = [
  {
    label: "Partoo / Google France",
    detail: "Étude sur l'impact des fiches Google My Business sans site web — interactions et taux de clics.",
  },
  {
    label: "Arobaz",
    detail: "Étude sur le comportement des internautes face à l'univers visuel d'un site web commercial.",
  },
  {
    label: "Devmiweb",
    detail: "Analyse sectorielle sur les critères de confiance des clientes dans le secteur de l'esthétique.",
  },
  {
    label: "France Num / Fevad",
    detail: "Baromètre annuel de la transformation numérique des TPE/PME françaises — comportements d'achat local.",
  },
  {
    label: "Stanford Web Credibility Research",
    detail: "Étude sur la crédibilité perçue des sites web et son impact sur la décision d'achat.",
  },
  {
    label: "BrightLocal — Local Consumer Review Survey",
    detail: "Rapport annuel sur les comportements des consommateurs vis-à-vis des fiches Google Business et du référencement local.",
  },
  {
    label: "Think With Google — Mobile Search Insights",
    detail: "Données sur les recherches locales mobiles et leur taux de conversion en visite physique.",
  },
  {
    label: "Ahrefs — Long-tail Keywords Study",
    detail: "Analyse du taux de conversion des requêtes à longue traîne versus mots-clés génériques.",
  },
  {
    label: "Planity Pro",
    detail: "Données internes sur la réduction des rendez-vous non honorés grâce à la réservation en ligne et aux rappels automatiques.",
  },
];

export default function SourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative overflow-hidden" style={{ padding: "60px 0 40px", background: "#F3F0EB" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(166,124,82,0.1), transparent)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }} ref={ref}>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Titre */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}>
            <span style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B5E52",
            }}>
              📊 Nos données s&apos;appuient sur des études prouvées.
            </span>
          </div>

          {/* Intro */}
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            lineHeight: 1.7,
            color: "rgba(107,94,82,0.7)",
            marginBottom: "16px",
            maxWidth: "700px",
          }}>
            Parce que la digitalisation de votre salon ne doit rien au hasard, voici les sources des statistiques utilisées sur cette page :
          </p>

          {/* Liste sources */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
            {sources.map((source, i) => (
              <div key={i} style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                color: "rgba(107,94,82,0.7)",
                lineHeight: 1.6,
              }}>
                <span style={{ color: "rgba(166,124,82,0.6)", fontWeight: 600 }}>{source.label}</span>
                {" — "}
                {source.detail}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
