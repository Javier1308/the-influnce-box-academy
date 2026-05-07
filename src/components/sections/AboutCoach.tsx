import { motion } from 'framer-motion';
import { COACH, SOCIAL_LINKS, IMAGE_URLS } from '../../data/content';

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const easeOut = [0.25, 0.1, 0.25, 1.0] as [number, number, number, number];

export default function AboutCoach() {
  return (
    <section id="coach" className="bg-brand-darker py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left: text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {/* Section heading inside the text column */}
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
              Conoce más <span className="text-brand-yellow">Sobre el coach</span>
            </h2>

            {/* Badge */}
            <span className="inline-block bg-brand-yellow text-gray-900 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-5">
              {COACH.role}
            </span>

            {/* Name */}
            <h3 className="font-bold text-2xl sm:text-3xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {COACH.name}
            </h3>

            {/* Bio */}
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 text-justify">
              Actualmente Freddy Flórez es Coach certificado en persuasión e influencia social ética acreditado por el instituto CIALDINI, de EEUU, es el primero en Perú que adquiere las dos certificaciones e insignias: cómo Facilitador Profesional y como Coach. Es comunicador, diseñador gráfico publicitario de profesión, y ha incursionado durante muchos años en actuación, lo que le ha permitido cultivar habilidades clave para el liderazgo, como la comunicación efectiva, la empatía y la capacidad de influir, inspirar y motivar a las personas.
              <br /><br />
              Asimismo tiene más de 26 años de experiencia en servicio al cliente, y 14 de ellos dedicados al mundo corporativo comercial (ventas) y de formación de equipos, actualmente está cursando una 2da carrera profesional de marketing y gestión comercial porque cree que un verdadero profesional nunca deja de aprender.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-brand-yellow pl-5 mb-8">
              <p className="text-white/90 text-sm md:text-base italic leading-relaxed font-medium">
                "{COACH.quote}"
              </p>
            </blockquote>

            {/* LinkedIn button only */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow text-gray-900 font-bold text-sm px-5 py-3 rounded-lg hover:bg-brand-yellow/90 transition-all"
            >
              <LinkedinIcon size={18} />
              Seguir en LinkedIn
            </a>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
          >
            <img
              src={IMAGE_URLS.coachBio}
              alt="Freddy Flórez — Founder & Coach Certificado The Influence Box Academy"
              className="w-full rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(242,190,27,0.1)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
