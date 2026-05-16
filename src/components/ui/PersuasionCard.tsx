type PersuasionCardProps = {
  imageSrc: string;
  imageAlt: string;
  accentColor: string;
  glowColor: string;
  label: string;
  titleTop: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  onClick: () => void;
};

export default function PersuasionCard({
  imageSrc,
  imageAlt,
  accentColor,
  glowColor,
  label,
  titleTop,
  titleHighlight,
  description,
  ctaText,
  onClick,
}: PersuasionCardProps) {
  return (
    <div className="relative flex-1" style={{ maxWidth: '520px', minWidth: '280px' }}>

      {/* Imagen circular sobresaliente */}
      <div
        className="absolute left-1/2 z-10"
        style={{
          top: '-90px',
          transform: 'translateX(-50%)',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          boxShadow: `0 0 40px 10px ${glowColor}`,
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Card body */}
      <button
        onClick={onClick}
        className="relative flex flex-col items-center text-center w-full focus:outline-none group"
        style={{
          paddingTop: '108px',
          paddingBottom: '36px',
          paddingLeft: '36px',
          paddingRight: '36px',
          borderRadius: '24px',
          border: `1.5px solid ${accentColor}`,
          backgroundColor: '#0B1120',
          boxShadow: `0 0 28px 0px ${glowColor}`,
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 48px 4px ${glowColor}`;
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 28px 0px ${glowColor}`;
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
        }}
      >
        {/* Label */}
        <p
          className="text-[10px] font-bold uppercase tracking-[0.25em] mb-4"
          style={{ color: accentColor, fontFamily: "'Montserrat', sans-serif" }}
        >
          {label}
        </p>

        {/* Título */}
        <h2
          className="text-white font-black leading-snug mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.7rem, 2.4vw, 2.2rem)',
          }}
        >
          {titleTop}
          <br />
          <span style={{ color: accentColor }}>{titleHighlight}</span>
        </h2>

        {/* Separador luminoso */}
        <div
          className="mb-5"
          style={{
            width: '72px',
            height: '1.5px',
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          }}
        />

        {/* Descripción */}
        <p
          className="text-white/55 leading-relaxed italic mb-8 whitespace-pre-line"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.85rem',
          }}
        >
          {description}
        </p>

        {/* CTA */}
        <div
          className="inline-flex items-center justify-center font-bold px-9 py-3 transition-all duration-200 group-hover:brightness-110"
          style={{
            backgroundColor: accentColor,
            color: '#000',
            borderRadius: '9999px',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.88rem',
          }}
        >
          {ctaText}
        </div>
      </button>
    </div>
  );
}
