"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, TrendingUp, Award } from "lucide-react";

const videos = [
  {
    src: "/videos/demo-salon1.mp4",
    label: "Institut de beauté — Paris 16e",
    tag: "Essentiel",
  },
  {
    src: "/videos/demo-salon2.mp4",
    label: "Salon de massage — Lyon Centre",
    tag: "Automatisé",
  },
  {
    src: "/videos/demo-salon3.mp4",
    label: "Spa urbain — Bordeaux",
    tag: "Automatisé",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-xs font-medium tracking-widest uppercase mb-5">
            <Award size={12} />
            Réalisations
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Un standing professionnel{" "}
            <span className="text-yellow-500">instantané.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Aux États-Unis,{" "}
            <span className="text-zinc-200 font-semibold">83% des salons</span>{" "}
            possèdent déjà un site web, car ils savent qu&apos;une entreprise sans site
            n&apos;est plus prise au sérieux{" "}
            <span className="text-zinc-500 text-sm">(Source: Forbes)</span>. En
            France, démarquez-vous immédiatement. Lorsqu&apos;un client hésite entre votre
            salon et celui d&apos;à côté sur Google Maps, c&apos;est la qualité de votre site web
            qui fait pencher la balance.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-3 gap-4 mb-14"
        >
          {[
            { icon: Globe, value: "83%", label: "Salons aux US ont un site" },
            { icon: TrendingUp, value: "7j", label: "Délai de livraison" },
            { icon: Award, value: "350€", label: "Tarif de départ" },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="text-center p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/40"
            >
              <Icon size={20} className="text-yellow-500 mx-auto mb-2" />
              <div className="font-cinzel text-2xl font-bold text-yellow-400">{value}</div>
              <div className="text-zinc-500 text-xs mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.2 }}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900 shadow-2xl hover:border-yellow-500/30 transition-all duration-300"
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-zinc-950/80 backdrop-blur-sm rounded-full text-yellow-400 text-xs font-semibold border border-yellow-500/20">
                {video.tag}
              </div>

              {/* Video */}
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">{video.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note placeholder videos */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-zinc-600 text-sm mt-8"
        >
          * Les vidéos de démonstration seront remplacées par vos vraies réalisations.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
