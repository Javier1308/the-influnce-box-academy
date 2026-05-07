type SectionTitleProps = {
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  justify?: boolean;
};

export default function SectionTitle({
  title,
  highlight,
  subtitle,
  centered = false,
  justify = false,
}: SectionTitleProps) {
  const alignment = centered ? 'text-center' : 'text-left';

  const renderTitle = () => {
    if (!highlight) {
      return <span>{title}</span>;
    }
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-brand-yellow">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`mb-8 ${alignment}`}>
      <h2
        className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-white/70 font-inter text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${justify ? 'text-justify' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
