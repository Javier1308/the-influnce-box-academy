import { motion, type Variants } from 'framer-motion';
import { WHATSAPP_LINKS } from '../../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const SKILLS = [
  {
    icon: '/assets/b2b-training/b2b_skill_influencia_etica.png',
    lines: ['INFLUENCIA', 'ÉTICA'],
    size: 88,
  },
  {
    icon: '/assets/b2b-training/b2b_skill_comunicacion_persuasiva.png',
    lines: ['COMUNICACIÓN', 'PERSUASIVA'],
    size: 88,
  },
  {
    icon: '/assets/b2b-training/b2b_skill_psicologia_decision.png',
    lines: ['PSICOLOGÍA', 'DE LA DECISIÓN'],
    size: 88,
  },
  {
    icon: '/assets/b2b-training/b2b_skill_negociacion_impacto.svg',
    lines: ['NEGOCIACIÓN', 'E IMPACTO', 'INTERPERSONAL'],
    size: 70,
  },
  {
    icon: '/assets/b2b-training/b2b_skill_liderazgo_influencia.svg',
    lines: ['LIDERAZGO', 'E INFLUENCIA'],
    size: 70,
  },
];

export default function B2BTrainingSection() {
  return (
    <section
      className="py-20 px-6 bg-brand-darker"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        {/* Título principal */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          className="text-white font-black text-center leading-tight mb-14"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            maxWidth: '860px',
          }}
        >
          ¿Cómo potenciamos{' '}
          <span style={{ color: '#F2BE1B' }}>la influencia dentro de las organizaciones</span>?
        </motion.h2>

        {/* Caja principal */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="w-full"
          style={{
            border: '1px solid rgba(95,197,227,0.40)',
            borderRadius: '60px',
            padding: 'clamp(32px, 5vw, 56px) clamp(24px, 5vw, 56px)',
          }}
        >
          {/* Subtítulo dentro de caja */}
          <p
            className="text-center font-semibold mb-12"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
              color: '#D8D8D8',
            }}
          >
            Capacitamos equipos y profesionales en:
          </p>

          {/* Grid 5 columnas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 mb-12">
            {SKILLS.map((skill, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">

                {/* Separador vertical — solo entre columnas en desktop */}
                {i > 0 && (
                  <div
                    className="hidden lg:block absolute left-0 top-0 bottom-0 w-px"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)' }}
                  />
                )}

                {/* Ícono */}
                <img
                  src={skill.icon}
                  alt={skill.lines.join(' ')}
                  style={{ height: `${skill.size}px`, width: 'auto', objectFit: 'contain', marginBottom: '16px' }}
                />

                {/* Texto uppercase */}
                <p
                  className="font-bold leading-snug"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 'clamp(0.65rem, 1vw, 0.78rem)',
                    letterSpacing: '0.22em',
                    color: '#F4F4F4',
                    textTransform: 'uppercase',
                  }}
                >
                  {skill.lines.map((line, j) => (
                    <span key={j} className="block">{line}</span>
                  ))}
                </p>

                {/* Separador amarillo */}
                <div
                  className="mt-3"
                  style={{
                    width: '32px',
                    height: '2px',
                    backgroundColor: '#F2BE1B',
                    borderRadius: '2px',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Separador horizontal */}
          <div
            className="w-full mb-8"
            style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)' }}
          />

          {/* Fila escudo + texto */}
          <div className="flex items-center justify-center gap-5">
            <img
              src="/assets/b2b-training/b2b_skill_shield.svg"
              alt="Escudo"
              style={{ height: '52px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
            />
            <p
              className="whitespace-nowrap"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
                color: '#D8D8D8',
              }}
            >
              Aplicando principios respaldados por{' '}
              <span style={{ color: '#F2BE1B', fontWeight: 700 }}>ciencia conductual</span>
              {' '}y comportamiento humano.
            </p>
          </div>
        </motion.div>

        {/* Párrafo debajo de la caja */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.2 }}
          className="text-center mt-10"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
            color: '#D8D8D8',
            maxWidth: '900px',
            lineHeight: '1.75',
          }}
        >
          Desarrollamos <span style={{ color: '#F2BE1B', fontWeight: 700 }}>capacitaciones y experiencias formativas</span> adaptadas a los desafíos específicos de cada equipo, aplicando <span style={{ color: '#F2BE1B', fontWeight: 700 }}>principios de influencia social, persuasión y comportamiento humano.</span>
        </motion.p>

        {/* Botón CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: '56px' }}
        >
          <a
            href={WHATSAPP_LINKS.empresas}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-bold transition-all duration-200 hover:brightness-110"
            style={{
              backgroundColor: '#F2BE1B',
              color: '#050B14',
              borderRadius: '999px',
              width: 'clamp(280px, 45vw, 560px)',
              minHeight: '86px',
              fontSize: 'clamp(1rem, 1.8vw, 1.5rem)',
              fontFamily: "'Montserrat', sans-serif",
              textDecoration: 'none',
            }}
          >
            Solicitar información
          </a>
        </motion.div>

      </div>
    </section>
  );
}
