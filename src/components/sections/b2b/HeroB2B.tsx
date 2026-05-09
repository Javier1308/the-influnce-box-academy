import { motion, type Variants } from 'framer-motion';
import Button from '../../ui/Button';
import { WHATSAPP_LINKS, B2B_ROI } from '../../../data/content';
import FreddyImg from '../../../assets/images/Freddy.jpeg';
import Badge1 from '../../../assets/images/Badge1.png';
import Badge2 from '../../../assets/images/Badge2.png';
import Badge3 from '../../../assets/images/Badge3.png';
import CienciaIcons from '../../../assets/images/Ciencia_Icons.png';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
};

export default function HeroB2B() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Watermark ciencia */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `url(${CienciaIcons})`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) brightness(1.5)',
        }}
      />
      {/* Glow radial amarillo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(242,190,27,0.08) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pt-10 md:pt-16 pb-10 md:pb-14">

        {/* Badge corporativo */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 border border-brand-cyan/50 text-brand-cyan text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-cyan/10"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Capacitación Corporativa · Psicología Persuasiva Aplicada
          </span>
        </motion.div>

        {/* Título */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-center mb-6">
          <h1
            className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Desarrollamos el{' '}
            <span className="text-brand-yellow">activo más poderoso</span>{' '}
            de tu empresa:{' '}
            <span className="text-brand-yellow">la capacidad de influir.</span>
          </h1>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-white/65 text-base md:text-lg text-center max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Capacitación y asesoría corporativa basada en la ciencia del comportamiento para que tus equipos influyan, convenzan y cierren más.
        </motion.p>

        {/* 3 ROI badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {B2B_ROI.map((roi) => (
            <div
              key={roi.title}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="text-brand-yellow font-black text-base">{roi.stat}</span>
              <span className="text-white/70 text-xs">{roi.statLabel}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="flex justify-center mb-12"
        >
          <Button variant="primary" href={WHATSAPP_LINKS.empresas} external className="text-base px-8 py-4">
            Solicitar propuesta para mi empresa
          </Button>
        </motion.div>

        {/* Firma Freddy */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="border-t border-white/10 pt-8 flex justify-center"
        >
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 bg-black/40 rounded-2xl px-4 sm:px-6 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.5)] w-full sm:w-auto justify-center">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-brand-yellow/40 to-brand-cyan/20 blur" />
              <img
                src={FreddyImg}
                alt="Freddy Flórez — Founder & Coach Certificado"
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-2 border-white/20"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-white font-bold text-base sm:text-lg leading-tight">Freddy Flórez</p>
              <p className="text-white/50 text-[11px] uppercase tracking-wider">Founder – Coach de Persuasión</p>
              <p className="text-brand-cyan text-[11px] mt-0.5">Profesional Certificado de Influencia Social · Cialdini Institute</p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2 sm:mt-0 sm:ml-2">
              <img src={Badge1} alt="Certificación Cialdini 1" className="w-14 h-14 sm:w-24 sm:h-24 object-contain" />
              <img src={Badge2} alt="Certificación Cialdini 2" className="w-14 h-14 sm:w-24 sm:h-24 object-contain" />
              <img src={Badge3} alt="Certificación Cialdini 3" className="w-14 h-14 sm:w-24 sm:h-24 object-contain" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
