import { motion } from 'framer-motion';
import { B2B_CURRICULUM } from '../../../data/content';

const easeOut = [0.25, 0.1, 0.25, 1.0] as [number, number, number, number];

export default function CurriculumB2B() {
  return (
    <section className="bg-brand-dark py-10 md:py-16 px-4 md:px-8 lg:px-16">
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
            ¿Qué aprenderá <span className="text-brand-yellow">tu equipo?</span>
          </h2>
          <p className="text-white/55 text-sm max-w-xl mx-auto">
            8 sesiones diseñadas para transformar la forma en que tu equipo se comunica, negocia y lidera.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {B2B_CURRICULUM.slice(0, 4).map((item, i) => (
            <motion.div
              key={item.session}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.07 }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(242,190,27,0.5)' }}
              className={`bg-white/5 border rounded-2xl p-4 flex flex-col gap-3 transition-colors ${
                item.exclusiveDiamond ? 'border-brand-yellow/30' : 'border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className="w-8 h-8 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow font-black text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.session}
                </span>
                {item.exclusiveDiamond && (
                  <span
                    className="text-[9px] font-bold text-brand-yellow border border-brand-yellow/40 rounded-full px-2 py-0.5 uppercase tracking-wider"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    💎 Diamond
                  </span>
                )}
              </div>
              <h4 className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.title}
              </h4>
              <p className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {B2B_CURRICULUM.slice(4).map((item, i) => (
            <motion.div
              key={item.session}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.28 + i * 0.07 }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(242,190,27,0.5)' }}
              className={`bg-white/5 border rounded-2xl p-4 flex flex-col gap-3 transition-colors ${
                item.exclusiveDiamond ? 'border-brand-yellow/30' : 'border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className="w-8 h-8 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow font-black text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.session}
                </span>
                {item.exclusiveDiamond && (
                  <span
                    className="text-[9px] font-bold text-brand-yellow border border-brand-yellow/40 rounded-full px-2 py-0.5 uppercase tracking-wider"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    💎 Diamond
                  </span>
                )}
              </div>
              <h4 className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.title}
              </h4>
              <p className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
