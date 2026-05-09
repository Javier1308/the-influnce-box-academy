import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { WHATSAPP_LINKS } from '../../data/content';
import Logo from '../../assets/images/LogoTIBAHorizontal.png';
import type { AppMode } from '../../App';

type NavbarProps = {
  mode: 'b2c' | 'b2b';
  onSwitchMode: (mode: AppMode) => void;
  onGoHome: () => void;
};

export default function Navbar({ mode, onSwitchMode, onGoHome }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] }}
      className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 min-h-16 md:min-h-20 flex items-center justify-between gap-3">
        {/* Logo — vuelve al selector */}
        <button onClick={onGoHome} className="flex items-center min-w-0 focus:outline-none">
          <img
            src={Logo}
            alt="The Influence Box Academy"
            className="h-[43px] md:h-[58px] w-auto object-contain flex-shrink-0"
          />
        </button>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Switcher B2C / B2B */}
          <div
            className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-full p-1 gap-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <button
              onClick={() => onSwitchMode('b2c')}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                mode === 'b2c'
                  ? 'bg-brand-yellow text-black'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              Para ti
            </button>
            <button
              onClick={() => onSwitchMode('b2b')}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                mode === 'b2b'
                  ? 'bg-brand-cyan text-black'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              Para tu empresa
            </button>
          </div>

          <Button
            variant="primary"
            href={WHATSAPP_LINKS.empresas}
            external
            className="!text-xs !px-4 !py-2.5 !rounded-full flex-shrink-0 min-h-[44px]"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
