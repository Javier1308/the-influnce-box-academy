import { motion } from 'framer-motion';
import { WHATSAPP_LINKS } from '../../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number], delay: i * 0.08 },
  }),
};

type Segment = { text: string; highlight?: boolean };

type Item = {
  icon: string;
  segments: Segment[];
};

const ITEMS: Item[] = [
  {
    icon: '/assets/b2c-familiar/1.svg',
    segments: [
      { text: 'Tus ideas compiten por atención y ' },
      { text: 'se pierden', highlight: true },
      { text: ' en un mar de información.' },
    ],
  },
  {
    icon: '/assets/b2c-familiar/2.svg',
    segments: [
      { text: 'A veces sabes que tienes la razón, pero las ' },
      { text: 'decisiones se toman sin considerar', highlight: true },
      { text: ' tu opinión.' },
    ],
  },
  {
    icon: '/assets/b2c-familiar/3.svg',
    segments: [
      { text: 'Explicas, argumentas y presentas... pero ' },
      { text: 'no generas acción', highlight: true },
      { text: '.' },
    ],
  },
  {
    icon: '/assets/b2c-familiar/4.svg',
    segments: [
      { text: 'Sientes que tu mensaje no conecta emocionalmente y ' },
      { text: 'no deja huella', highlight: true },
      { text: '.' },
    ],
  },
  {
    icon: '/assets/b2c-familiar/5.svg',
    segments: [
      { text: 'En reuniones o conversaciones clave, sientes ' },
      { text: 'resistencia', highlight: true },
      { text: ', ' },
      { text: 'objeciones', highlight: true },
      { text: ' o indiferencia.' },
    ],
  },
  {
    icon: '/assets/b2c-familiar/6.svg',
    segments: [
      { text: 'Sabes que mejorar tu influencia abriría más ' },
      { text: 'oportunidades, ventas y liderazgo', highlight: true },
      { text: ', pero no sabes cómo lograrlo.' },
    ],
  },
];

function XCircle() {
  return (
    <div
      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
      style={{ backgroundColor: '#F2BE1B' }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <line x1="4" y1="4" x2="16" y2="16" stroke="#050B14" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="16" y1="4" x2="4" y2="16" stroke="#050B14" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function IconCircle({ src }: { src: string }) {
  return (
    <div className="flex-shrink-0 w-[90px] h-[90px] flex items-center justify-center">
      <img
        src={src}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function ProblemItem({ item, index }: { item: Item; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="flex items-center gap-4"
    >
      <XCircle />
      <IconCircle src={item.icon} />
      <p
        className="text-[#F4F4F4] text-xl md:text-[22px] leading-[1.45] max-w-[520px]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {item.segments.map((seg, i) =>
          seg.highlight
            ? <span key={i} className="text-brand-yellow font-semibold">{seg.text}</span>
            : <span key={i}>{seg.text}</span>
        )}
      </p>
    </motion.div>
  );
}

export default function B2CFamiliarSituationSection() {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: '#050B14' }}
    >
      <div className="max-w-[1350px] mx-auto flex flex-col items-center">

        {/* Pill superior */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="w-full max-w-[760px] flex items-center justify-center rounded-full mb-12 md:mb-16"
          style={{
            backgroundColor: '#2B3138',
            height: '78px',
          }}
        >
          <span
            className="text-brand-cyan font-bold text-2xl md:text-[30px] tracking-[0.18em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ¿Te resulta familiar esto?
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-white text-center text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-tight tracking-wide mb-16 md:mb-20 max-w-4xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tienes mucho que aportar, pero{' '}
          <span className="text-brand-yellow">no logras</span>{' '}
          <span className="text-brand-yellow">influir</span>{' '}
          como quisieras
        </motion.h2>

        {/* Grilla 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 w-full mb-16 md:mb-20">
          {ITEMS.map((item, i) => (
            <ProblemItem key={i} item={item} index={i + 2} />
          ))}
        </div>

        {/* Botón CTA */}
        <motion.div
          variants={fadeUp}
          custom={9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <a
            href={WHATSAPP_LINKS.workshop}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-full hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            style={{
              backgroundColor: '#F2BE1B',
              color: '#050B14',
              width: 'clamp(320px, 560px, 90vw)',
              height: '95px',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span className="font-bold text-[26px] leading-tight">Quiero elevar</span>
            <span className="font-bold text-[26px] leading-tight">mi nivel de Influencia</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
