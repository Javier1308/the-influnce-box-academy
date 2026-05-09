import { motion } from 'framer-motion';
import { B2B_DIFFERENTIATORS } from '../../../data/content';

const easeOut = [0.25, 0.1, 0.25, 1.0] as [number, number, number, number];

export default function Differentiators() {
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
            3 principales <span className="text-brand-yellow">Diferenciadores</span>
          </h2>
          <p className="text-white/55 text-sm max-w-xl mx-auto">
            Lo que nos distingue de cualquier otra capacitación en el mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {B2B_DIFFERENTIATORS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(242,190,27,0.4)' }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 transition-colors group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform inline-block">{d.icon}</div>
              <h3
                className="text-white font-bold text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {d.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {d.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
