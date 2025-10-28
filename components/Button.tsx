import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#C06B3E] text-white hover:bg-[#A95B34] focus:ring-[#C06B3E] shadow-md hover:shadow-lg border-2 border-[#C06B3E] hover:border-[#A95B34]',
  secondary: 'border-2 border-[#6FA890] text-[#2E2E2E] bg-white hover:bg-[#6FA890]/10 focus:ring-[#6FA890] shadow-sm hover:shadow-md',
  ghost: 'text-[#2E2E2E] bg-[#E8DCC9]/40 hover:bg-[#E8DCC9]/70 focus:ring-[#6FA890] border border-[#E8DCC9]/60',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseClasses = `
    rounded-button font-medium
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-all duration-200 ease-out
    relative z-10 inline-flex items-center justify-center
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="inline-flex items-center justify-center w-full h-full"
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  const { disabled } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`
        ${baseClasses}
        disabled:opacity-50 disabled:cursor-not-allowed
      `.trim().replace(/\s+/g, ' ')}
      disabled={disabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </motion.button>
  );
}
