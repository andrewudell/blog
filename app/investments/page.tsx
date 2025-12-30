import HyperCardNav from '@/components/HyperCardNav';
import HyperCardField from '@/components/HyperCardField';

export const metadata = {
  title: 'Angel Investments | Andrew Udell',
  description: 'Angel investments portfolio',
};

export default function InvestmentsPage() {
  const investments = [
    {
      company: 'The Browser Company (acq\'d)',
      description: 'New type of browser. Josh Miller was my boss at Thrive and just a true genius at all things product and storytelling. Backed by Thrive, Pace Capital, and more.',
      year: '2021',
    },
    {
      company: 'Comulate',
      description: 'Revenue automation for insurance brokers. Jordan is a longtime friend and absolute beast. Backed by Bond and Spark.',
      year: '2022',
    },
    {
      company: 'Span',
      description: 'Dev intelligence platform. J Zac Stein is a mentor/friend and would never bet against him. Backed by Alt Capital, Craft, BoxGroup.',
      year: '2024',
    },
  ];

  return (
    <>
      <HyperCardNav />
      <main>
        <h1 className="text-3xl font-bold mb-6">Angel Investments</h1>

        <HyperCardField className="mb-6">
          <p className="leading-relaxed text-sm">
            Companies I&apos;ve invested in.
          </p>
        </HyperCardField>

        <div className="space-y-4">
          {investments.map((investment, index) => (
            <HyperCardField key={index}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{investment.company}</h3>
                <span className="text-xs text-gray-600">{investment.year}</span>
              </div>
              <p className="text-sm leading-relaxed">{investment.description}</p>
            </HyperCardField>
          ))}
        </div>
      </main>
    </>
  );
}
