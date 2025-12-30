import HyperCardNav from '@/components/HyperCardNav';
import HyperCardField from '@/components/HyperCardField';

export const metadata = {
  title: 'About | Andrew Udell',
  description: 'About Andrew Udell',
};

export default function AboutPage() {
  return (
    <>
      <HyperCardNav />
      <main>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>

        <HyperCardField className="mb-6">
          <h2 className="text-xl font-bold mb-3">Andrew Udell</h2>
          <p className="mb-3 leading-relaxed">
            Welcome to my personal HyperCard stack! I'm a developer, designer,
            and technology enthusiast who loves building things for the web.
          </p>
          <p className="leading-relaxed">
            I write about technology, design, and things I'm learning along the way.
            This site is built as a tribute to HyperCard, the revolutionary software
            that inspired a generation of creators.
          </p>
        </HyperCardField>

        <HyperCardField>
          <h3 className="text-lg font-bold mb-2">Interests</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Web Development</li>
            <li>User Interface Design</li>
            <li>Retro Computing</li>
            <li>Open Source Software</li>
          </ul>
        </HyperCardField>
      </main>
    </>
  );
}
