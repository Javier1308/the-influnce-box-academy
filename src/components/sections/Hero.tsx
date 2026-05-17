import { useRef, useState } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import Button from '../ui/Button';
import { HERO, WHATSAPP_PHONE } from '../../data/content';
import { useCountdownOffer } from '../../hooks/useCountdownOffer';
import FreddyImg from '../../assets/images/Freddy.jpeg';
import VideoThumbnail from '../../assets/images/Miniatura.jpeg';
import BitacoraImg from '../../assets/images/Bitacora.png';
import RelojLogo from '../../assets/images/RelojLogo.png';
import Badge1 from '../../assets/images/Badge1.png';
import Badge2 from '../../assets/images/Badge2.png';
import Badge3 from '../../assets/images/Badge3.png';
import CienciaIcons from '../../assets/images/Ciencia_Icons.png';

type OfferForm = { nombre: string; dni: string; correo: string; celular: string };

function OfferModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<OfferForm>({ nombre: '', dni: '', correo: '', celular: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola, quiero aprovechar el Dscto del 40%.\n\nNombre: ${form.nombre}\nDNI: ${form.dni}\nCorreo: ${form.correo}\nCelular: ${form.celular}`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const fields: { name: keyof OfferForm; label: string; type: string; placeholder: string }[] = [
    { name: 'nombre',  label: 'Nombre',  type: 'text',  placeholder: 'Tu nombre completo' },
    { name: 'dni',     label: 'DNI',     type: 'text',  placeholder: 'Tu número de DNI' },
    { name: 'correo',  label: 'Correo',  type: 'email', placeholder: 'tucorreo@ejemplo.com' },
    { name: 'celular', label: 'Celular', type: 'tel',   placeholder: 'Tu número de celular' },
  ];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-md rounded-2xl border border-brand-yellow/30 bg-[#0A0F1A] p-7 shadow-[0_0_60px_rgba(242,190,27,0.15)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-6 text-center">
          <span className="inline-flex items-center gap-2 border border-brand-yellow text-brand-yellow text-xs font-semibold font-inter px-4 py-1.5 rounded-full bg-brand-yellow/10">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            ¡40% de descuento hoy!
          </span>
          <h3
            className="text-white font-black text-xl leading-tight mt-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Aprovecha esta oferta
          </h3>
          <p className="text-white/50 text-xs font-inter">
            Completa tus datos y te contactamos por WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {fields.map(f => (
            <div key={f.name} className="flex flex-col gap-1.5">
              <label
                htmlFor={f.name}
                className="text-white/60 text-xs font-semibold uppercase tracking-wider font-inter"
              >
                {f.label}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm font-inter placeholder:text-white/25 focus:outline-none focus:border-brand-yellow/60 focus:bg-brand-yellow/5 transition-colors"
              />
            </div>
          ))}

          <button
            type="submit"
            className="mt-2 w-full bg-brand-yellow text-black font-black text-sm py-4 rounded-full hover:bg-brand-yellow/90 hover:scale-[1.02] transition-all duration-200 font-inter tracking-wide"
          >
            Quiero aprovechar el Dscto del 40% →
          </button>
        </form>
      </motion.div>
    </div>
  );
}

// Pega aquí la URL del video cuando la tengas (YouTube embed o similar)
// Ejemplo YouTube: 'https://www.youtube.com/embed/TU_ID_AQUI'
const VIDEO_URL = 'https://blue-access.net/TheInfluenceBox.mp4';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const offer = useCountdownOffer();
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlayVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    videoRef.current?.play();
  };

  return (
    <section className="relative bg-brand-dark overflow-hidden">
      <AnimatePresence>
        {modalOpen && <OfferModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
      {/* Science icons background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `url(${CienciaIcons})`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) brightness(1.5)',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(242,190,27,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pt-6 sm:pt-8 md:pt-14 pb-6 md:pb-10">

        {/* ── 1. TÍTULO PRINCIPAL ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-4"
        >
          <h1
            className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Aprenderás a aplicar la{' '}
            <span className="text-brand-yellow">psicología de la persuasión</span>{' '}
            para que tu voz impacte, generes{' '}
            <span className="text-brand-yellow">confianza al hablar</span>{' '}
            y logres una efectividad superior al{' '}
            <span className="text-brand-yellow">cerrar negocios.</span>
          </h1>
        </motion.div>

        {/* ── 2. CTA centrado ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="flex justify-center mt-8 mb-8"
        >
          <Button variant="primary" onClick={handlePlayVideo} className="text-base px-8 py-4">
            {HERO.cta}
          </Button>
        </motion.div>

        {/* ── 3. VIDEO (ancho completo) ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(242,190,27,0.08)] bg-black mb-6"
          style={{ aspectRatio: '16/9' }}
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            poster={VideoThumbnail}
            controls
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        {/* ── 4. OFERTA + DESCARGA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="flex flex-col items-center gap-4 mb-10"
        >
          {/* Badge oferta + countdown */}
          {offer.active && (
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 border border-brand-yellow text-brand-yellow text-xs font-semibold font-inter px-4 py-1.5 rounded-full bg-brand-yellow/10 hover:bg-brand-yellow/20 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                ¡Aprovecha hoy el 40% de descuento total!
              </button>
              <div className="flex items-center gap-2 text-white/80 font-inter text-sm">
                <img src={RelojLogo} alt="" className="w-9 h-9 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(85%) saturate(500%) hue-rotate(358deg) brightness(98%) contrast(95%)' }} />
                <span>Expira en</span>
                <span className="font-mono font-bold text-brand-yellow tabular-nums">
                  {offer.hours}:{offer.minutes}:{offer.seconds}
                </span>
              </div>
            </div>
          )}

          {/* Botón descarga + mensaje cyan */}
          <div className="flex flex-col items-center gap-2">
            <a
              href={BitacoraImg}
              download="Bitacora-7-Principios-The-Influence-Box-Academy.png"
              className="inline-flex items-center justify-center gap-2 border border-brand-yellow text-brand-yellow font-semibold font-inter text-base px-8 py-4 rounded-full hover:bg-brand-yellow/10 hover:scale-105 transition-all duration-200"
            >
              Descarga tu bitácora
            </a>
            <span className="text-brand-cyan text-xs font-inter font-medium tracking-wide">
              — Sin costo —
            </span>
          </div>
        </motion.div>

        {/* ── 5. BIENVENIDA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="border-t border-white/10 pt-10 md:pt-14 pb-6 md:pb-10"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {/* Label BIENVENIDOS con líneas */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="flex-1 max-w-[80px] h-px bg-brand-cyan/60" />
            <span className="text-brand-cyan text-xl font-bold tracking-widest uppercase">
              Bienvenidos
            </span>
            <span className="flex-1 max-w-[80px] h-px bg-brand-cyan/60" />
          </div>

          {/* Cita centrada */}
          <p
            className="text-white/90 text-xl sm:text-2xl md:text-3xl leading-relaxed text-center max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            "{HERO.welcome}"
          </p>

          {/* Firma: foto circular + nombre + badges — caja oscura */}
          <div className="flex justify-center">
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 bg-black/40 rounded-2xl px-4 sm:px-6 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.5)] w-full sm:w-auto justify-center sm:justify-start">
              {/* Foto circular */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-brand-yellow/40 to-brand-cyan/20 blur" />
                <img
                  src={FreddyImg}
                  alt="Freddy Flórez — Founder & Coach Certificado"
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-2 border-white/20"
                />
              </div>

              {/* Nombre y rol */}
              <div className="flex flex-col gap-0.5">
                <p className="text-white font-bold text-base sm:text-lg leading-tight">
                  Freddy Flórez
                </p>
                <p className="text-white/50 text-[11px] uppercase tracking-wider">
                  Founder – Coach de Persuasión
                </p>
                <p className="text-brand-cyan text-[11px] mt-0.5">
                  Profesional Certificado de Influencia Social · Cialdini Institute
                </p>
              </div>

              {/* Badges de certificación */}
              <div className="flex items-center justify-center gap-2 mt-2 sm:mt-0 sm:ml-2">
                <img src={Badge1} alt="Certificación Cialdini 1" className="w-14 h-14 sm:w-24 sm:h-24 object-contain" />
                <img src={Badge2} alt="Certificación Cialdini 2" className="w-14 h-14 sm:w-24 sm:h-24 object-contain" />
                <img src={Badge3} alt="Certificación Cialdini 3" className="w-14 h-14 sm:w-24 sm:h-24 object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <div className="flex justify-center pb-6">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/25"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>

      </div>

    </section>
  );
}
