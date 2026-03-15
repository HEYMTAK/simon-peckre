"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background gradient & glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-yellow-500/5 blur-[120px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-yellow-600/4 blur-[100px]" />
        {/* Grid subtle */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,164,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,94,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/8 text-yellow-400 text-sm font-medium tracking-wide mb-8"
        >
          <Sparkles size={14} />
          Pour instituts de beauté & salons de massage
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8"
        >
          Transformez vos visiteurs{" "}
          <span className="relative">
            <span className="text-yellow-500">Google Maps</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500/40 origin-left"
            />
          </span>{" "}
          en clients fidèles.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Vos avis Google attirent l&apos;attention. Votre site web premium déclenche la
          réservation. Offrez à vos futurs clients l&apos;accueil digital qu&apos;ils méritent,{" "}
          <span className="text-yellow-400 font-semibold">à partir de 350€.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#tarifs"
            className="group flex items-center gap-2.5 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold text-base rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-0.5"
          >
            Découvrir l&apos;offre
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#portfolio"
            className="group flex items-center gap-2.5 px-8 py-4 border border-zinc-700 hover:border-yellow-500/60 text-zinc-300 hover:text-yellow-400 font-semibold text-base rounded-xl transition-all duration-200 hover:bg-yellow-500/5"
          >
            <Play size={16} className="fill-current" />
            Voir mes réalisations
          </a>
        </motion.div>

        {/* Proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-3 text-zinc-500 text-sm"
        >
          {[
            "✓ Livré en 7 jours",
            "✓ Mobile-first",
            "✓ Hébergement inclus 1 an",
            "✓ Référencement local optimisé",
          ].map((item) => (
            <span key={item} className="whitespace-nowrap">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-yellow-500/60 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
