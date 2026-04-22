import { motion, type Variants } from 'framer-motion';
import { IMAGE_URLS } from '../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function SocialProof() {
  return (
    <section className="bg-brand-dark py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <img
                src={IMAGE_URLS.wef}
                alt="World Economic Forum"
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover border border-white/10"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-brand-cyan text-xs font-semibold font-inter uppercase tracking-wider">
                  World Economic Forum
                </span>
                <span className="text-white/40 text-xs font-inter">•</span>
                <span className="text-white/50 text-xs font-inter">Future of Jobs Report 2025</span>
              </div>

              <blockquote>
                <p
                  className="text-white text-xl md:text-2xl lg:text-3xl leading-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "La <span className="text-brand-yellow">influencia y persuasión</span> están entre las habilidades humanas de mayor crecimiento en demanda para los próximos años."
                </p>
                <footer className="text-white/60 font-inter text-sm">
                  — World Economic Forum, Future of Jobs Report 2025
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="absolute top-4 right-4 text-brand-yellow/20 text-8xl font-serif leading-none select-none">
            "
          </div>
        </motion.div>
      </div>
    </section>
  );
}
