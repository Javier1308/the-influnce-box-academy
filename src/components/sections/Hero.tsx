import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Button from '../ui/Button';
import { HERO, WHATSAPP_LINKS, IMAGE_URLS } from '../../data/content';

export default function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden py-20 px-4 md:px-8 lg:px-16">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: '256px 256px',
        }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(242,190,27,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] as [number,number,number,number] }}
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] as [number,number,number,number] }}
              className="inline-flex items-center gap-2 border border-brand-yellow text-brand-yellow text-xs font-semibold font-inter px-4 py-2 rounded-full mb-6 bg-brand-yellow/10"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              {HERO.badge}
            </motion.div>

            <h1
              className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Aprenderás a aplicar la{' '}
              <span className="text-brand-yellow">
                psicología de la persuasión
              </span>{' '}
              para que tu voz impacte, generes{' '}
              <span className="text-brand-yellow">confianza al hablar</span> y
              logres una efectividad superior al{' '}
              <span className="text-brand-yellow">cerrar negocios.</span>
            </h1>

            <p className="text-white/70 font-inter text-base md:text-lg mb-8 leading-relaxed">
              {HERO.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href={WHATSAPP_LINKS.workshop} external className="text-base px-8 py-4">
                {HERO.cta}
              </Button>
              <Button variant="outline" href="#services">
                Ver servicios
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] as [number,number,number,number], delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(242,190,27,0.1)]">
              <img
                src={IMAGE_URLS.hero}
                alt="The Influence Box Academy — Freddy Flórez"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
                <a
                  href={WHATSAPP_LINKS.workshop}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-20 h-20 rounded-full bg-brand-yellow hover:scale-110 transition-transform shadow-[0_0_30px_rgba(242,190,27,0.4)]"
                  aria-label="Ver video de 8 minutos"
                >
                  <Play className="text-black ml-1" size={32} fill="black" />
                </a>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <p className="text-white text-xs font-inter">▶ Video de 8 minutos — ¿Por qué The Influence Box Academy?</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
