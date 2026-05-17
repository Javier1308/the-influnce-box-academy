import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { B2B_PACKAGES, B2B_AGILE_FORMATS } from '../../../data/content';

const easeOut = [0.25, 0.1, 0.25, 1.0] as [number, number, number, number];

const tierStyles = {
  diamond: {
    border: 'border-brand-yellow/50',
    bg: 'bg-brand-yellow/5',
    badgeBg: 'bg-brand-yellow',
    badgeText: 'text-black',
    nameColor: 'text-brand-yellow',
    glow: 'shadow-[0_0_40px_rgba(242,190,27,0.12)]',
  },
  platinum: {
    border: 'border-white/20',
    bg: 'bg-white/[0.03]',
    badgeBg: 'bg-white/10',
    badgeText: 'text-white/70',
    nameColor: 'text-white',
    glow: '',
  },
  gold: {
    border: 'border-white/20',
    bg: 'bg-white/[0.03]',
    badgeBg: 'bg-white/10',
    badgeText: 'text-white/70',
    nameColor: 'text-white',
    glow: '',
  },
};

export default function PackagesB2B() {
  return (
    <section id="paquetes" className="bg-brand-darker py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-12"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-3">
            Mastery de <span className="text-brand-yellow">Persuasión</span>
          </h2>
          <p className="text-white/55 text-sm max-w-xl mx-auto">
            Elige el paquete que mejor se adapte a los objetivos de tu equipo.
          </p>
        </motion.div>

        {/* 3 cards de paquetes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {B2B_PACKAGES.map((pkg, i) => {
            const styles = tierStyles[pkg.id as keyof typeof tierStyles];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
                className={`relative rounded-2xl border ${styles.border} ${styles.bg} ${styles.glow} p-6 flex flex-col gap-4`}
              >
                {/* Badge recomendado */}
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                      ⭐ Recomendado
                    </span>
                  </div>
                )}

                {/* Header paquete */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-3xl">{pkg.gem}</span>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Paquete</p>
                    <h3 className={`font-black text-2xl ${styles.nameColor}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Tipo */}
                <span
                  className="inline-block border border-brand-cyan/40 text-brand-cyan text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm w-fit"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {pkg.type}
                </span>

                {/* Descripción */}
                <p className="text-white/60 text-xs leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {pkg.description}
                </p>

                {/* Sesiones */}
                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                  <div className="text-center">
                    <p className="text-brand-yellow font-black text-xl leading-none">{pkg.sessions}</p>
                    <p className="text-white/40 text-[9px] uppercase tracking-wider mt-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>sesiones</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <p className="text-white font-bold text-sm leading-none">{pkg.sessionDuration}</p>
                    <p className="text-white/40 text-[9px] uppercase tracking-wider mt-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>por sesión</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <p className="text-white/70 font-semibold text-sm leading-none">{pkg.totalHours}</p>
                    <p className="text-white/40 text-[9px] uppercase tracking-wider mt-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>aprendizaje</p>
                  </div>
                </div>

                {/* Incluye */}
                <div className="flex flex-col gap-2">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                      <p className="text-white/65 text-xs leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item}</p>
                    </div>
                  ))}
                </div>

                {/* Precio */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-white/35 text-xs line-through mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    S/ {pkg.regularPrice.toLocaleString('es-PE')}.00
                  </p>
                  <p className="text-white font-black text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    S/ {pkg.discountedPrice.toLocaleString('es-PE')}<span className="text-sm font-normal text-white/40">.00</span>
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={pkg.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-bold text-sm px-6 py-3 rounded-full hover:bg-brand-yellow/90 transition-colors w-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Solicitar este paquete
                </a>
              </motion.div>
            );
          })}
        </div>


        {/* Formatos ágiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h3
            className="text-center font-bold text-xl sm:text-2xl text-white mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Formatos ágiles para <span className="text-brand-yellow">agendas intensas</span>
          </h3>
          <p className="text-center text-white/45 text-xs mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Opciones más cortas para equipos con poco tiempo disponible
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {B2B_AGILE_FORMATS.map((fmt, i) => (
              <motion.div
                key={fmt.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:border-brand-yellow/30 transition-colors"
              >
                <div className="text-4xl flex-shrink-0">{fmt.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{fmt.name}</p>
                  <p className="text-brand-cyan text-xs font-semibold mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{fmt.subtitle}</p>
                  <p className="text-white/50 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>{fmt.description}</p>
                  <p className="text-white/40 text-[10px] mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {fmt.sessions} sesión{fmt.sessions > 1 ? 'es' : ''} × {fmt.sessionDuration}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-brand-yellow font-black text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    S/ {fmt.price.toLocaleString('es-PE')}
                  </p>
                  <a
                    href={fmt.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-[10px] font-bold text-brand-yellow border border-brand-yellow/40 rounded-full px-3 py-1 hover:bg-brand-yellow/10 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Solicitar →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
