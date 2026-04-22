import { motion, type Variants } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { WHATSAPP_LINKS, IMAGE_URLS } from '../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const benefits = [
  {
    title: 'Ciencia aplicada al mundo real',
    desc: 'No teorías vacías. Cada principio viene respaldado por décadas de investigación científica y miles de estudios de campo con resultados comprobados.',
  },
  {
    title: 'Metodología 100% práctica',
    desc: 'Aprenderás haciendo. Cada sesión incluye ejercicios, role plays y casos de estudio reales que puedes aplicar inmediatamente.',
  },
  {
    title: 'Certificación Internacional',
    desc: 'Al completar el programa podrás acceder a la certificación oficial del Instituto Cialdini, reconocida globalmente como "Ethical Influence Practitioner".',
  },
];

export default function Benefits() {
  return (
    <section className="bg-brand-dark py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionTitle
              title="Lo que obtienes con nosotros"
              highlight="obtienes"
            />
            <div className="flex flex-col gap-6 mt-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-4"
                >
                  <CheckCircle className="text-brand-yellow mt-1 flex-shrink-0" size={22} />
                  <div>
                    <h3 className="text-white font-semibold font-inter text-base mb-1">
                      {b.title}
                    </h3>
                    <p className="text-white/65 font-inter text-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="primary" href={WHATSAPP_LINKS.workshop} external>
                Quiero empezar ahora
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={IMAGE_URLS.benefits}
              alt="Beneficios del programa de influencia"
              className="w-full rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(242,190,27,0.08)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
