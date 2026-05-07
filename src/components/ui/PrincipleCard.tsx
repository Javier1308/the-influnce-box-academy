import { motion } from 'framer-motion';

type PrincipleCardProps = {
  name: string;
  description: string;
  delay?: number;
};

export default function PrincipleCard({
  name,
  description,
  delay = 0,
}: PrincipleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as [number,number,number,number], delay }}
      whileHover={{
        scale: 1.05,
        borderColor: 'rgba(242,190,27,0.6)',
        boxShadow: '0 0 20px rgba(242,190,27,0.2)',
      }}
      className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col gap-3 cursor-default transition-colors items-center text-center"
    >
      <h3
        className="font-bold text-lg sm:text-xl lg:text-2xl text-brand-yellow"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {name}
      </h3>
      <p className="text-white/70 text-sm font-inter leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
