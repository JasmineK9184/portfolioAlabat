import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button = ({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) => {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-accent hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/50',
    secondary: 'bg-secondary hover:bg-slate-700 text-light',
    outline: 'border-2 border-accent text-accent hover:bg-accent/10',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={classes}>
      {content}
    </button>
  );
};
