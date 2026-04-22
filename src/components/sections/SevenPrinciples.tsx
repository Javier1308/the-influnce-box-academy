import { motion, type Variants } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import PrincipleCard from '../ui/PrincipleCard';
import { PRINCIPLES } from '../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function SevenPrinciples() {
  return (
    <section id="principles" className="bg-brand-dark py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <SectionTitle
            title="Los 7 atajos para obtener un SÍ"
            highlight="SÍ"
            subtitle="Estos principios universales, descubiertos por el Dr. Robert Cialdini, son la base científica de toda comunicación persuasiva efectiva."
            centered
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PRINCIPLES.slice(0, 6).map((p, i) => (
            <PrincipleCard
              key={p.name}
              emoji={p.emoji}
              name={p.name}
              description={p.description}
              delay={i * 0.07}
            />
          ))}
        </div>

        {/* 7th card centered */}
        <div className="flex justify-center mt-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <PrincipleCard
              emoji={PRINCIPLES[6].emoji}
              name={PRINCIPLES[6].name}
              description={PRINCIPLES[6].description}
              delay={0.42}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
