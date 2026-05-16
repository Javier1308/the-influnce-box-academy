import Logo from '../../assets/images/LogoTIBAHorizontal.png';
import CerebroAmarillo from '../../assets/images/CerebroAmarillo.svg';
import DianaCeleste from '../../assets/images/DianaCeleste.svg';
import PersuasionCard from '../ui/PersuasionCard';

type SelectorScreenProps = {
  onSelect: (mode: 'b2c' | 'b2b') => void;
};

export default function SelectorScreen({ onSelect }: SelectorScreenProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#0A0E1A' }}
    >
      {/* ── Logo ── */}
      <div className="flex justify-center pt-8 pb-4">
        <img
          src={Logo}
          alt="The Influence Box Academy"
          className="h-[72px] md:h-24 w-auto object-contain"
        />
      </div>

      {/* ── Tagline ── */}
      <div className="flex justify-center px-4 mt-3">
        <p
          className="text-center text-white/70 text-lg md:text-xl whitespace-nowrap"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Elevamos tu{' '}
          <span className="text-brand-yellow font-bold text-xl md:text-2xl">JUEGO PERSUASIVO</span>
          {' '}Para que más personas digan que{' '}
          <span className="text-brand-yellow font-bold text-xl md:text-2xl">&ldquo;Sí&rdquo;</span>
          {' '}a lo que propones
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-16" style={{ paddingTop: '130px', paddingBottom: '40px' }}>
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8 w-full max-w-5xl">

          <PersuasionCard
            imageSrc="/B2CCard.svg"
            imageAlt="Profesional individual"
            accentColor="#F2BE1B"
            glowColor="rgba(242,190,27,0.18)"
            label="SOY PROFESIONAL"
            titleTop="Quiero potenciar"
            titleHighlight="mis habilidades de persuasión"
            description={`"Capacitaciones, asesorías y programas\nBasados en ciencia conductual"`}
            ctaText="Explorar programas"
            onClick={() => onSelect('b2c')}
          />

          {/* Separador "O" */}
          <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0 self-stretch relative px-2">
            {/* Línea vertical */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-px h-full" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent)' }} />
            </div>
            {/* Anillos + O */}
            <div className="relative flex items-center justify-center" style={{ zIndex: 1 }}>
              {/* Anillo exterior */}
              <div
                className="absolute rounded-full"
                style={{ width: '108px', height: '108px', border: '1px solid rgba(255,255,255,0.12)' }}
              />
              {/* Anillo interior */}
              <div
                className="absolute rounded-full"
                style={{ width: '78px', height: '78px', border: '1px solid rgba(255,255,255,0.18)' }}
              />
              {/* Círculo central */}
              <div
                className="relative flex items-center justify-center rounded-full"
                style={{ width: '54px', height: '54px', backgroundColor: '#0f1825', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                <span
                  className="text-white font-bold select-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.28rem', lineHeight: 1 }}
                >
                  O
                </span>
              </div>
            </div>
          </div>

          <PersuasionCard
            imageSrc="/B2BCard.svg"
            imageAlt="Empresa o equipo"
            accentColor="#5FC5E3"
            glowColor="rgba(95,197,227,0.18)"
            label="SOY EMPRESA"
            titleTop="Quiero potenciar"
            titleHighlight="la persuasión de mi equipo"
            description={`"Capacitación corporativa para equipos que\nquieren influir, liderar y convertir mejor"`}
            ctaText="Ver soluciones corporativas"
            onClick={() => onSelect('b2b')}
          />

        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="flex items-center justify-center gap-4 py-5 px-4">
        <img src={CerebroAmarillo} alt="Ciencia" className="h-24 w-24 object-contain" />
        <p
          className="text-sm md:text-base font-bold whitespace-nowrap"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="text-brand-yellow">CIENCIA</span>
          <span className="text-white/50"> + </span>
          <span className="text-brand-cyan">ESTRATEGIA</span>
          <span className="text-white/50"> + </span>
          <span className="text-white">PRÁCTICA</span>
          <span className="text-white/50"> = </span>
          <span className="text-brand-yellow">INFLUENCIA REAL</span>
        </p>
        <img src={DianaCeleste} alt="Influencia Real" className="h-24 w-24 object-contain" />
      </div>

    </div>
  );
}
