import { motion, type Variants } from 'framer-motion';
import { Users, TrendingUp, Megaphone, MessageCircle, ShoppingBag, Heart } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const areas = [
  { icon: <Users size={24} />, label: 'Liderazgo', desc: 'Inspira y motiva equipos con autoridad genuina.' },
  { icon: <TrendingUp size={24} />, label: 'Ventas', desc: 'Cierra más negocios con estrategias probadas.' },
  { icon: <Megaphone size={24} />, label: 'Marketing', desc: 'Crea mensajes que conectan y convierten.' },
  { icon: <MessageCircle size={24} />, label: 'Comunicación', desc: 'Habla con impacto en cualquier entorno.' },
  { icon: <ShoppingBag size={24} />, label: 'Compras', desc: 'Negocia mejores condiciones y precios.' },
  { icon: <Heart size={24} />, label: 'RRHH', desc: 'Atrae, retén y desarrolla el mejor talento.' },
];

export default function WhyInfluence() {
  return (
    <section id="why" className="bg-brand-darker py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionTitle
              title="¿Por qué aprender sobre Persuasión e Influencia social?"
              highlight="Persuasión e Influencia social"
              subtitle="La capacidad de influir es la habilidad #1 más demandada por empresas y líderes del mundo. No importa tu industria — quien influye, lidera."
              justify
            />
            <p className="text-white/70 font-inter text-sm md:text-base leading-relaxed mt-4 text-justify">
              La ciencia de la persuasión del Dr. Robert Cialdini lleva más de 40 años de investigación. Sus principios están detrás de las decisiones más importantes que se toman en el mundo empresarial, político y personal.
            </p>
            <p className="text-white/70 font-inter text-sm md:text-base leading-relaxed mt-3 text-justify">
              En The Influence Box Academy te enseñamos a aplicarlos de forma{' '}
              <span className="text-brand-yellow font-semibold">ética, estratégica y efectiva</span>.
            </p>
          </motion.div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-1 h-px bg-brand-yellow/60" />
              <span className="text-brand-yellow text-xs font-semibold font-inter uppercase tracking-widest whitespace-nowrap">
                Impulsar el éxito en otras áreas de negocio
              </span>
              <span className="flex-1 h-px bg-brand-yellow/60" />
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, i) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as [number,number,number,number], delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-brand-yellow/40 transition-colors group"
              >
                <div className="text-brand-yellow mb-3 group-hover:scale-110 transition-transform inline-block">
                  {area.icon}
                </div>
                <h3 className="text-white font-semibold font-inter text-sm mb-1">
                  {area.label}
                </h3>
                <p className="text-white/60 text-xs font-inter leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
