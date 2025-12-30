import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="mb-8 pt-8">
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-900 transition-colors text-sm inline-flex items-center gap-1"
      >
        ← Back
      </Link>
    </nav>
  );
}
