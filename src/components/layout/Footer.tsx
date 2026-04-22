function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { WHATSAPP_LINKS, SOCIAL_LINKS } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-white/10 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="font-bold text-base"
            style={{ fontFamily: "'Playfair Display', serif", color: '#F2BE1B' }}
          >
            THE INFLUENCE BOX ACADEMY
          </p>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINKS.workshop}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm font-inter transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand-cyan transition-colors"
              aria-label="LinkedIn de Freddy Flórez"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40 font-inter">
          <p>© {new Date().getFullYear()} The Influence Box Academy. Todos los derechos reservados.</p>
          <p>Powered by The Influence Box Academy</p>
        </div>
      </div>
    </footer>
  );
}
