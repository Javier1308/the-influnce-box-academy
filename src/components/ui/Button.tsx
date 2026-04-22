import React from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export default function Button({
  variant,
  href,
  onClick,
  children,
  external = false,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-inter font-semibold rounded-full px-6 py-3 transition-all duration-200 cursor-pointer text-sm md:text-base';

  const variants = {
    primary:
      'bg-brand-yellow text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(242,190,27,0.5)]',
    secondary:
      'bg-brand-cyan text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(95,197,227,0.5)]',
    outline:
      'border border-brand-yellow text-brand-yellow hover:bg-brand-yellow/10 hover:scale-105',
  };

  const cls = `${base} ${variants[variant]} ${className}`;
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  if (href) {
    return (
      <a href={href} className={cls} {...externalProps}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
