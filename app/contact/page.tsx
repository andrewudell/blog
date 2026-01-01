import HyperCardNav from '@/components/HyperCardNav';
import HyperCardButton from '@/components/HyperCardButton';
import HyperCardField from '@/components/HyperCardField';

export const metadata = {
  title: 'Contact | Andrew Udell',
  description: 'Get in touch',
};

export default function ContactPage() {
  return (
    <>
      <HyperCardNav />
      <main>
        <h1 className="text-3xl font-bold mb-6">Contact</h1>

        <HyperCardField className="mb-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-bold text-sm sm:w-24">Email:</span>
              <HyperCardButton href="mailto:andrewkudell@gmail.com" className="w-full sm:w-auto">
                andrewkudell@gmail.com
              </HyperCardButton>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-bold text-sm sm:w-24">Twitter:</span>
              <HyperCardButton href="https://x.com/andrewudell" className="w-full sm:w-auto">
                @andrewudell
              </HyperCardButton>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-bold text-sm sm:w-24">GitHub:</span>
              <HyperCardButton href="https://github.com/andrewudell" className="w-full sm:w-auto">
                @andrewudell
              </HyperCardButton>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-bold text-sm sm:w-24">LinkedIn:</span>
              <HyperCardButton href="https://www.linkedin.com/in/andrewudell/" className="w-full sm:w-auto">
                /in/andrewudell/
              </HyperCardButton>
            </div>
          </div>
        </HyperCardField>
      </main>
    </>
  );
}
