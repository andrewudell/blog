'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import DesktopIcon from './DesktopIcon';

export default function HyperCardStack({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const [rightX, setRightX] = useState(1300);
  const [bottomY, setBottomY] = useState(700);
  const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPositioned, setIsPositioned] = useState(false);
  const dragRef = React.useRef({ startX: 0, startY: 0 });

  useEffect(() => {
    // Calculate positions - icons flush to right edge (16px from edge)
    // Icon width is ~80px, so position at window.innerWidth - 96
    const rightEdgeX = window.innerWidth - 96;
    const bottomEdgeY = window.innerHeight - 100;
    const mobile = window.innerWidth < 768;

    setRightX(rightEdgeX);
    setBottomY(bottomEdgeY);
    // Center the window, accounting for viewport size
    setWindowPos({
      x: mobile ? window.innerWidth / 2 : window.innerWidth / 2,
      y: mobile ? window.innerHeight / 2 : window.innerHeight / 2
    });
    setIsMobile(mobile);
    setIsPositioned(true);

    // Update on resize
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setRightX(window.innerWidth - 96);
      setBottomY(window.innerHeight - 100);
      setIsMobile(mobile);
      setWindowPos({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define page order for navigation
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/writing', name: 'Writing' },
    { path: '/investments', name: 'Angel Investments' },
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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX - windowPos.x,
      startY: e.clientY - windowPos.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setWindowPos({
      x: e.clientX - dragRef.current.startX,
      y: e.clientY - dragRef.current.startY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="min-h-screen hypercard-pattern relative"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Desktop Icons - Hidden on mobile, shown on md+ screens */}
      <div className="hidden md:block">
        {/* Left side icons - matching page order */}
        <DesktopIcon type="folder" label="About" initialX={16} initialY={16} onClick={() => router.push('/about')} />
        <DesktopIcon type="folder" label="Writing" initialX={16} initialY={100} onClick={() => router.push('/writing')} />
        <DesktopIcon type="folder" label="Angel Investments" initialX={16} initialY={180} onClick={() => router.push('/investments')} />

        {/* Right side icons - continuing page order */}
        <DesktopIcon type="document" label="Contact" initialX={rightX} initialY={16} onClick={() => router.push('/contact')} />
        <DesktopIcon type="folder" label="Projects" initialX={rightX} initialY={100} onClick={() => router.push('/projects')} />
        <DesktopIcon type="document" label="Guestbook" initialX={rightX} initialY={180} onClick={() => router.push('/guestbook')} />

        {/* Trash at bottom right */}
        <DesktopIcon type="trash" label="Trash" initialX={rightX} initialY={bottomY} />
      </div>

      {/* HyperCard Window - Responsive and centered */}
      <div
        className="hypercard-window flex flex-col select-none"
        style={{
          width: isMobile ? 'calc(100vw - 2rem)' : '100%',
          maxWidth: '48rem',
          height: isMobile ? 'calc(100vh - 2rem)' : '600px',
          maxHeight: isMobile ? 'calc(100vh - 2rem)' : '600px',
          position: 'absolute',
          left: `${windowPos.x}px`,
          top: `${windowPos.y}px`,
          transform: 'translate(-50%, -50%)',
          cursor: isDragging ? 'grabbing' : 'default',
          opacity: isPositioned ? 1 : 0,
          transition: isPositioned ? 'none' : 'opacity 0s',
        }}
      >
        {/* Title Bar - Drag handle on desktop only */}
        <div
          className="hypercard-titlebar flex-shrink-0"
          onMouseDown={isMobile ? undefined : handleMouseDown}
          style={{ cursor: isMobile ? 'default' : 'grab' }}
        >
          <div className="hypercard-window-controls">
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
            <Link href="/" className={`hypercard-nav-tab ${isHome ? 'active' : ''}`}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
