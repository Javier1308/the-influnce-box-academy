import { Quote } from 'lucide-react';

type TestimonialProps = {
  text: string;
  author: string;
  role: string;
  avatarUrl?: string;
};

export default function Testimonial({ text, author, role, avatarUrl }: TestimonialProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <Quote className="text-brand-yellow/50 mb-3" size={24} />
      <p className="text-white/80 font-inter italic text-sm leading-relaxed mb-4">
        "{text}"
      </p>
      <div className="flex items-center gap-3">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={author}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <p className="text-white font-semibold text-sm font-inter">{author}</p>
          <p className="text-white/50 text-xs font-inter">{role}</p>
        </div>
      </div>
    </div>
  );
}
