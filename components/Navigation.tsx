import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="mb-8 pt-8">
      <Link
        href="/"
        className="text-notebook-margin hover:text-red-600 transition-colors text-lg"
      >
        ← Back to Table of Contents
      </Link>
    </nav>
  );
}
