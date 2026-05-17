import { motion, type Variants } from 'framer-motion';
import { Target, Brain } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number], delay: i * 0.12 },
  }),
};

function Hi({ children }: { children: React.ReactNode }) {
  return <span className="text-brand-yellow font-semibold">{children}</span>;
}

export default function TargetAudienceMasterySection() {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: '#050B14' }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #5FC5E3 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Glow yellow bottom-left */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(242,190,27,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-14">

        {/* ── BLOQUE 1: A quién va dirigido ── */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative rounded-2xl border border-brand-yellow/15 p-8 md:p-12 overflow-hidden"
          style={{ backgroundColor: 'rgba(242,190,27,0.02)' }}
        >
          {/* Corner glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(242,190,27,0.07) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">

            {/* Icon column */}
            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(242,190,27,0.12)', border: '1px solid rgba(242,190,27,0.30)' }}
              >
                <Target size={26} className="text-brand-yellow" strokeWidth={1.5} />
              </div>
              <span
                className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Perfil del participante
              </span>
            </div>

            {/* Text column */}
            <div className="flex flex-col gap-5">
              <div>
                <h2
                  className="font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ¿A quién{' '}
                  <span className="text-brand-yellow">Va Dirigido</span>?
                </h2>
                <div className="flex items-center gap-2 mt-3">
                  <span className="w-10 h-0.5 bg-brand-yellow rounded-full" />
                  <span className="w-3 h-0.5 bg-brand-yellow/30 rounded-full" />
                </div>
              </div>

              <p
                className="text-white/70 text-base md:text-lg leading-relaxed text-justify"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Nuestras capacitaciones están diseñadas para{' '}
                <Hi>ejecutivos de alta dirección</Hi>,{' '}
                <Hi>profesionales y equipos en general</Hi>{' '}
                que buscan potenciar sus{' '}
                <Hi>habilidades directivas y blandas</Hi>, elevando su capacidad de{' '}
                <Hi>persuasión e influencia social</Hi>{' '}
                en <Hi>contextos reales de negocio</Hi>.
              </p>

              <p
                className="text-white/60 text-base md:text-lg leading-relaxed text-justify"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Es ideal para quienes presentan, negocian, venden o lideran iniciativas, y necesitan{' '}
                <Hi>comunicar con claridad e impacto</Hi>{' '}
                para <Hi>influir en decisiones</Hi> de manera consistente.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── BLOQUE 2: Qué dominarán ── */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative rounded-2xl border border-brand-cyan/15 p-8 md:p-12 overflow-hidden"
          style={{ backgroundColor: 'rgba(95,197,227,0.02)' }}
        >
          {/* Corner glow */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(95,197,227,0.06) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">

            {/* Icon column */}
            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(95,197,227,0.12)', border: '1px solid rgba(95,197,227,0.30)' }}
              >
                <Brain size={26} className="text-brand-cyan" strokeWidth={1.5} />
              </div>
              <span
                className="text-brand-yellow text-xs font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Resultados del programa
              </span>
            </div>

            {/* Text column */}
            <div className="flex flex-col gap-5">
              <div>
                <h2
                  className="font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ¿Qué{' '}
                  <span className="text-brand-yellow">Dominarán</span>?
                </h2>
                <div className="flex items-center gap-2 mt-3">
                  <span className="w-10 h-0.5 bg-brand-yellow rounded-full" />
                  <span className="w-3 h-0.5 bg-brand-yellow/30 rounded-full" />
                </div>
              </div>

              <p
                className="text-white/70 text-base md:text-lg leading-relaxed text-justify"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Los participantes aprenderán a aplicar los{' '}
                <Hi>7 principios universales de Influencia</Hi>{' '}
                del <Hi>Dr. Robert Cialdini</Hi>,{' '}
                <Hi>respaldados por ciencia</Hi>, para{' '}
                <Hi>influir éticamente</Hi>{' '}
                en <Hi>decisiones, negociaciones y conversaciones clave</Hi>.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
