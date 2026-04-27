import { motion, type Variants } from 'framer-motion';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { WHATSAPP_LINKS, IMAGE_URLS } from '../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Certification() {
  return (
    <section className="bg-brand-darker py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="block h-px w-12 bg-brand-cyan/50" />
          <div className="flex items-center gap-2 text-brand-cyan font-semibold font-inter text-xs tracking-widest uppercase">
            <Sparkles size={14} />
            Bonus — Por si también lo quieres
          </div>
          <span className="block h-px w-12 bg-brand-cyan/50" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-brand-cyan/20 shadow-[0_0_60px_rgba(95,197,227,0.08)] bg-gradient-to-br from-brand-cyan/5 to-transparent p-8 md:p-12"
        >
          <div className="absolute top-4 right-4 border border-dashed border-brand-cyan/20 rounded-2xl inset-4 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                  <Award className="text-brand-yellow" size={24} />
                </div>
                <span className="text-brand-yellow font-semibold font-inter text-sm">
                  Certificación Oficial Cialdini
                </span>
              </div>

              <h2
                className="font-bold text-3xl md:text-4xl text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Conviértete en{' '}
                <span className="text-brand-yellow">Ethical Influence Practitioner</span>
              </h2>

              <p className="text-white/70 font-inter text-sm md:text-base leading-relaxed mb-6">
                La certificación internacional del Instituto Cialdini es reconocida por las principales empresas del mundo. Demuestra que dominas la ciencia de la persuasión ética y estratégica.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Reconocida globalmente por el Instituto Cialdini (EEUU)',
                  'Credencial que diferencia a los mejores profesionales',
                  'Acceso a la red mundial de Certified Practitioners',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ShieldCheck className="text-brand-cyan mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-white/80 text-sm font-inter">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/50 font-inter text-xs italic mb-6">
                Por si deseas dar un paso más y acreditar formalmente lo que ya dominas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href={WHATSAPP_LINKS.workshop} external>
                  Quiero mi certificación
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={IMAGE_URLS.certification}
                alt="Certificación Ethical Influence Practitioner — Instituto Cialdini"
                className="w-full max-w-sm rounded-2xl border border-brand-yellow/20 shadow-[0_0_40px_rgba(242,190,27,0.15)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
