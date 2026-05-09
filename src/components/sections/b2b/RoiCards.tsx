import { motion } from 'framer-motion';
import { B2B_ROI } from '../../../data/content';

const easeOut = [0.25, 0.1, 0.25, 1.0] as [number, number, number, number];

export default function RoiCards() {
  return (
    <section className="bg-brand-darker py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-10"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-3">
            ¿Cómo se <span className="text-brand-yellow">beneficiará</span> tu empresa?
          </h2>
          <p className="text-white/55 text-sm max-w-xl mx-auto">
            Resultados medibles que impactan directamente en el crecimiento comercial y la cultura del equipo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {B2B_ROI.map((roi, i) => (
            <motion.div
              key={roi.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(242,190,27,0.4)', scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{roi.icon}</span>
                <div className="text-right">
                  <p className="text-brand-yellow font-black text-3xl leading-none">{roi.stat}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>{roi.statLabel}</p>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {roi.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {roi.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
