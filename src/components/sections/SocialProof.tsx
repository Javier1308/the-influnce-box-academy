import { motion, type Variants } from 'framer-motion';
import WefLogo from '../../assets/images/WorldEconomicForum.png';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const font = { fontFamily: "'Montserrat', sans-serif" };

const sources = [
  {
    logo: WefLogo,
    logoBg: '#0044ba',
    logoAlt: 'World Economic Forum',
    source: 'WORLD ECONOMIC FORUM',
    report: 'Future of Jobs Report 2025',
    url: 'https://es.weforum.org/publications/the-future-of-jobs-report-2025/digest/',
    timeLabel: 'De cara al',
    timeHighlight: '2030',
    skill: 'INFLUENCIA SOCIAL',
    rank: 'TOP 5',
    rankDesc: ['de habilidades humanas', 'de mayor demanda global'],
    note: 'La Influencia Social es una de las habilidades más demandadas a nivel global, y es una habilidad crítica e indispensable para el crecimiento sostenible de la Empresa.',
    context: 'El World Economic Forum reúne a los líderes políticos y empresariales más influyentes del mundo. Su informe Future of Jobs es la referencia global sobre las habilidades del futuro, elaborado con datos de más de 1,000 empresas en 55 economías.',
  },
];

export default function SocialProof() {
  return (
    <section className="bg-brand-dark py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-10"
          style={font}
        >
          Fuentes confiables{' '}
          <span className="text-brand-yellow font-bold">respaldan la importancia de la Influencia Social</span>
        </motion.h2>

        <div className="flex flex-col gap-6">
          {sources.map((s, i) => (
            <motion.div
              key={s.source}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-0">

                {/* Logo */}
                <div className="flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10" style={{ backgroundColor: s.logoBg }}>
                  <img src={s.logo} alt={s.logoAlt} className="w-48 h-48 object-contain rounded-xl" />
                </div>

                {/* Datos principales */}
                <div className="flex flex-col gap-4 p-8" style={font}>
                  <div>
                    <p className="text-brand-cyan text-2xl font-bold uppercase tracking-wider">{s.source}</p>
                    <p className="text-white/40 text-sm mt-1">· {s.report}</p>
                  </div>
                  <p className="text-white/70 text-lg font-bold">
                    {s.timeLabel} {s.timeHighlight}...
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed">
                    La <span className="text-brand-yellow font-bold text-2xl">Influencia Social</span> es una de las habilidades más demandadas a nivel global, y es una habilidad crítica e indispensable para el crecimiento sostenible de la Empresa.
                  </p>
                </div>

                {/* Botón derecha */}
                <div className="flex items-center justify-center px-8 border-t md:border-t-0 md:border-l border-white/10">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border-2 border-brand-yellow rounded-full px-6 py-3 hover:bg-brand-yellow/10 transition-colors whitespace-nowrap"
                  >
                    <span className="text-brand-yellow font-black text-2xl">{s.rank}</span>
                    <span className="text-brand-cyan text-lg">↗</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
