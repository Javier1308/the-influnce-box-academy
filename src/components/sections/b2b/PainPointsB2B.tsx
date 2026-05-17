import { motion, type Variants } from 'framer-motion';
import { WHATSAPP_LINKS } from '../../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

type TextSegment = { text: string; highlight?: boolean };

type PainPoint = {
  icon: string;
  segments: TextSegment[];
};

const PAIN_POINTS: PainPoint[] = [
  {
    icon: '/assets/b2b/b2b_icon_objections.png',
    segments: [
      { text: 'Tu equipo presenta propuestas sólidas... Pero enfrenta ' },
      { text: 'objeciones, retrasos o falta de cierre.', highlight: true },
    ],
  },
  {
    icon: '/assets/b2b/b2b_icon_brain.png',
    segments: [
      { text: 'Tus ejecutivos explican bien los beneficios... pero no logran ' },
      { text: 'conectar emocionalmente', highlight: true },
      { text: ' ni ' },
      { text: 'movilizar acción.', highlight: true },
    ],
  },
  {
    icon: '/assets/b2b/b2b_icon_shield.png',
    segments: [
      { text: 'Las reuniones avanzan, pero las ideas estratégicas no generan suficiente ' },
      { text: 'buy-in interno.', highlight: true },
    ],
  },
  {
    icon: '/assets/b2b/b2b_icon_lock.png',
    segments: [
      { text: 'Percibes ' },
      { text: 'resistencia', highlight: true },
      { text: ' al cambio, poca ' },
      { text: 'alineación', highlight: true },
      { text: ' o baja ' },
      { text: 'adopción', highlight: true },
      { text: ' de iniciativas clave dentro del equipo.' },
    ],
  },
  {
    icon: '/assets/b2b/b2b_icon_communication.png',
    segments: [
      { text: 'Saben que la comunicación impacta ' },
      { text: 'ventas y liderazgo', highlight: true },
      { text: '... pero sus palabras aún no logran conectar.' },
    ],
  },
  {
    icon: '/assets/b2b/b2b_icon_chart.png',
    segments: [
      { text: 'Mejorar la influencia de tu organización podría ' },
      { text: 'elevar resultados', highlight: true },
      { text: ', pero aún no existe una metodología clara para lograrlo.' },
    ],
  },
];

export default function PainPointsB2B() {
  return (
    <section
      className="w-full py-20 md:py-28 px-4 md:px-8"
      style={{ backgroundColor: '#050B14' }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        {/* Pill superior */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          className="w-full flex justify-center mb-12"
        >
          <div
            className="flex items-center justify-center text-center px-8 py-5 w-full"
            style={{
              maxWidth: '1100px',
              borderRadius: '999px',
              backgroundColor: '#2B3138',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <span
              className="text-brand-yellow font-bold uppercase tracking-[0.18em]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 2vw, 26px)' }}
            >
              ¿Te resulta familiar esta situación en tu equipo?
            </span>
          </div>
        </motion.div>

        {/* Título */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="text-white text-center font-bold leading-snug mb-16"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)',
            maxWidth: '860px',
          }}
        >
          Tu equipo tiene experiencia.<br />
          Pero sus conversaciones no siempre<br />
          generan{' '}
          <span style={{ color: '#F2BE1B' }}>decisiones</span>
          {', '}
          <span style={{ color: '#F2BE1B' }}>compromiso</span>
          {' o '}
          <span style={{ color: '#F2BE1B' }}>conversión.</span>
        </motion.h2>

        {/* Grid de pain points */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 w-full"
          style={{ gap: '44px 80px' }}
        >
          {PAIN_POINTS.map((point, i) => (
            <div key={i} className="flex items-center gap-5">

              {/* Círculo X amarillo */}
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#F2BE1B',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2L16 16M16 2L2 16" stroke="#050B14" strokeWidth="2.8" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Ícono circular */}
              <div className="flex-shrink-0">
                <img
                  src={point.icon}
                  alt=""
                  style={{ width: '74px', height: '74px', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Texto */}
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(0.9rem, 1.4vw, 1.2rem)',
                  lineHeight: '1.5',
                  color: '#D8D8D8',
                  maxWidth: '520px',
                }}
              >
                {point.segments.map((seg, j) =>
                  seg.highlight
                    ? <span key={j} style={{ color: '#F2BE1B', fontWeight: 700 }}>{seg.text}</span>
                    : <span key={j}>{seg.text}</span>
                )}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Botón CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: '60px' }}
        >
          <a
            href={WHATSAPP_LINKS.empresas}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-center font-bold transition-all duration-200 hover:brightness-110"
            style={{
              backgroundColor: '#F2BE1B',
              color: '#050B14',
              borderRadius: '999px',
              width: 'clamp(320px, 50vw, 560px)',
              minHeight: '80px',
              fontSize: 'clamp(1rem, 1.8vw, 1.5rem)',
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: '1.3',
              padding: '0 40px',
              textDecoration: 'none',
            }}
          >
            Quiero potenciar la influencia<br />de mi equipo
          </a>
        </motion.div>

      </div>
    </section>
  );
}
