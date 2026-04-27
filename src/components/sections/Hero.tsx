import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Play, ChevronDown, X } from 'lucide-react';
import Button from '../ui/Button';
import { HERO, WHATSAPP_LINKS } from '../../data/content';
import FreddyImg from '../../assets/images/Freddy.jpeg';
import { useCountdownOffer } from '../../hooks/useCountdownOffer';

// Pega aquí la URL del video cuando la tengas (YouTube embed o similar)
// Ejemplo YouTube: 'https://www.youtube.com/embed/TU_ID_AQUI'
const VIDEO_URL = '';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const offer = useCountdownOffer();

  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: '256px 256px',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(242,190,27,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-10">

        {/* ── 1. TÍTULO PRINCIPAL ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-4"
        >
          {/* Oferta con contador */}
          {offer.active ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex flex-col items-center gap-2 mb-6"
            >
              <div className="inline-flex items-center gap-2 border border-brand-yellow text-brand-yellow text-xs font-semibold font-inter px-4 py-1.5 rounded-full bg-brand-yellow/10">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                ¡Oferta de bienvenida — 40% de descuento total!
              </div>
              <div className="flex items-center gap-1 text-white/80 font-inter text-xs">
                <span>Expira en</span>
                <span className="font-mono font-bold text-brand-yellow text-sm tabular-nums">
                  {offer.hours}:{offer.minutes}:{offer.seconds}
                </span>
                <span>· Usa el código de la guía + 20% extra ahora</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 border border-white/20 text-white/50 text-xs font-inter px-4 py-1.5 rounded-full mb-6"
            >
              Descarga la guía y obtén tu 20% de descuento permanente
            </motion.div>
          )}

          <h1
            className="font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Aprenderás a aplicar la{' '}
            <span className="text-brand-yellow">psicología de la persuasión</span>{' '}
            para que tu voz impacte, generes{' '}
            <span className="text-brand-yellow">confianza al hablar</span>{' '}
            y logres una efectividad superior al{' '}
            <span className="text-brand-yellow">cerrar negocios.</span>
          </h1>
        </motion.div>

        {/* ── 2. SUBTÍTULO ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-center text-white/65 font-inter text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        {/* ── 3. VIDEO (ancho completo) ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(242,190,27,0.08)] bg-black mb-6"
          style={{ aspectRatio: '16/9' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand-darker to-brand-dark">
            <button
              onClick={() => setVideoOpen(true)}
              aria-label="Ver video de 8 minutos"
              className="group flex items-center justify-center w-24 h-24 rounded-full bg-brand-yellow hover:scale-110 transition-transform shadow-[0_0_40px_rgba(242,190,27,0.5)] mb-4"
            >
              <Play className="text-black ml-1" size={36} fill="black" />
            </button>
            <p className="text-white/50 font-inter text-sm tracking-wide">
              ▶ &nbsp;Video de 8 minutos — ¿Por qué The Influence Box Academy?
            </p>
          </div>
        </motion.div>

        {/* ── 4. BOTONES CTA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row justify-center items-start gap-8 mb-16"
        >
          <Button variant="primary" href={WHATSAPP_LINKS.workshop} external className="text-base px-8 py-4">
            {HERO.cta}
          </Button>
          {/* Reemplaza null por: import GuiaPDF from '../../assets/guia-de-bolsillo.pdf' y pasa GuiaPDF aquí */}
          <div className="flex flex-col items-center gap-3">
            <a
              href={undefined}
              download="Guia-de-Bolsillo-The-Influence-Box-Academy.pdf"
              className="inline-flex items-center justify-center gap-2 border border-brand-yellow text-brand-yellow font-semibold font-inter text-base px-8 py-4 rounded-full hover:bg-brand-yellow/10 transition-colors opacity-50 cursor-not-allowed"
              aria-disabled="true"
            >
              Descarga tu guía de bolsillo
            </a>
            <span className="text-brand-cyan text-xs font-inter font-medium tracking-wide">
              — Regalo para ti, sin costo —
            </span>
          </div>
        </motion.div>

        {/* ── 5. BIENVENIDA + FOTO FREDDY ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 border-t border-white/10 pt-14 pb-10"
        >
          {/* Texto de bienvenida */}
          <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start gap-2 text-brand-cyan text-xs font-semibold font-inter tracking-widest uppercase">
              <span className="block w-8 h-px bg-brand-cyan" />
              Bienvenido/a
            </div>
            <p
              className="text-white/90 text-2xl md:text-3xl lg:text-4xl leading-relaxed"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "{HERO.welcome}"
            </p>
          </div>

          {/* Foto Freddy */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-yellow/30 to-brand-cyan/20 blur-lg" />
              <img
                src={FreddyImg}
                alt="Freddy Flórez — Founder & Coach Certificado"
                className="relative w-80 md:w-96 lg:w-[28rem] rounded-2xl object-cover border border-white/10 shadow-[0_0_40px_rgba(242,190,27,0.15)]"
              />
              {/* Name card */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10">
                <p className="text-white font-semibold font-inter text-sm leading-tight">Freddy Flórez</p>
                <p className="text-brand-yellow text-xs font-inter mt-0.5">Founder & Coach Certificado · Instituto Cialdini</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <div className="flex justify-center pb-6">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/25"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>

      </div>

      {/* Modal de video */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
                aria-label="Cerrar video"
              >
                <X size={28} />
              </button>

              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black" style={{ aspectRatio: '16/9' }}>
                {VIDEO_URL ? (
                  <iframe
                    src={VIDEO_URL}
                    title="Video The Influence Box Academy"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-darker to-brand-dark">
                    <Play className="text-brand-yellow/30" size={48} />
                    <p className="text-white/40 font-inter text-sm">Video próximamente</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
