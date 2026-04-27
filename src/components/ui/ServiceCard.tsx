import { motion } from 'framer-motion';
import { CheckCircle, Quote } from 'lucide-react';
import Button from './Button';

type ServiceCardProps = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  cta: string;
  ctaLink: string;
  testimonial?: { text: string; author: string; role: string };
  highlight?: string;
};

export default function ServiceCard({
  badge,
  title,
  subtitle,
  description,
  benefits,
  cta,
  ctaLink,
  testimonial,
  highlight,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="h-full bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-5 hover:border-brand-yellow/30 hover:shadow-[0_0_30px_rgba(242,190,27,0.08)] transition-all duration-300"
    >
      <span className="inline-block self-start bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 text-xs font-semibold font-inter px-3 py-1 rounded-full uppercase tracking-wider">
        {badge}
      </span>

      <div>
        <h3
          className="font-bold text-2xl text-white mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
        <p className="text-brand-yellow font-inter font-medium text-sm">
          {subtitle}
        </p>
      </div>

      <p className="text-white/70 font-inter text-sm leading-relaxed">
        {description}
      </p>

      <ul className="flex flex-col gap-2">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-2 text-sm font-inter text-white/80">
            <CheckCircle className="text-brand-yellow mt-0.5 flex-shrink-0" size={16} />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {highlight && (
        <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl p-4">
          <p className="text-brand-yellow text-sm font-inter font-medium leading-relaxed">
            {highlight}
          </p>
        </div>
      )}

      <div className="mt-auto flex flex-col gap-4">
        <Button variant="primary" href={ctaLink} external>
          {cta}
        </Button>

        {testimonial && (
          <div className="border-t border-white/10 pt-4">
            <Quote className="text-brand-yellow/50 mb-2" size={20} />
            <p className="text-white/60 text-sm font-inter italic leading-relaxed mb-3">
              "{testimonial.text}"
            </p>
            <div>
              <p className="text-white font-semibold text-sm font-inter">
                {testimonial.author}
              </p>
              <p className="text-white/50 text-xs font-inter">{testimonial.role}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
