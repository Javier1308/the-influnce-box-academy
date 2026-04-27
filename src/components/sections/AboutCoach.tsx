import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { COACH, WHATSAPP_LINKS, SOCIAL_LINKS, IMAGE_URLS } from '../../data/content';

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
    <section id="coach" className="bg-brand-dark py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="inline-block bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 text-xs font-semibold font-inter px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              {COACH.role}
            </span>

            <h2
              className="font-bold text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {COACH.name}
            </h2>

            <p className="text-white/70 font-inter text-sm md:text-base leading-relaxed mb-6">
              {COACH.description}
            </p>

            <blockquote className="border-l-4 border-brand-yellow pl-5 mb-8">
              <p
                className="text-white/90 text-base md:text-lg italic leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "{COACH.quote}"
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                href={SOCIAL_LINKS.linkedin}
                external
                className="gap-2"
              >
                <LinkedinIcon size={18} />
                Seguir en LinkedIn
              </Button>
              <Button
                variant="primary"
                href={WHATSAPP_LINKS.empresas}
                external
              >
                Contactar para Empresas
              </Button>
            </div>
          </motion.div>

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
