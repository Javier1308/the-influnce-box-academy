import { motion, type Variants } from 'framer-motion';
import LinkedinLogo from '../../assets/images/LinkedinLogo.png';
import LearningLogo from '../../assets/images/LearningLogo.png';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const font = { fontFamily: "'Montserrat', sans-serif" };

const source = {
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
  note: 'La Persuasión es una de las habilidades más demandadas por empresas, y es una de las habilidades de poder más indispensables en el entorno profesional actual.',
  context: 'LinkedIn Learning analiza los datos de más de 900 millones de profesionales y miles de empresas globales para identificar las habilidades más demandadas en el mercado laboral actual.',
};

export default function LinkedInProof() {
  return (
    <section className="bg-brand-dark py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Card LinkedIn */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto]">

            {/* Logo */}
            <div className="flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10" style={{ backgroundColor: source.logoBg }}>
              <div className="flex flex-col items-center gap-1">
                <img src={LinkedinLogo} alt="LinkedIn" className="w-44 object-contain" />
                <img src={LearningLogo} alt="Learning" className="w-36 object-contain" />
              </div>
            </div>

            {/* Datos principales */}
            <div className="flex flex-col gap-4 p-8" style={font}>
              <div>
                <p className="text-brand-cyan text-2xl font-bold uppercase tracking-wider">{source.source}</p>
                <p className="text-white/40 text-sm mt-1">· {source.report}</p>
              </div>
              <p className="text-white/70 text-lg font-bold">
                {source.timeLabel} {source.timeHighlight}...
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                La <span className="text-brand-yellow font-bold text-2xl">Persuasión</span> es una de las habilidades más demandadas por empresas, y es una de las habilidades de poder más indispensables en el entorno profesional actual.
              </p>
            </div>

            {/* Botón derecha */}
            <div className="flex items-center justify-center px-8 border-t md:border-t-0 md:border-l border-white/10">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-brand-yellow rounded-full px-6 py-3 hover:bg-brand-yellow/10 transition-colors whitespace-nowrap"
              >
                <span className="text-brand-yellow font-black text-2xl">{source.rank}</span>
                <span className="text-brand-cyan text-lg">↗</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
