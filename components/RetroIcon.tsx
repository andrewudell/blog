// Simple retro bitmap-style icons using CSS
export default function RetroIcon({ type }: { type: string }) {
  const renderIcon = () => {
    switch (type) {
      case 'about':
        // Book icon - simple rectangles
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-10 h-12 border-3 border-black bg-white relative">
              <div className="absolute top-2 left-2 right-2 h-1 bg-black"></div>
              <div className="absolute top-5 left-2 right-2 h-1 bg-black"></div>
              <div className="absolute top-8 left-2 right-2 h-1 bg-black"></div>
            </div>
          </div>
        );

      case 'writing':
        // Pencil icon
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative" style={{ transform: 'rotate(-45deg)' }}>
              <div className="w-3 h-10 bg-black"></div>
              <div className="w-3 h-3 bg-black" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}></div>
            </div>
          </div>
        );

      case 'contact':
        // Envelope icon
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-12 h-9 border-3 border-black bg-white relative">
              <div className="absolute top-0 left-0 right-0">
                <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[18px] border-t-black"></div>
              </div>
            </div>
          </div>
        );

      case 'projects':
        // Folder icon
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative">
              <div className="w-5 h-2 bg-black mb-0"></div>
              <div className="w-12 h-9 border-3 border-black bg-white"></div>
            </div>
          </div>
        );

      case 'links':
        // Chain link icon
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="flex items-center gap-1">
              <div className="w-5 h-7 border-3 border-black rounded-full"></div>
              <div className="w-5 h-7 border-3 border-black rounded-full"></div>
            </div>
          </div>
        );

      case 'guestbook':
        // Document/paper icon
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-10 h-12 border-3 border-black bg-white relative">
              <div className="absolute top-3 left-2 right-2 h-1 bg-black"></div>
              <div className="absolute top-5 left-2 right-2 h-1 bg-black"></div>
              <div className="absolute top-7 left-2 right-2 h-1 bg-black"></div>
              <div className="absolute top-9 left-2 right-4 h-1 bg-black"></div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderIcon();
}
