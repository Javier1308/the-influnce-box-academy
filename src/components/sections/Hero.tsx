import { useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { HERO, WHATSAPP_LINKS } from '../../data/content';
import { useCountdownOffer } from '../../hooks/useCountdownOffer';
import FreddyImg from '../../assets/images/Freddy.jpeg';
import VideoThumbnail from '../../assets/images/Miniatura.jpeg';
import Badge1 from '../../assets/images/Badge1.png';
import Badge2 from '../../assets/images/Badge2.png';
import Badge3 from '../../assets/images/Badge3.png';

// Pega aquí la URL del video cuando la tengas (YouTube embed o similar)
// Ejemplo YouTube: 'https://www.youtube.com/embed/TU_ID_AQUI'
const VIDEO_URL = 'https://blue-access.net/TheInfluenceBox.mp4';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const offer = useCountdownOffer();

  const handlePlayVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    videoRef.current?.play();
  };

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

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pt-6 sm:pt-8 md:pt-14 pb-6 md:pb-10">

        {/* ── 1. TÍTULO PRINCIPAL ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-4"
        >
          <h1
            className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-0"
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

        {/* ── 2. CTA centrado ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="flex justify-center mt-8 mb-8"
        >
          <Button variant="primary" onClick={handlePlayVideo} className="text-base px-8 py-4">
            {HERO.cta}
          </Button>
        </motion.div>

        {/* ── 3. VIDEO (ancho completo) ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(242,190,27,0.08)] bg-black mb-6"
          style={{ aspectRatio: '16/9' }}
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            poster={VideoThumbnail}
            controls
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        {/* ── 4. OFERTA + DESCARGA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="flex flex-col items-center gap-4 mb-10"
        >
          {/* Badge oferta + countdown */}
          {offer.active && (
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-2 border border-brand-yellow text-brand-yellow text-xs font-semibold font-inter px-4 py-1.5 rounded-full bg-brand-yellow/10">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                ¡Oferta de bienvenida — 40% de descuento total!
              </div>
              <div className="flex items-center gap-1 text-white/80 font-inter text-sm">
                <span>Expira en</span>
                <span className="font-mono font-bold text-brand-yellow tabular-nums">
                  {offer.hours}:{offer.minutes}:{offer.seconds}
                </span>
              </div>
            </div>
          )}

          {/* Botón descarga + mensaje cyan */}
          <div className="flex flex-col items-center gap-2">
            <a
              href={undefined}
              download="Guia-de-Bolsillo-The-Influence-Box-Academy.pdf"
              className="inline-flex items-center justify-center gap-2 border border-brand-yellow text-brand-yellow font-semibold font-inter text-base px-8 py-4 rounded-full opacity-50 cursor-not-allowed"
              aria-disabled="true"
            >
              Descarga tu guía de bolsillo
            </a>
            <span className="text-brand-cyan text-xs font-inter font-medium tracking-wide">
              — Sin costo —
            </span>
          </div>
        </motion.div>

        {/* ── 5. BIENVENIDA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="border-t border-white/10 pt-10 md:pt-14 pb-6 md:pb-10"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {/* Label BIENVENIDOS con líneas */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="flex-1 max-w-[80px] h-px bg-brand-cyan/60" />
            <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase">
              Bienvenidos
            </span>
            <span className="flex-1 max-w-[80px] h-px bg-brand-cyan/60" />
          </div>

          {/* Cita centrada */}
          <p
            className="text-white/90 text-xl sm:text-2xl md:text-3xl leading-relaxed text-center max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "{HERO.welcome}"
          </p>

          {/* Firma: foto circular + nombre + badges — caja oscura */}
          <div className="flex justify-center">
            <div className="flex items-center gap-5 bg-black/40 rounded-2xl px-6 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              {/* Foto circular */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-brand-yellow/40 to-brand-cyan/20 blur" />
                <img
                  src={FreddyImg}
                  alt="Freddy Flórez — Founder & Coach Certificado"
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-2 border-white/20"
                />
              </div>

              {/* Nombre y rol */}
              <div className="flex flex-col gap-0.5">
                <p className="text-white font-bold text-base sm:text-lg leading-tight">
                  Freddy Flórez
                </p>
                <p className="text-white/50 text-[11px] uppercase tracking-wider">
                  Founder – Coach de Persuasión
                </p>
                <p className="text-brand-cyan text-[11px] mt-0.5">
                  Profesional Certificado de Influencia Social · Cialdini Institute
                </p>
              </div>

              {/* Badges de certificación */}
              <div className="hidden sm:flex items-center gap-3 ml-2">
                <img src={Badge1} alt="Certificación Cialdini 1" className="h-24 w-auto object-contain" />
                <img src={Badge2} alt="Certificación Cialdini 2" className="h-24 w-auto object-contain" />
                <img src={Badge3} alt="Certificación Cialdini 3" className="h-24 w-auto object-contain" />
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

    </section>
  );
}
