// components/ui/Typography.tsx
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  children: ReactNode;
  className?: string;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
}

export const Typography = ({
  variant = 'body',
  children,
  className,
  weight = 'normal'
}: TypographyProps) => {

  // Mapping variants to HTML tags
  const Component = variant.startsWith('h') ? variant : variant === 'caption' ? 'span' : 'p';

  const variantStyles = {
    h1: 'font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight',
    h2: 'font-heading text-4xl md:text-5xl tracking-tight',
    h3: 'font-heading text-3xl md:text-4xl',
    h4: 'font-heading text-2xl md:text-3xl',
    h5: 'font-heading text-xl md:text-2xl',
    h6: 'font-heading text-lg md:text-xl',
    body: 'font-body text-base md:text-lg leading-relaxed',
    caption: 'font-body text-sm uppercase tracking-wider',
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <Component className={cn(variantStyles[variant], weights[weight], className)}>
      {children}
    </Component>
  );
};