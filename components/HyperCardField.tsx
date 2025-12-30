import React from 'react';

interface HyperCardFieldProps {
  children: React.ReactNode;
  className?: string;
}

export default function HyperCardField({
  children,
  className = '',
}: HyperCardFieldProps) {
  return (
    <div className={`hypercard-field ${className}`.trim()}>
      {children}
    </div>
  );
}
