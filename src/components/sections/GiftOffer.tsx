import { motion, type Variants } from 'framer-motion';
import { Gift, Copy } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import { GIFT } from '../../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function GiftOffer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(GIFT.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-brand-darker py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="border-2 border-brand-yellow/30 rounded-3xl bg-brand-yellow/5 p-5 sm:p-8 md:p-12 text-center shadow-[0_0_40px_rgba(242,190,27,0.1)]"
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-brand-yellow/20 flex items-center justify-center">
              <Gift className="text-brand-yellow" size={28} />
            </div>
          </div>

          <h2
            className="font-bold text-xl sm:text-2xl md:text-3xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Un regalo especial para ti
          </h2>

          <p className="text-white/70 font-inter text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto">
            {GIFT.message}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-brand-dark border border-brand-yellow/40 rounded-xl px-4 sm:px-6 py-4 mb-6 w-full sm:w-auto">
            <span className="text-white/60 font-inter text-sm">Tu código de descuento:</span>
            <div className="flex items-center gap-3">
              <code className="text-brand-yellow font-mono font-bold text-xl tracking-widest">
                {GIFT.code}
              </code>
              <button
                onClick={handleCopy}
                className="text-white/50 hover:text-brand-yellow transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Copiar código"
              >
                <Copy size={18} />
              </button>
            </div>
          </div>

          {copied && (
            <p className="text-brand-cyan text-xs font-inter mb-4 animate-pulse">
              ¡Código copiado al portapapeles!
            </p>
          )}

          <p className="text-brand-yellow font-semibold font-inter text-sm mb-6">
            {GIFT.discount} de descuento — solo para nuevos participantes
          </p>

          <Button variant="primary" href={GIFT.ctaLink} external className="text-base px-8 py-4">
            {GIFT.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
