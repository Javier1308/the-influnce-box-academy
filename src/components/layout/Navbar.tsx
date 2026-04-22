import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { WHATSAPP_LINKS } from '../../data/content';

const navLinks = [
  { label: '¿Por qué influencia?', href: '#why' },
  { label: 'Servicios', href: '#services' },
  { label: '7 Principios', href: '#principles' },
  { label: 'Sobre mí', href: '#coach' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as [number,number,number,number] }}
      className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-base md:text-lg leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#F2BE1B',
          }}
        >
          THE INFLUENCE BOX ACADEMY
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-inter transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" href={WHATSAPP_LINKS.empresas} external>
            Contáctanos
          </Button>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-darker border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm font-inter"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" href={WHATSAPP_LINKS.empresas} external>
                Contáctanos
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
