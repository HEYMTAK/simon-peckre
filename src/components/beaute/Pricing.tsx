"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, Star, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "L'Essentiel",
    price: "350€",
    badge: null,
    icon: Star,
    description: "La vitrine premium qui vous démarque immédiatement.",
    features: [
      "Site Vitrine Premium",
      "Standing professionnel instantané",
      "Optimisé Google Maps & SEO local",
      "Mobile-first (100% responsive)",
      "Formulaire de contact",
      "Hébergement inclus 1 an",
      "Livraison en 7 jours",
    ],
    cta: "Choisir L'Essentiel",
    href: "#contact",
    highlighted: false,
  },
  {
    name: "L'Automatisé",
    price: "425€",
    badge: "Le plus populaire",
    icon: Zap,
    description:
      "Votre site + module de réservation relié à votre agenda. Idéal pour capter les clients Google Maps la nuit et ne plus être interrompu en plein massage.",
    features: [
      "Tout L'Essentiel inclus",
      "Module de réservation en ligne",
      "Synchronisation agenda Google",
      "Réservation en 3 clics",
      "Génère du CA même salon fermé",
      "Rappels automatiques par email",
      "Support prioritaire 30 jours",
    ],
    cta: "Choisir L'Automatisé",
    href: "#contact",
    highlighted: true,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tarifs" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/4 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-xs font-medium tracking-widest uppercase mb-5">
            Tarifs transparents
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple. Clair.{" "}
            <span className="text-yellow-500">Sans surprise.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Un paiement unique. Aucun abonnement caché. Votre site vous appartient.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-yellow-500/50 bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-2xl shadow-yellow-500/10"
                    : "border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-zinc-950 text-xs font-bold rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl ${
                      plan.highlighted
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-white">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span
                    className={`font-cinzel text-5xl font-bold ${
                      plan.highlighted ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-zinc-500 text-sm ml-2">paiement unique</span>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-7">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-zinc-800/80 mb-7" />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-yellow-400" : "text-zinc-500"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-zinc-300" : "text-zinc-400"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.href}
                  className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-yellow-500 hover:bg-yellow-400 text-zinc-950 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Garantie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Besoin d&apos;un devis personnalisé ?{" "}
            <a
              href="#contact"
              className="text-yellow-500 hover:text-yellow-400 underline underline-offset-4 transition-colors"
            >
              Contactez-moi directement
            </a>
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
