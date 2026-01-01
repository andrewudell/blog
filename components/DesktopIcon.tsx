'use client';

import { useState, useRef, useEffect } from 'react';

// Classic Mac desktop icons
export default function DesktopIcon({
  type,
  label,
  initialX = 0,
  initialY = 0,
  onClick
}: {
  type: 'folder' | 'document' | 'disk' | 'trash';
  label: string;
  initialX?: number;
  initialY?: number;
  onClick?: () => void;
}) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const userHasDragged = useRef(false);
  const dragRef = useRef({ startX: 0, startY: 0 });

  // Update position when props change, unless user has manually dragged it
  useEffect(() => {
    if (!userHasDragged.current) {
      setPosition({ x: initialX, y: initialY });
    }
  }, [initialX, initialY]);

  const renderIcon = () => {
    switch (type) {
      case 'folder':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Folder tab */}
            <path d="M8 18 L8 14 L20 14 L22 18 Z" fill="#DDDDDD" stroke="black" strokeWidth="2"/>
            {/* Folder body */}
            <rect x="8" y="18" width="32" height="20" fill="#DDDDDD" stroke="black" strokeWidth="2"/>
            {/* Shading */}
            <line x1="10" y1="36" x2="38" y2="36" stroke="black" strokeWidth="1" opacity="0.3"/>
          </svg>
        );

      case 'document':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Paper */}
            <path d="M14 10 L34 10 L34 28 L30 32 L14 32 Z" fill="white" stroke="black" strokeWidth="2"/>
            {/* Folded corner */}
            <path d="M30 32 L34 28 L30 28 Z" fill="#DDDDDD" stroke="black" strokeWidth="2"/>
            {/* Lines */}
            <line x1="18" y1="16" x2="30" y2="16" stroke="black" strokeWidth="1"/>
            <line x1="18" y1="20" x2="30" y2="20" stroke="black" strokeWidth="1"/>
            <line x1="18" y1="24" x2="26" y2="24" stroke="black" strokeWidth="1"/>
          </svg>
        );

      case 'disk':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Disk body */}
            <rect x="10" y="14" width="28" height="22" fill="white" stroke="black" strokeWidth="2"/>
            {/* Label area */}
            <rect x="14" y="18" width="20" height="6" fill="#DDDDDD" stroke="black" strokeWidth="1"/>
            {/* Shutter */}
            <rect x="14" y="28" width="20" height="4" fill="black"/>
          </svg>
        );

      case 'trash':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Trash can body */}
            <path d="M16 20 L18 36 L30 36 L32 20 Z" fill="white" stroke="black" strokeWidth="2"/>
            {/* Trash can lid */}
            <rect x="14" y="18" width="20" height="3" fill="#DDDDDD" stroke="black" strokeWidth="2"/>
            {/* Handle */}
            <path d="M20 18 L20 16 L28 16 L28 18" stroke="black" strokeWidth="2" fill="none"/>
            {/* Lines on can */}
            <line x1="20" y1="24" x2="20" y2="32" stroke="black" strokeWidth="1"/>
            <line x1="24" y1="24" x2="24" y2="32" stroke="black" strokeWidth="1"/>
            <line x1="28" y1="24" x2="28" y2="32" stroke="black" strokeWidth="1"/>
          </svg>
        );
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      setHasDragged(true);
      userHasDragged.current = true; // Mark that user has manually positioned this icon
      setPosition({
        x: e.clientX - dragRef.current.startX,
        y: e.clientY - dragRef.current.startY,
      });
    };

    const handleGlobalMouseUp = () => {
      // If we didn't drag, treat it as a click
      if (!hasDragged && onClick) {
        onClick();
      }
      setIsDragging(false);
      setHasDragged(false);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, hasDragged, onClick]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent window dragging
    e.preventDefault();
    setIsDragging(true);
    setHasDragged(false);
    dragRef.current = {
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
    };
  };

  return (
    <div
      className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 select-none"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: isDragging ? 50 : 10,
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="w-12 h-12">
        {renderIcon()}
      </div>
      <div className="text-xs text-black bg-white px-1 border border-black text-center w-[90px] break-words leading-tight">
        {label}
      </div>
    </div>
  );
}
