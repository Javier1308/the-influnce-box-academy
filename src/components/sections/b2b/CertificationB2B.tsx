import { motion, type Variants } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import Button from '../../ui/Button';
import { WHATSAPP_LINKS, IMAGE_URLS } from '../../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CertificationB2B() {
  return (
    <section className="bg-brand-darker py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Top heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <p className="text-white text-xl md:text-3xl font-bold leading-snug">
            Con <span className="text-brand-yellow font-semibold">The Influence Box Academy</span> tu equipo puede obtener una <span className="text-brand-yellow">Certificación Internacional.</span>
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-brand-cyan/20 shadow-[0_0_60px_rgba(95,197,227,0.08)] bg-gradient-to-br from-brand-cyan/5 to-transparent p-4 sm:p-8 md:p-10"
        >
          <div className="absolute top-4 right-4 border border-dashed border-brand-cyan/20 rounded-2xl inset-4 pointer-events-none hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">

            {/* Left: text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                  <Award className="text-brand-yellow" size={20} />
                </div>
                <span className="text-brand-yellow font-semibold font-inter text-xs">
                  Certificación Oficial Cialdini
                </span>
              </div>

              <h2
                className="font-bold text-xl sm:text-2xl md:text-3xl text-white mb-3 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Conviértete en{' '}
                <span className="text-brand-yellow">Ethical Influence Practitioner</span>
              </h2>

              <p className="text-white/70 font-inter text-xs md:text-sm leading-relaxed mb-3 text-justify">
                A través de <span className="text-brand-yellow font-semibold">The Influence Box Academy</span> tu equipo puede aprender y obtener la certificación internacional más completa en persuasión ética, formada por el <span className="font-semibold text-white">Dr. Robert Cialdini</span> con una mejora económica sobre la inversión en la{' '}<a href="https://cialdini.com/certified-practitioner" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-brand-yellow transition-colors underline underline-offset-2">CERTIFICACIÓN OFICIAL</a>, la cual en su página alcanza los $1500.00.
              </p>

              <p className="text-white/70 font-inter text-xs md:text-sm leading-relaxed mb-5 text-justify">
                La certificación internacional del Instituto Cialdini es reconocida por las principales empresas del mundo. Demuestra que tu equipo domina la ciencia de la persuasión ética y estratégica.
              </p>

              <div className="flex flex-col gap-2 mb-5">
                {[
                  'Reconocida globalmente por el Instituto Cialdini (EEUU)',
                  'Credencial que diferencia a los mejores profesionales',
                  'Acceso a la red mundial de Certified Practitioners',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ShieldCheck className="text-brand-cyan mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-white/80 text-xs font-inter">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/50 font-inter text-xs italic mb-5">
                Para equipos que desean dar un paso más y acreditar formalmente lo que ya dominan.
              </p>

              <div className="lg:flex lg:justify-start flex justify-center">
                <Button variant="primary" href={WHATSAPP_LINKS.workshop} external>
                  Certificado Internacional
                </Button>
              </div>
            </div>

            {/* Right: image — larger */}
            <div className="flex justify-center">
              <img
                src={IMAGE_URLS.certification}
                alt="Certificación Ethical Influence Practitioner — Instituto Cialdini"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl border border-brand-yellow/20 shadow-[0_0_40px_rgba(242,190,27,0.15)]"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
