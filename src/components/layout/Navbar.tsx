import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { WHATSAPP_LINKS } from '../../data/content';
import Logo from '../../assets/images/LogoInfluenceBoxAcademy.png';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as [number,number,number,number] }}
      className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 min-h-16 md:min-h-20 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2 min-w-0">
          <img
            src={Logo}
            alt="The Influence Box Academy"
            className="h-10 md:h-14 w-auto object-contain flex-shrink-0"
          />
          <span
            className="font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight hidden sm:block"
            style={{ fontFamily: "'Playfair Display', serif", color: '#F2BE1B' }}
          >
            THE INFLUENCE BOX ACADEMY
          </span>
        </a>

        <Button variant="primary" href={WHATSAPP_LINKS.empresas} external className="!text-xs !px-4 !py-2.5 !rounded-full flex-shrink-0 min-h-[44px]">
          Contáctanos
        </Button>
      </div>
    </motion.header>
  );
}
