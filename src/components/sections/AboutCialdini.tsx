import { motion, type Variants } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { CIALDINI, IMAGE_URLS } from '../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutCialdini() {
  return (
    <section className="bg-brand-darker py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <img
              src={IMAGE_URLS.cialdini}
              alt="Dr. Robert Cialdini — El Padrino de la Influencia"
              className="w-full rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(242,190,27,0.1)]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15 }}
          >
            <span className="inline-block bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 text-xs font-semibold font-inter px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              {CIALDINI.subtitle}
            </span>

            <SectionTitle
              title={CIALDINI.title}
              subtitle={CIALDINI.description}
            />

            <div className="mt-6">
              <p className="text-white/60 text-xs font-inter uppercase tracking-wider mb-3">
                Respaldado por líderes como:
              </p>
              <div className="flex flex-wrap gap-2">
                {CIALDINI.endorsedBy.map((name) => (
                  <span
                    key={name}
                    className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/80 text-xs font-inter px-3 py-1.5 rounded-full"
                  >
                    <Star size={10} className="text-brand-yellow" fill="#F2BE1B" />
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                href="https://cialdini.com/about-us"
                external
                className="gap-2"
              >
                Conocer más sobre Cialdini
                <ExternalLink size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
