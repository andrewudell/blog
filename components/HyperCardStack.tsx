'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function HyperCardStack({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const pageName = isHome ? 'Home' : 'Card';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 hypercard-pattern">
      <div className="w-full max-w-4xl hypercard-window flex flex-col" style={{ minHeight: '600px' }}>
        {/* Title Bar */}
        <div className="hypercard-titlebar">
          <div className="hypercard-window-controls">
            <div className="hypercard-window-control"></div>
            <div className="hypercard-window-control"></div>
          </div>
          {pageName}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-10 bg-white overflow-auto">
          {children}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="hypercard-navbar">
          <div className="hypercard-nav-arrow">◀</div>
          <div className="hypercard-nav-arrow">▶</div>
          <div className="flex-1 flex gap-1 ml-2">
            <a href="/" className={`hypercard-nav-tab ${isHome ? 'active' : ''}`}>
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
