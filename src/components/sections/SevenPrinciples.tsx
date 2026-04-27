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
    <section id="principles" className="bg-brand-darker py-16 px-4 md:px-8 lg:px-16">
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

        {/* First row: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRINCIPLES.slice(0, 4).map((p, i) => (
            <PrincipleCard
              key={p.name}

              name={p.name}
              description={p.description}
              delay={i * 0.07}
            />
          ))}
        </div>

        {/* Second row: 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 lg:mx-[12.5%]">
          {PRINCIPLES.slice(4).map((p, i) => (
            <PrincipleCard
              key={p.name}

              name={p.name}
              description={p.description}
              delay={0.28 + i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
