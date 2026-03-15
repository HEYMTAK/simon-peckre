"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Mail, Phone, ArrowRight, Send, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to email service (Resend, Formspree, etc.)
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-xs font-medium tracking-widest uppercase mb-5">
            Contact
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Prêt à dominer{" "}
            <span className="text-yellow-500">votre zone géographique ?</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Choisissez le mode de contact qui vous convient. Je réponds sous 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Options de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Option 1 : Calendly */}
            <a
              href="https://calendly.com/simonpeckre"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/8 to-zinc-900/40 hover:border-yellow-500/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-500/10"
            >
              <div className="p-3.5 rounded-xl bg-yellow-500/20 text-yellow-400 flex-shrink-0">
                <Calendar size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-1">
                  Réserver un créneau gratuit
                </h3>
                <p className="text-zinc-400 text-sm">
                  30 min pour discuter de votre projet. Agenda en ligne, direct.
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-yellow-500/60 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all"
              />
            </a>

            {/* Option 2 : Appel direct */}
            <a
              href="tel:+33602592843"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-3.5 rounded-xl bg-zinc-800 text-zinc-400 group-hover:bg-yellow-500/20 group-hover:text-yellow-400 transition-all flex-shrink-0">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-1">
                  Appelez-moi directement
                </h3>
                <p className="text-zinc-400 text-sm group-hover:text-yellow-400/80 transition-colors">
                  06 02 59 28 43
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-zinc-700 group-hover:text-yellow-500/60 group-hover:translate-x-1 transition-all"
              />
            </a>

            {/* Option 3 : Email */}
            <a
              href="mailto:contact@simonpeckre.fr"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-3.5 rounded-xl bg-zinc-800 text-zinc-400 group-hover:bg-yellow-500/20 group-hover:text-yellow-400 transition-all flex-shrink-0">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-1">
                  Par email
                </h3>
                <p className="text-zinc-400 text-sm">
                  contact@simonpeckre.fr
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-zinc-700 group-hover:text-yellow-500/60 group-hover:translate-x-1 transition-all"
              />
            </a>

            {/* Zone */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/30 border border-zinc-800/40">
              <MapPin size={16} className="text-yellow-500/60 flex-shrink-0" />
              <p className="text-zinc-500 text-sm">
                Basé en France · Intervention partout en France (100% à distance)
              </p>
            </div>
          </motion.div>

          {/* Right — Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                  <Send size={28} className="text-yellow-400" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                  Message envoyé !
                </h3>
                <p className="text-zinc-400 text-sm">
                  Je vous réponds dans les 24 heures. À très bientôt !
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-cinzel text-xl font-bold text-white mb-6">
                  Décrivez votre projet
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-zinc-400 text-xs font-medium tracking-wide mb-1.5 block">
                        Nom / Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Marie Dupont"
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-yellow-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 text-xs font-medium tracking-wide mb-1.5 block">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="06 XX XX XX XX"
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-yellow-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-zinc-400 text-xs font-medium tracking-wide mb-1.5 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="votre@email.fr"
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-yellow-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-zinc-400 text-xs font-medium tracking-wide mb-1.5 block">
                      Votre projet *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Décrivez votre salon, vos besoins, vos questions..."
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-yellow-500/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2.5 w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/25 mt-2"
                  >
                    Envoyer ma demande
                    <Send
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-800/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-cinzel text-sm text-zinc-500">
            <span className="text-white font-bold">Simon Peckre.</span> Webdesigner
            indépendant
          </p>
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Simon Peckre — Tous droits réservés
          </p>
        </div>
      </div>
    </section>
  );
}
