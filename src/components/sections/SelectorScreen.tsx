import { motion } from 'framer-motion';
import Logo from '../../assets/images/LogoTIBAHorizontal.png';
import CienciaIcons from '../../assets/images/Ciencia_Icons.png';

type SelectorScreenProps = {
  onSelect: (mode: 'b2c' | 'b2b') => void;
};


export default function SelectorScreen({ onSelect }: SelectorScreenProps) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark overflow-hidden">

      {/* Logo centrado en la parte superior */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center pt-8 pb-4 px-4 absolute top-0 left-0 right-0 z-10"
      >
        <img
          src={Logo}
          alt="The Influence Box Academy"
          className="h-10 md:h-14 w-auto object-contain"
        />
      </motion.div>

      {/* Dos mitades */}
      <div className="flex flex-col md:flex-row flex-1 min-h-screen">

        {/* ── Mitad B2C ── */}
        <motion.button
          onClick={() => onSelect('b2c')}
          className="relative flex-1 flex flex-col items-center justify-center gap-6 p-8 md:p-16 cursor-pointer group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark min-h-[50vh] md:min-h-screen"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
          whileHover="hover"
        >
          {/* Fondo con watermark ciencia */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500"
            style={{
              backgroundImage: `url(${CienciaIcons})`,
              backgroundSize: '120%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'invert(1) brightness(1.5)',
            }}
          />
          {/* Glow amarillo */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-100"
            style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(242,190,27,0.10) 0%, transparent 70%)' }}
          />
          {/* Borde derecho separador (solo desktop) */}
          <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-px bg-white/10" />
          {/* Borde inferior separador (solo mobile) */}
          <div className="md:hidden absolute bottom-0 left-[10%] right-[10%] h-px bg-white/10" />

          <div className="relative z-10 flex flex-col items-center gap-5 max-w-xs text-center">
            {/* Ícono */}
            <motion.div
              variants={{ hover: { scale: 1.15 } }}
              className="w-20 h-20 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-4xl"
            >
              👤
            </motion.div>

            <div>
              <p
                className="font-montserrat text-brand-yellow text-xs font-bold uppercase tracking-widest mb-2"
              >
                Profesional Individual
              </p>
              <h2
                className="text-white font-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Quiero crecer
                <br />
                <span className="text-brand-yellow">como profesional</span>
              </h2>
              <p className="font-montserrat text-white/55 text-sm leading-relaxed">
                Talleres, coaching y programas personales
              </p>
            </div>

            <motion.div
              variants={{ hover: { scale: 1.05 } }}
              className="font-montserrat inline-flex items-center gap-2 border-2 border-brand-yellow text-brand-yellow font-bold text-sm px-6 py-3 rounded-full"
            >
              Quiero crecer →
            </motion.div>
          </div>
        </motion.button>

        {/* ── Mitad B2B ── */}
        <motion.button
          onClick={() => onSelect('b2b')}
          className="relative flex-1 flex flex-col items-center justify-center gap-6 p-8 md:p-16 cursor-pointer group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark min-h-[50vh] md:min-h-screen"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number], delay: 0.1 }}
          whileHover="hover"
        >
          {/* Fondo con watermark */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500"
            style={{
              backgroundImage: `url(${CienciaIcons})`,
              backgroundSize: '120%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'invert(1) brightness(1.5)',
            }}
          />
          {/* Glow cyan */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(95,197,227,0.10) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col items-center gap-5 max-w-xs text-center">
            {/* Ícono */}
            <motion.div
              variants={{ hover: { scale: 1.15 } }}
              className="w-20 h-20 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-4xl"
            >
              🏢
            </motion.div>

            <div>
              <p
                className="font-montserrat text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2"
              >
                Empresa o Equipo
              </p>
              <h2
                className="text-white font-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Quiero capacitar
                <br />
                <span className="text-brand-cyan">a mi equipo</span>
              </h2>
              <p className="font-montserrat text-white/55 text-sm leading-relaxed">
                Capacitación corporativa
              </p>
            </div>

            <motion.div
              variants={{ hover: { scale: 1.05 } }}
              className="font-montserrat inline-flex items-center gap-2 border-2 border-brand-cyan text-brand-cyan font-bold text-sm px-6 py-3 rounded-full"
            >
              Para mi empresa →
            </motion.div>
          </div>
        </motion.button>

      </div>
    </div>
  );
}
