import Link from 'next/link';
import React from 'react';

interface HyperCardButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'nav';
  className?: string;
}

export default function HyperCardButton({
  children,
  href,
  onClick,
  variant = 'default',
  className = '',
}: HyperCardButtonProps) {
  const baseClasses = 'hypercard-button';
  const variantClasses = variant === 'nav' ? 'text-sm' : '';
  const allClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={allClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
}
