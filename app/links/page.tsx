import HyperCardNav from '@/components/HyperCardNav';
import HyperCardButton from '@/components/HyperCardButton';
import HyperCardField from '@/components/HyperCardField';

export const metadata = {
  title: 'Links | Andrew Udell',
  description: 'Find me around the web',
};

export default function LinksPage() {
  const links = [
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'GitHub', url: 'https://github.com', icon: '💻' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Email', url: 'mailto:hello@example.com', icon: '📧' },
    { name: 'RSS Feed', url: '/rss.xml', icon: '📡' },
  ];

  return (
    <>
      <HyperCardNav />
      <main>
        <h1 className="text-3xl font-bold mb-6">Links</h1>

        <HyperCardField className="mb-6">
          <p className="text-sm mb-4 leading-relaxed">
            Find me around the web. Click any button to visit:
          </p>

          <div className="space-y-3">
            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-2xl w-10">{link.icon}</span>
                <HyperCardButton href={link.url}>
                  {link.name}
                </HyperCardButton>
              </div>
            ))}
          </div>
        </HyperCardField>

        <HyperCardField>
          <p className="text-xs text-gray-600">
            💡 Tip: Bookmark this page for quick access to all my profiles!
          </p>
        </HyperCardField>
      </main>
    </>
  );
}
