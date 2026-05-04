import { motion, type Variants } from 'framer-motion';
import LinkedInLogo from '../../assets/images/LinkedInLearning.png';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const font = { fontFamily: "'Montserrat', sans-serif" };

const source = {
  logo: LinkedInLogo,
  logoBg: '#006ac4',
  logoAlt: 'LinkedIn Learning',
  source: 'LINKEDIN LEARNING',
  report: 'Top skills Companies need most',
  url: 'https://www.linkedin.com/business/learning/blog/learning-and-development/most-in-demand-skills-2020',
  timeLabel: 'En la',
  timeHighlight: 'Actualidad',
  skill: 'PERSUASIÓN',
  rank: 'TOP 3',
  rankDesc: ['de habilidades de poder', 'más demandadas por empresas'],
  note: 'Habilidad de poder indispensable en el entorno profesional actual',
  context: 'LinkedIn Learning analiza los datos de más de 900 millones de profesionales y miles de empresas globales para identificar las habilidades más demandadas en el mercado laboral actual.',
};

export default function LinkedInProof() {
  return (
    <section className="bg-brand-darker py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-10"
          style={font}
        >
          Otras fuentes que revelan la persuasión como una{' '}
          <span className="text-brand-yellow font-bold">habilidad clave</span>
        </motion.h2>

        {/* Card LinkedIn */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr]">

            {/* Logo */}
            <div
              className="flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10"
              style={{ backgroundColor: source.logoBg }}
            >
              <img
                src={source.logo}
                alt={source.logoAlt}
                className="w-48 h-48 object-contain rounded-xl"
              />
            </div>

            {/* Datos principales */}
            <div className="flex flex-col gap-3 p-6 border-b md:border-b-0 md:border-r border-white/10" style={font}>
              <div>
                <p className="text-brand-cyan text-xs font-bold uppercase tracking-wider">{source.source}</p>
                <p className="text-white/40 text-[11px] mt-0.5">· {source.report}</p>
              </div>

              <p className="text-white/70 text-sm font-bold">
                {source.timeLabel} <span className="text-brand-yellow">{source.timeHighlight}</span>...
              </p>

              <p className="text-white/50 text-[10px] uppercase tracking-widest">{source.skill}</p>

              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border-2 border-brand-yellow rounded-full px-4 py-1 w-fit hover:bg-brand-yellow/10 transition-colors"
              >
                <span className="text-brand-yellow font-black text-base">{source.rank}</span>
                <span className="text-brand-cyan text-sm">↗</span>
              </a>

              <div>
                {source.rankDesc.map(line => (
                  <p key={line} className="text-white/60 text-xs">{line}</p>
                ))}
              </div>

              <p className="text-white/40 text-[11px] leading-relaxed border-t border-white/10 pt-3">
                {source.note}
              </p>
            </div>

            {/* Contexto */}
            <div className="flex items-center p-6 md:p-8" style={font}>
              <p className="text-white/60 text-sm leading-relaxed text-justify">
                {source.context}
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
