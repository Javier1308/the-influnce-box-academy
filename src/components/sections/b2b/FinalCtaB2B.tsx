import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { WHATSAPP_LINKS } from '../../../data/content';

const easeOut = [0.25, 0.1, 0.25, 1.0] as [number, number, number, number];

export default function FinalCtaB2B() {
  return (
    <section className="bg-brand-darker py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative rounded-3xl border border-brand-cyan/25 bg-gradient-to-br from-brand-cyan/5 to-transparent p-8 md:p-12 text-center overflow-hidden"
        >
          {/* Glow cyan de fondo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(95,197,227,0.07) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <span
              className="inline-flex items-center gap-2 border border-brand-cyan/40 text-brand-cyan text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-cyan/10"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Para empresas y equipos
            </span>

            <h2
              className="font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight max-w-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Agenda una llamada y recibe la{' '}
              <span className="text-brand-yellow">propuesta personalizada</span>{' '}
              para tu empresa
            </h2>

            <p className="text-white/55 text-sm max-w-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Sin costo ni compromiso. Diseñamos el programa a la medida de tu equipo.
            </p>

            <Button variant="primary" href={WHATSAPP_LINKS.empresas} external className="text-base px-8 py-4">
              Hablar con Freddy →
            </Button>

            <p className="text-white/25 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              50% adelantado + 50% 1 día antes de la primera sesión · Se emite RHE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
