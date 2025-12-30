import Link from 'next/link';
import RetroIcon from './RetroIcon';

interface HyperCardIconProps {
  href: string;
  iconType: string;
  label: string;
}

export default function HyperCardIcon({ href, iconType, label }: HyperCardIconProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 p-4 hover:bg-gray-100 group"
    >
      {/* Icon container with retro bitmap style */}
      <div
        className="w-16 h-16 md:w-20 md:h-20 border-3 border-black bg-white flex items-center justify-center cursor-pointer"
        style={{
          boxShadow: 'inset 2px 2px 0px #FFFFFF, inset -2px -2px 0px #CCCCCC, 2px 2px 0px #000000'
        }}
      >
        <RetroIcon type={iconType} />
      </div>
      {/* Label */}
      <span className="text-xs md:text-sm font-bold text-black text-center">
        {label}
      </span>
    </Link>
  );
}
