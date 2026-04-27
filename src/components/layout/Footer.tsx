import Badge1 from '../../assets/images/Badge1.png';
import Badge2 from '../../assets/images/Badge2.png';
import Badge3 from '../../assets/images/Badge3.png';
import ContactInfo from '../../assets/images/ContactInfo.png';
import { WHATSAPP_LINKS, SOCIAL_LINKS } from '../../data/content';

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-white/10 py-8 md:py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
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

        {/* Badges + ContactInfo en dos columnas */}
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Badges de certificación */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <img
              src={Badge1}
              alt="Cialdini Certified Coach 2024"
              className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain drop-shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200"
            />
            <img
              src={Badge2}
              alt="Founding Member — Cialdini Institute"
              className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain drop-shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200"
            />
            <img
              src={Badge3}
              alt="Ethical Influence Practitioner — Accredited by Cialdini Institute"
              className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain drop-shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200"
            />
          </div>

          {/* Información de contacto */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <img
              src={ContactInfo}
              alt="Información de contacto — The Influence Box Academy"
              className="w-full max-w-xs sm:max-w-sm md:w-96 lg:w-[32rem] mx-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40 font-inter text-center">
          <p>© {new Date().getFullYear()} The Influence Box Academy. Todos los derechos reservados.</p>
          <p>Powered by The Influence Box Academy</p>
        </div>
      </div>
    </footer>
  );
}
