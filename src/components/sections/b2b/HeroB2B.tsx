import { motion, type Variants } from 'framer-motion';
import Button from '../../ui/Button';
import { WHATSAPP_LINKS } from '../../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
};

const PILLS = [
  { label: 'Principios Psicológicos', icon: '/PrincipiosPsicologicosIcon.svg' },
  { label: 'Comportamiento Humano', icon: null },
  { label: 'Persuasión Ética', icon: null },
];

export default function HeroB2B() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Glow radial sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(242,190,27,0.06) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 lg:px-16 pt-14 md:pt-20 pb-14 md:pb-20 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <span
            className="inline-flex items-center text-center border border-brand-cyan/40 text-brand-cyan text-xs font-semibold uppercase tracking-[0.2em] px-5 py-2 rounded-full bg-brand-cyan/5 mb-8 mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Capacitaciones y Asesorías Corporativas
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="font-black text-white leading-tight mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            maxWidth: '820px',
          }}
        >
          Potenciamos la habilidad <span className="text-brand-yellow">más demandada por</span> las empresas:<br />
          <span className="text-brand-yellow">La capacidad de influir</span> de sus equipos.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-white text-sm md:text-base leading-relaxed mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif", maxWidth: '640px' }}
        >
          Basado en ciencia conductual para fortalecer la comunicación, el liderazgo y la influencia estratégica de
          equipos y profesionales, incrementando conversión en ventas, negociación y toma de decisiones.
        </motion.p>

        {/* Pills de temas */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {PILLS.map((pill) => (
            <div
              key={pill.label}
              className="flex items-center overflow-hidden border border-white/20 text-white/70 text-xs font-medium rounded-full bg-white/5"
              style={{ fontFamily: "'Montserrat', sans-serif", paddingRight: '16px', paddingTop: '0', paddingBottom: '0', paddingLeft: pill.icon ? '0' : '16px' }}
            >
              {pill.icon && (
                <img
                  src={pill.icon}
                  alt=""
                  className="h-8 w-auto object-contain flex-shrink-0"
                />
              )}
              <span className={pill.icon ? 'pl-2 py-2' : 'py-2'}>
                {pill.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Button variant="primary" href={WHATSAPP_LINKS.empresas} external className="text-sm md:text-base px-8 py-4">
            Solicitar propuesta para mi empresa
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
