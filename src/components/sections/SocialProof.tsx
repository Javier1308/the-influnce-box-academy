import { motion, type Variants } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { IMAGE_URLS } from '../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function SocialProof() {
  return (
    <section className="bg-brand-dark py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">

        {/* Respaldo científico label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="block h-px w-12 bg-brand-yellow/40" />
          <div className="flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-4 py-1.5">
            <ShieldCheck size={14} className="text-brand-yellow" />
            <span className="text-brand-yellow text-xs font-semibold font-inter uppercase tracking-widest">
              Respaldo científico real
            </span>
          </div>
          <span className="block h-px w-12 bg-brand-yellow/40" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-brand-yellow/20 bg-white/5 shadow-[0_0_40px_rgba(242,190,27,0.07)] p-5 sm:p-8 md:p-12"
        >
          {/* Watermark quote */}
          <div className="absolute top-4 right-6 text-brand-yellow/10 text-9xl font-serif leading-none select-none">"</div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <img
                src={IMAGE_URLS.wef}
                alt="World Economic Forum"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl object-cover border border-white/10"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-brand-cyan text-xs font-semibold font-inter uppercase tracking-wider">
                  World Economic Forum
                </span>
                <span className="text-white/40 text-xs">•</span>
                <span className="text-white/50 text-xs font-inter">Future of Jobs Report 2025</span>
              </div>

              <blockquote>
                <p
                  className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "La <span className="text-brand-yellow">influencia y persuasión</span> están entre las habilidades humanas de mayor crecimiento en demanda para los próximos años."
                </p>
                <footer className="text-white/50 font-inter text-sm">
                  — World Economic Forum, Future of Jobs Report 2025
                </footer>
              </blockquote>

              <p className="mt-5 text-white/50 font-inter text-xs leading-relaxed border-t border-white/10 pt-4">
                El <strong className="text-white/70">World Economic Forum</strong> es la principal organización internacional de cooperación público-privada del mundo. Su <em>Future of Jobs Report</em> es el informe de referencia global sobre el futuro del trabajo, elaborado con datos de más de 1,000 empresas en 55 economías. Esta investigación respalda directamente por qué lo que enseñamos en The Influence Box Academy no es una moda — es una necesidad profesional documentada.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
