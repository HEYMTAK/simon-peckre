"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Users, TrendingDown, TrendingUp, CalendarCheck } from "lucide-react";

interface StatCardProps {
  value: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  delay?: number;
  highlight?: boolean;
}

function useCounter(target: number, duration: number, isInView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);
  return count;
}

function StatCard({ value, title, subtitle, icon, delay = 0, highlight = false }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract numeric part for animation
  const numericMatch = value.match(/^(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1]) : 0;
  const suffix = value.replace(/^\d+/, "");

  const animatedNum = useCounter(numericValue, 1.8, isInView);
  const displayValue = numericMatch ? `${animatedNum}${suffix}` : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`relative p-7 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
        highlight
          ? "border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 to-zinc-900/60 shadow-xl shadow-yellow-500/5"
          : "border-zinc-800/60 bg-zinc-900/40 hover:border-yellow-500/20"
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-500 text-zinc-950 text-xs font-bold rounded-full">
          Chiffre clé
        </div>
      )}
      <div className="flex items-start justify-between mb-5">
        <div
          className={`p-3 rounded-xl ${
            highlight ? "bg-yellow-500/20 text-yellow-400" : "bg-zinc-800/80 text-yellow-500"
          }`}
        >
          {icon}
        </div>
      </div>
      <div
        className={`font-cinzel text-4xl font-bold mb-2 ${
          highlight ? "text-yellow-400" : "text-white"
        }`}
      >
        {displayValue}
      </div>
      <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{subtitle}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    {
      value: "86%",
      title: "Consultent Google Maps",
      subtitle:
        "86% des Français utilisent Maps pour trouver un établissement de proximité. Source: Digitaleo",
      icon: <MapPin size={22} />,
    },
    {
      value: "8 sur 10",
      title: "Vérifient le site web",
      subtitle:
        "8 consommateurs sur 10 exigent de voir un site web avant de se rendre sur place. Source: Médiamétrie",
      icon: <Users size={22} />,
      highlight: true,
    },
    {
      value: "31%",
      title: "Fuient sans site",
      subtitle:
        "Près d'un tiers des clients refusent de consommer chez un pro s'il n'a pas de site web, le jugeant 'non professionnel'. Source: Forbes",
      icon: <TrendingDown size={22} />,
    },
    {
      value: "+37%",
      title: "De Chiffre d'Affaires",
      subtitle:
        "C'est l'augmentation moyenne des revenus pour un commerce qui ajoute la réservation en ligne 24/7. Source: Capterra",
      icon: <TrendingUp size={22} />,
    },
  ];

  return (
    <section id="roi" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      {/* BG glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-yellow-500/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-xs font-medium tracking-widest uppercase mb-5">
            <CalendarCheck size={12} />
            Machine à RDV & ROI
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Votre fiche Google Maps attire.{" "}
            <br className="hidden sm:block" />
            <span className="text-yellow-500">Votre site web convertit 24h/24.</span>
          </h2>
        </motion.div>

        {/* Texte explicatif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="text-zinc-400 text-lg leading-relaxed">
            Aujourd&apos;hui, vos futurs clients vous cherchent sur leur smartphone. Ils voient vos
            avis, mais exigent un site professionnel pour se rassurer avant de réserver. Sans site,
            ils filent chez le concurrent. Avec notre{" "}
            <span className="text-yellow-400 font-semibold">
              module de réservation (+75€)
            </span>
            , votre site agit comme un réceptionniste ouvert 24/7 : le client réserve en 3 clics,
            votre agenda Google se met à jour, et vous générez du chiffre d&apos;affaires{" "}
            <span className="text-white font-semibold">même quand le salon est fermé.</span>
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.title}
              {...stat}
              delay={0.1 * i + 0.2}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
