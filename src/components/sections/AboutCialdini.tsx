import { motion, type Variants } from 'framer-motion';
import { Star } from 'lucide-react';
import { CIALDINI, IMAGE_URLS } from '../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutCialdini() {
  return (
    <section className="bg-brand-darker py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Título superior — misma fuente/estilo que AboutCoach */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-10"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-white leading-tight">
            Te presentamos a la mente{' '}
            <span className="text-brand-yellow">detrás de la fuente</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-stretch">

          {/* Imagen Cialdini — ocupa todo el alto del texto */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="hidden lg:block"
          >
            <img
              src={IMAGE_URLS.cialdini}
              alt="Dr. Robert Cialdini — El Padrino de la Influencia"
              className="w-full h-full rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(242,190,27,0.1)] object-cover object-top"
            />
          </motion.div>

          {/* Imagen mobile — altura fija razonable */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:hidden"
          >
            <img
              src={IMAGE_URLS.cialdini}
              alt="Dr. Robert Cialdini — El Padrino de la Influencia"
              className="w-full max-h-72 rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(242,190,27,0.1)] object-cover object-top"
            />
          </motion.div>

          {/* Columna de texto */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="inline-block bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              {CIALDINI.subtitle}
            </span>

            {/* Título Dr. Cialdini — Playfair Display */}
            <h2
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {CIALDINI.title}
            </h2>

            <p className="text-white/75 text-sm leading-relaxed mb-5 text-justify">
              {CIALDINI.description}
            </p>

            {/* Label best seller */}
            <p className="text-white/50 text-[10px] uppercase tracking-widest mb-3">
              Su best seller es considerado y recomendado por líderes como:
            </p>

            <div className="flex flex-wrap gap-2 mb-6 lg:justify-start justify-center">
              {CIALDINI.endorsedBy.map((name) => (
                <span
                  key={name}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full"
                >
                  <Star size={10} className="text-brand-yellow" fill="#F2BE1B" />
                  {name}
                </span>
              ))}
            </div>

            {/* Apartado del libro — sin imagen */}
            <p className="text-white/60 text-xs leading-relaxed mb-3 lg:text-left text-center">
              Considerado como el mejor libro de negocios de todos los tiempos. De acuerdo al Sitio Financiero:
            </p>
            <div className="lg:flex lg:justify-start flex justify-center">
              <a
                href="https://www.thewaystowealth.com/make-money/best-business-books/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-brand-yellow/60 text-brand-yellow text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-brand-yellow/10 transition-colors"
              >
                "The Ways to Wealth" ↗
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
