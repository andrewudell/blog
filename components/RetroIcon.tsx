// Retro bitmap-style icons with authentic Mac/HyperCard aesthetic
export default function RetroIcon({ type }: { type: string }) {
  const renderIcon = () => {
    switch (type) {
      case 'about':
        // Open book with pages
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              {/* Book spine */}
              <rect x="22" y="14" width="4" height="22" fill="black"/>
              {/* Left page */}
              <path d="M10 14 L22 14 L22 36 L12 34 Z" fill="white" stroke="black" strokeWidth="2"/>
              <line x1="14" y1="18" x2="20" y2="18" stroke="black" strokeWidth="1"/>
              <line x1="14" y1="22" x2="20" y2="22" stroke="black" strokeWidth="1"/>
              <line x1="14" y1="26" x2="20" y2="26" stroke="black" strokeWidth="1"/>
              {/* Right page */}
              <path d="M26 14 L38 14 L36 34 L26 36 Z" fill="white" stroke="black" strokeWidth="2"/>
              <line x1="28" y1="18" x2="34" y2="18" stroke="black" strokeWidth="1"/>
              <line x1="28" y1="22" x2="34" y2="22" stroke="black" strokeWidth="1"/>
              <line x1="28" y1="26" x2="34" y2="26" stroke="black" strokeWidth="1"/>
            </svg>
          </div>
        );

      case 'writing':
        // Pencil with eraser
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <g transform="rotate(-45 24 24)">
                {/* Eraser */}
                <rect x="20" y="8" width="8" height="5" fill="white" stroke="black" strokeWidth="2"/>
                <line x1="20" y1="10" x2="28" y2="10" stroke="black" strokeWidth="1"/>
                {/* Metal band */}
                <rect x="20" y="13" width="8" height="2" fill="black"/>
                {/* Pencil body */}
                <rect x="20" y="15" width="8" height="16" fill="white" stroke="black" strokeWidth="2"/>
                {/* Wood texture lines */}
                <line x1="22" y1="18" x2="26" y2="18" stroke="black" strokeWidth="1"/>
                <line x1="22" y1="22" x2="26" y2="22" stroke="black" strokeWidth="1"/>
                <line x1="22" y1="26" x2="26" y2="26" stroke="black" strokeWidth="1"/>
                {/* Pencil tip */}
                <path d="M20 31 L24 37 L28 31 Z" fill="black"/>
              </g>
            </svg>
          </div>
        );

      case 'contact':
        // Envelope with stamp
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              {/* Envelope body */}
              <rect x="8" y="16" width="32" height="20" fill="white" stroke="black" strokeWidth="2"/>
              {/* Envelope flap */}
              <path d="M8 16 L24 28 L40 16" stroke="black" strokeWidth="2" fill="none"/>
              <path d="M8 16 L24 26 L40 16 L24 16 Z" fill="white" stroke="black" strokeWidth="2"/>
              {/* Stamp */}
              <rect x="32" y="19" width="6" height="5" fill="white" stroke="black" strokeWidth="1"/>
              <line x1="33" y1="20" x2="37" y2="20" stroke="black" strokeWidth="1"/>
              <line x1="33" y1="22" x2="37" y2="22" stroke="black" strokeWidth="1"/>
            </svg>
          </div>
        );

      case 'projects':
        // Folder with papers
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              {/* Folder tab */}
              <path d="M10 18 L10 16 L22 16 L24 18 Z" fill="white" stroke="black" strokeWidth="2"/>
              {/* Folder body */}
              <rect x="10" y="18" width="30" height="18" fill="white" stroke="black" strokeWidth="2"/>
              {/* Papers inside with hatching */}
              <line x1="14" y1="23" x2="36" y2="23" stroke="black" strokeWidth="1"/>
              <line x1="14" y1="26" x2="32" y2="26" stroke="black" strokeWidth="1"/>
              <line x1="14" y1="29" x2="36" y2="29" stroke="black" strokeWidth="1"/>
              <line x1="14" y1="32" x2="28" y2="32" stroke="black" strokeWidth="1"/>
            </svg>
          </div>
        );

      case 'links':
        // Chain links
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              {/* Left link */}
              <ellipse cx="18" cy="24" rx="6" ry="10" fill="white" stroke="black" strokeWidth="2"/>
              <ellipse cx="18" cy="24" rx="3" ry="7" fill="white" stroke="black" strokeWidth="1"/>
              {/* Right link */}
              <ellipse cx="30" cy="24" rx="6" ry="10" fill="white" stroke="black" strokeWidth="2"/>
              <ellipse cx="30" cy="24" rx="3" ry="7" fill="white" stroke="black" strokeWidth="1"/>
              {/* Connection */}
              <rect x="21" y="22" width="6" height="4" fill="black"/>
            </svg>
          </div>
        );

      case 'guestbook':
        // Document with writing and folded corner
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              {/* Paper body */}
              <path d="M12 10 L36 10 L36 32 L32 36 L12 36 Z" fill="white" stroke="black" strokeWidth="2"/>
              {/* Folded corner */}
              <path d="M32 36 L36 32 L32 32 Z" fill="black"/>
              {/* Writing lines */}
              <line x1="16" y1="16" x2="32" y2="16" stroke="black" strokeWidth="1"/>
              <line x1="16" y1="20" x2="30" y2="20" stroke="black" strokeWidth="1"/>
              <line x1="16" y1="24" x2="32" y2="24" stroke="black" strokeWidth="1"/>
              <line x1="16" y1="28" x2="28" y2="28" stroke="black" strokeWidth="1"/>
              {/* Signature scribble */}
              <path d="M16 32 Q20 30 24 32" stroke="black" strokeWidth="1" fill="none"/>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return renderIcon();
}
