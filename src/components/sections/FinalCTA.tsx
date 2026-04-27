import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { WHATSAPP_LINKS, SOCIAL_LINKS } from '../../data/content';

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

export default function FinalCTA() {
  return (
    <section className="bg-brand-dark py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
              className="text-base px-8 py-4"
            >
              Contactar para Empresas
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
