import { motion } from 'framer-motion';
import { Gift, Download, Star } from 'lucide-react';
import BitacoraImg from '../../assets/images/Bitacora.png';
import LogoBitacoraImg from '../../assets/images/LogoBitacora.svg';
import LogoImg from '../../assets/images/LogoTIBAHorizontal.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
};

function GiftHeader() {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Gift label */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full border border-brand-yellow/40 flex items-center justify-center flex-shrink-0">
          <Gift size={26} className="text-brand-yellow" />
        </div>
        <span
          className="text-brand-yellow font-bold text-base tracking-[0.25em] uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Cortesía de la Casa
        </span>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center gap-3">
        <span className="flex-1 h-px bg-brand-yellow/40" />
        <span
          className="text-brand-yellow text-base tracking-widest uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Por tu visita
        </span>
        <span className="flex-1 h-px bg-brand-yellow/40" />
      </div>
    </div>
  );
}

function DownloadCTA({ href }: { href: string }) {
  return (
    <a
      href={href}
      download="Bitacora-7-Principios-The-Influence-Box-Academy.png"
      className="group inline-flex items-center gap-5 bg-brand-yellow rounded-full px-6 py-4 hover:bg-brand-yellow/90 hover:scale-[1.02] transition-all duration-200 w-full max-w-sm"
    >
      {/* Download icon circle */}
      <div className="w-14 h-14 rounded-full bg-black/20 flex items-center justify-center flex-shrink-0">
        <Download size={26} className="text-black" />
      </div>
      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span
          className="text-black font-black text-xl tracking-wider uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Descárgala Ahora
        </span>
        <span
          className="text-black/60 text-sm font-medium"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          y tenla Contigo a la mano
        </span>
      </div>
    </a>
  );
}

function BitacoraHeadline() {
  return (
    <div className="flex flex-col gap-1 my-8">
      <span
        className="text-brand-yellow text-xl font-bold uppercase tracking-[0.3em]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Sin Costo
      </span>
      <div style={{ fontFamily: "'Playfair Display', serif" }}>
        <p className="text-white font-bold text-5xl sm:text-6xl leading-tight">
          La Bitácora de
        </p>
        <p className="text-brand-cyan font-bold text-5xl sm:text-6xl leading-tight">
          The Influence Box
        </p>
        <p className="text-brand-cyan font-bold text-5xl sm:text-6xl leading-tight">
          Academy
        </p>
      </div>
      {/* Accent line */}
      <div className="flex items-center gap-2 mt-3">
        <span className="w-10 h-0.5 bg-brand-yellow rounded-full" />
        <span className="w-3 h-0.5 bg-brand-yellow/40 rounded-full" />
      </div>
    </div>
  );
}

function SectionFooterBadge() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8 pt-6 border-t border-white/10">
      {/* Logo */}
      <img
        src={LogoImg}
        alt="The Influence Box Academy"
        className="h-14 w-auto object-contain"
      />

      {/* Badge */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border border-brand-yellow/50 flex items-center justify-center flex-shrink-0">
          <Star size={20} className="text-brand-yellow" fill="#F2BE1B" />
        </div>
        <div
          className="flex flex-col leading-tight"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="text-white text-sm font-semibold tracking-wide uppercase">
            Conocimiento que{' '}
            <span className="text-brand-yellow">Inspira</span>
          </span>
          <span className="text-white text-sm font-semibold tracking-wide uppercase">
            Herramientas que{' '}
            <span className="text-brand-yellow">Transforman</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BitacoraDownloadSection() {
  return (
    <section style={{ backgroundColor: '#040B16' }} className="py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* ── LEFT: text + CTA ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col"
          >
            <GiftHeader />
            <DownloadCTA href={BitacoraImg} />
            <BitacoraHeadline />
            <SectionFooterBadge />
          </motion.div>

          {/* ── RIGHT: bitácora image ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15 }}
            className="w-full h-full min-h-[400px] overflow-hidden rounded-xl"
          >
            <img
              src={LogoBitacoraImg}
              alt="Bitácora de los 7 Principios de Influencia — The Influence Box Academy"
              className="w-full h-full object-cover object-center scale-[0.936]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
