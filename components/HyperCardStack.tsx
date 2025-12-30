'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function HyperCardStack({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  // Define page order for navigation
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/writing', name: 'Writing' },
    { path: '/contact', name: 'Contact' },
    { path: '/projects', name: 'Projects' },
    { path: '/guestbook', name: 'Guestbook' },
  ];

  // Find current page index
  const currentIndex = pages.findIndex(page => {
    if (pathname.startsWith('/posts/')) return false; // Blog posts don't cycle
    return page.path === pathname;
  });

  // Calculate prev/next pages
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : pages[pages.length - 1];
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : pages[0];

  // Get page name for title bar
  const currentPage = pages.find(page => page.path === pathname);
  const pageName = currentPage ? currentPage.name : 'Card';

  const handlePrevious = () => {
    if (prevPage) router.push(prevPage.path);
  };

  const handleNext = () => {
    if (nextPage) router.push(nextPage.path);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 hypercard-pattern">
      <div className="w-full max-w-4xl hypercard-window flex flex-col" style={{ height: '600px' }}>
        {/* Title Bar */}
        <div className="hypercard-titlebar flex-shrink-0">
          <div className="hypercard-window-controls">
            <div className="hypercard-window-control"></div>
            <div className="hypercard-window-control"></div>
          </div>
          {pageName}
        </div>

        {/* Content Area - Scrollable */}
        <div className="flex-1 p-6 md:p-10 bg-white overflow-y-auto overflow-x-hidden">
          {children}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="hypercard-navbar flex-shrink-0">
          <div className="hypercard-nav-arrow" onClick={handlePrevious}>◀</div>
          <div className="hypercard-nav-arrow" onClick={handleNext}>▶</div>
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
