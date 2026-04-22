type SectionTitleProps = {
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({
  title,
  highlight,
  subtitle,
  centered = false,
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
        className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/70 font-inter text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
