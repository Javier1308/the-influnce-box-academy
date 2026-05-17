import LogoSolo from '../../assets/images/LogoSolo.png';
import Swoosh from '../../assets/images/Swoosh.png';
import { WHATSAPP_LINKS, SOCIAL_LINKS } from '../../data/content';

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GlobeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function MailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10" style={{ backgroundColor: '#050B14' }}>
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-16 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">

        {/* LEFT: Logo image (already contains brand text) + contact + social */}
        <div className="flex flex-col gap-6 items-center md:items-start w-full md:w-auto">
          <img
            src={LogoSolo}
            alt="The Influence Box Academy"
            className="w-48 sm:w-56 md:w-64 object-contain"
          />

          {/* Contact info */}
          <div className="flex flex-col gap-2 text-sm text-white/55 font-inter items-center md:items-start">
            <a
              href="mailto:academy@theinfluencebox.com"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <MailIcon size={15} />
              academy@theinfluencebox.com
            </a>
            <a
              href={WHATSAPP_LINKS.empresas}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <WhatsAppIcon size={15} />
              954 707 181
            </a>
            <a
              href="https://www.theinfluencebox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <GlobeIcon size={15} />
              www.theinfluencebox.com
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINKS.empresas}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Freddy Flórez"
              className="w-11 h-11 rounded-lg bg-[#0A66C2] hover:bg-[#0A66C2]/80 flex items-center justify-center text-white transition-all"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>

          {/* Tagline + swoosh — mobile only, below social icons */}
          <div className="flex items-center justify-center gap-3 md:hidden w-full">
            <div className="flex flex-col" style={{ lineHeight: 1.1 }}>
              <p className="text-xl text-white/80 italic font-light font-inter">
                ...más rápido,
              </p>
              <p className="text-xl text-brand-cyan italic font-light font-inter">
                donde quieras estar
              </p>
            </div>
            <img
              src={Swoosh}
              alt=""
              aria-hidden="true"
              className="w-20 object-contain flex-shrink-0"
            />
          </div>
        </div>

        {/* RIGHT: Tagline + swoosh — desktop only */}
        <div className="hidden md:flex items-center justify-center md:self-center gap-4">
          <div className="flex flex-col" style={{ lineHeight: 1.1 }}>
            <p className="text-3xl md:text-4xl text-white/80 italic font-light font-inter">
              ...más rápido,
            </p>
            <p className="text-3xl md:text-4xl text-brand-cyan italic font-light font-inter">
              donde quieras estar
            </p>
          </div>
          <img
            src={Swoosh}
            alt=""
            aria-hidden="true"
            className="w-40 object-contain flex-shrink-0"
          />
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30 font-inter">
          <p>© {new Date().getFullYear()} The Influence Box Academy. Todos los derechos reservados.</p>
          <p>Powered by The Influence Box Academy</p>
        </div>
      </div>
    </footer>
  );
}
