import HyperCardNav from '@/components/HyperCardNav';
import HyperCardField from '@/components/HyperCardField';

export const metadata = {
  title: 'Angel Investments | Andrew Udell',
  description: 'Angel investments portfolio',
};

export default function InvestmentsPage() {
  const investments = [
    {
      company: 'Company Name',
      description: 'Brief description of what they do',
      year: '2024',
    },
    // Add more investments here
  ];

  return (
    <>
      <HyperCardNav />
      <main>
        <h1 className="text-3xl font-bold mb-6">Angel Investments</h1>

        <HyperCardField className="mb-6">
          <p className="leading-relaxed text-sm">
            Companies I&apos;ve invested in and advise.
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
