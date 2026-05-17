import { motion, type Variants } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number], delay: i * 0.12 },
  }),
};

function Block({
  index,
  icon: Icon,
  accentColor,
  label,
  highlight,
  children,
}: {
  index: number;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number; style?: React.CSSProperties }>;
  accentColor: string;
  label: string;
  highlight: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="relative rounded-2xl border border-white/10 p-8 md:p-10 overflow-hidden flex flex-col gap-6"
      style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
    >
      {/* Glow corner */}
      <div
        className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${accentColor}18 0%, transparent 70%)` }}
      />

      {/* Icon + label */}
      <div className="flex items-center gap-3 relative z-10">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${accentColor}18`, border: `1px solid ${accentColor}40` }}
        >
          <Icon size={20} className="transition-colors" strokeWidth={1.5} style={{ color: accentColor } as React.CSSProperties} />
        </div>
        <span
          className="text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: accentColor, fontFamily: "'Montserrat', sans-serif" }}
        >
          {label}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-white font-black text-3xl sm:text-4xl md:text-5xl leading-tight relative z-10"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Nuestra{' '}
        <span className="text-brand-yellow">{highlight}</span>
      </h3>

      {/* Divider */}
      <div className="flex items-center gap-2 relative z-10">
        <span className="w-10 h-0.5 bg-brand-yellow rounded-full" />
        <span className="w-3 h-0.5 bg-brand-yellow/30 rounded-full" />
      </div>

      {/* Text */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function MissionVisionSection() {
  return (
    <section
      id="vision-mision"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: '#0A0F1A' }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #5FC5E3 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto flex flex-col gap-8">

        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex items-center gap-4"
        >
          <span className="flex-shrink-0 h-px w-10 bg-brand-cyan/50" />
          <span
            className="text-brand-cyan text-xs font-bold uppercase tracking-[0.25em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Propósito institucional
          </span>
        </motion.div>

        {/* Two blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* Visión */}
          <Block
            index={1}
            icon={Target}
            accentColor="#F2BE1B"
            label="Nuestra Visión"
            highlight="Visión"
          >
            <p
              className="text-white/70 text-base md:text-lg leading-relaxed text-justify"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Ser reconocidos a nivel{' '}
              <span className="text-brand-yellow font-semibold">LATAM</span>{' '}
              como{' '}
              <span className="text-brand-yellow font-semibold">líderes</span>{' '}
              en la capacitación y asesoría en estrategias de{' '}
              <span className="text-brand-yellow font-semibold">persuasión e influencia</span>
              , ayudando a profesionales y equipos de trabajo a alcanzar su máximo potencial a través de tácticas de{' '}
              <span className="text-brand-yellow font-semibold">
                comunicación persuasivas, efectivas y totalmente éticas
              </span>
              .
            </p>
          </Block>

          {/* Misión */}
          <Block
            index={2}
            icon={Compass}
            accentColor="#5FC5E3"
            label="Nuestra Misión"
            highlight="Misión"
          >
            <p
              className="text-white/70 text-base md:text-lg leading-relaxed text-justify"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Proporcionar{' '}
              <span className="text-brand-yellow font-semibold">
                programas de capacitación y asesoramiento
              </span>{' '}
              de alta calidad basados en la{' '}
              <span className="text-brand-yellow font-semibold">ciencia del comportamiento</span>{' '}
              y la{' '}
              <span className="text-brand-yellow font-semibold">psicología de la persuasión</span>
              . Nuestro objetivo es empoderar a nuestros clientes con las habilidades necesarias para{' '}
              <span className="text-brand-yellow font-semibold">influenciar positivamente</span>{' '}
              en sus interacciones personales y profesionales, fomentando relaciones más fuertes,{' '}
              <span className="text-brand-yellow font-semibold">decisiones más acertadas</span>{' '}
              y un mayor éxito en sus respectivos campos.
            </p>
          </Block>

        </div>
      </div>
    </section>
  );
}
