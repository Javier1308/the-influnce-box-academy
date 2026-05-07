import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { SERVICES, IMAGE_URLS } from '../../data/content';
import CafeIcon from '../../assets/images/Cafe2D.png';
import CafeYPersuasionIMG from '../../assets/images/CafeYPersuasionIMG.png';
import ArquitecturaIMG from '../../assets/images/ArquitecturaDeInfluenciaIMG.png';

const easeOut = [0.25, 0.1, 0.25, 1.0] as [number, number, number, number];

const serviceImages = [ArquitecturaIMG, IMAGE_URLS.workshops, CafeYPersuasionIMG];

const serviceHighlights = [
  {
    label: 'Diferencia Clave',
    text: 'Entenderás como opera la mente humana para tomar decisiones, sabrás como aplicar la psicología de la persuasión, sus principios, en ventas, negociaciones y conversaciones clave, además pondrás en práctica lo aprendido.',
  },
  {
    label: 'Diferencia Clave',
    text: 'Aquí no hay teoría genérica; todo lo que aprendes lo aplicamos sobre tus retos reales, con seguimiento personalizado para que avances más rápido que en cualquier capacitación grupal.',
  },
  {
    label: 'Ventaja Competitiva en ventas',
    text: 'Dominar la psicología de la persuasión a lo largo de todo el proceso comercial desde el primer contacto hasta el cierre te permite entender mejor cómo piensa, siente y decide el cliente, haciendo cada interacción más estratégica, influyente y efectiva.',
  },
];

const serviceContactTexts = [
  'Contáctanos y transforma cada conversación en una oportunidad de influencia y resultados.',
  'Contáctanos y empieza a convertir conversaciones en oportunidades',
  'Conversemos y empieza a convertir interacciones en oportunidades reales.',
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-darker py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-14"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-3">
            Nuestros <span className="text-brand-yellow">Servicios</span>
          </h2>
          <p className="text-white/60 text-base">
            Elige el formato que mejor se adapte a ti, tu equipo o tu empresa.
          </p>
        </motion.div>

        {/* Servicios — uno por fila */}
        <div className="flex flex-col gap-6">
          {SERVICES.map((service, i) => {
            const imageLeft = i % 2 !== 0; // coaching=right, workshops=left, breakfast=right
            const highlight = serviceHighlights[i];
            const contactText = serviceContactTexts[i];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: easeOut, delay: 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-4`}
              >

                {/* Card de imagen */}
                <div className={`relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[280px] lg:min-h-[420px] border border-white/10 ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={serviceImages[i]}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Card de contenido */}
                <div
                  className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 md:p-9 flex flex-col gap-4 ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {/* Badge */}
                  <span className="inline-block border border-brand-cyan/50 text-brand-cyan text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm w-fit">
                    {service.badge}
                  </span>

                  {/* Título + subtítulo */}
                  <div>
                    <h3 className="font-bold text-2xl sm:text-3xl text-white leading-tight mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-brand-yellow text-sm font-semibold">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Descripción + bullets */}
                  <div className="flex flex-col gap-3">
                    <p className="text-white/70 text-sm leading-relaxed text-justify">
                      {service.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      {service.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <CheckCircle size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                          <p className="text-white/70 text-xs leading-relaxed">{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight box */}
                  <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl p-4 flex flex-col gap-2">
                    <p className="text-brand-yellow text-xs font-bold uppercase tracking-wider">
                      {highlight.label}
                    </p>
                    <p className="text-white/80 text-xs leading-relaxed text-justify">
                      {highlight.text}
                    </p>
                  </div>

                  {/* Contacto + CTA */}
                  <div className="flex flex-col gap-3 pt-1 mt-auto items-center lg:items-start">
                    <p className="text-white/50 text-xs text-center lg:text-left">{contactText}</p>
                    <a
                      href={service.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-bold text-sm px-6 py-3 rounded-full hover:bg-brand-yellow/90 transition-colors w-fit"
                    >
                      {i === 2 && <img src={CafeIcon} alt="" className="w-6 h-6 object-contain flex-shrink-0" />}
                      {service.cta}
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
