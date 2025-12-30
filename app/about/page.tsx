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
            Currently: COO at Parabola.
            Past: Investing at Thrive Capital, Product and Growth at Dropbox, and Computational Social Science at Williams. 
          </p>
          <p className="leading-relaxed">
            This blog is primarily motivated by having fun playing with Claude/LLMs, but I do want to start writing more about everything I&apos;ve learned running a startup!
          </p>
        </HyperCardField>
      </main>
    </>
  );
}
