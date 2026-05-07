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
    title: 'Principios que cambian decisiones',
    desc: 'Dominio de los 7 principios de Influencia que te darán una mejora significativa en tu nivel de éxito en cada interacción donde buscas influir para alcanzar un resultado favorable.',
  },
  {
    title: 'Certificado de nuestra Academia',
    desc: 'Al completar el programa recibirás el certificado oficial de The Influence Box Academy, que acredita tu dominio de los 7 principios de influencia y persuasión ética.',
  },
];

export default function Benefits() {
  return (
    <section className="bg-brand-darker py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionTitle
              title="Lo que obtienes con nosotros"
              highlight="obtienes"
              centeredMobileOnly
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
                    <h3 className="text-white font-semibold font-inter text-base mb-1 text-justify">
                      {b.title}
                    </h3>
                    <p className="text-white/65 font-inter text-sm leading-relaxed text-justify">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex md:block justify-center">
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
