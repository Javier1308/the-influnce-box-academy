import { motion, type Variants } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import LogoImg from '../../assets/images/LogoTIBAHorizontal.png';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
};

const HIGHLIGHTS = [
  'capacitaciones, asesorías, workshops y entrenamientos',
  'psicología de la persuasión e influencia social',
];

export default function AboutInfluenceBoxSection() {
  return (
    <section
      id="quienes-somos"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: '#050B14' }}
    >
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #F2BE1B 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Yellow glow top-left */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(242,190,27,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: title + logo + text ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6"
          >
            {/* Title */}
            <div>
              <h2
                className="font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ¿<span className="text-brand-yellow">Quiénes</span> Somos?
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-10 h-0.5 bg-brand-yellow rounded-full" />
                <span className="w-3 h-0.5 bg-brand-yellow/40 rounded-full" />
              </div>
            </div>

            {/* Logo */}
            <img
              src={LogoImg}
              alt="The Influence Box Academy"
              className="h-12 w-auto object-contain self-start"
            />

            {/* Main paragraph */}
            <p
              className="text-white/75 text-lg md:text-xl leading-relaxed text-justify"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Somos una empresa que brinda servicios de{' '}
              <span className="text-brand-yellow font-semibold">
                capacitaciones, asesorías, workshops y entrenamientos
              </span>{' '}
              sobre la{' '}
              <span className="text-brand-yellow font-semibold">
                psicología de la persuasión e influencia social
              </span>
              , diseñados para que profesionales y equipos logren comunicar con mayor impacto y cerrar más oportunidades.
            </p>

            {/* Closing paragraph */}
            <p
              className="text-white/60 text-base md:text-lg leading-relaxed text-justify"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Nos dirigimos a profesionales y equipos de trabajo que quieran aplicar estrategias y métodos psicológicos debidamente sustentados para{' '}
              <span className="text-white font-medium">persuadir más efectivamente</span>{' '}
              y elevar su tasa de éxito.
            </p>
          </motion.div>

          {/* ── RIGHT: Cialdini accreditation card ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Accreditation card */}
            <div
              className="relative rounded-2xl border border-brand-yellow/25 p-8 overflow-hidden"
              style={{ backgroundColor: 'rgba(242,190,27,0.04)' }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(242,190,27,0.08) 0%, transparent 70%)' }}
              />

              <div className="relative z-10 flex flex-col gap-5">
                {/* Badge */}
                <span
                  className="inline-flex items-center gap-2 self-start border border-brand-cyan/40 text-brand-cyan text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-cyan/10"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <ShieldCheck size={14} />
                  Acreditación Internacional
                </span>

                {/* Headline */}
                <div style={{ fontFamily: "'Playfair Display', serif" }}>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Acreditados por
                  </p>
                  <h3 className="text-white font-bold text-3xl md:text-4xl leading-tight">
                    Instituto{' '}
                    <span className="text-brand-yellow">Cialdini</span>
                  </h3>
                </div>

                {/* Cialdini logo placeholder */}
                {/* Reemplaza este div por <img src={CialdiniLogo} ... /> cuando tengas el asset */}
                <div className="flex items-center gap-3 border border-white/10 rounded-xl px-5 py-4 bg-white/5 self-start">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-brand-yellow" />
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <p className="text-white font-bold text-sm leading-none">Cialdini Institute</p>
                    <p className="text-white/40 text-xs mt-0.5">Official Accreditation</p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-white/65 text-base leading-relaxed text-justify"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Somos{' '}
                  <span className="text-brand-yellow font-bold">únicos en Perú</span>{' '}
                  acreditados por el Instituto Cialdini —{' '}
                  <span className="text-white font-medium">
                    el más importante centro de aprendizaje en el mundo
                  </span>{' '}
                  en el campo de la persuasión.
                </p>

                {/* Stats row */}
                <div className="flex items-center gap-6 pt-2 border-t border-white/10">
                  {[
                    { value: '#1', label: 'en Perú' },
                    { value: '7', label: 'Principios Cialdini' },
                    { value: '10M+', label: 'libros vendidos' },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex flex-col" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      <span className="text-brand-yellow font-black text-xl leading-none">{value}</span>
                      <span className="text-white/40 text-[11px] mt-0.5 uppercase tracking-wide">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
