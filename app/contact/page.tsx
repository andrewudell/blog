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
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-20">Email:</span>
              <HyperCardButton href="mailto:andrewkudell@gmail.com">
                andrewkudell@gmail.com
              </HyperCardButton>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-20">Twitter:</span>
              <HyperCardButton href="https://x.com/andrewudell">
                @andrewudell
              </HyperCardButton>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-20">GitHub:</span>
              <HyperCardButton href="https://github.com/andrewudell">
                @andrewudell
              </HyperCardButton>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-20">Linkedin:</span>
              <HyperCardButton href="https://www.linkedin.com/in/andrewudell/">
                Connect
              </HyperCardButton>
            </div>
          </div>
        </HyperCardField>
      </main>
    </>
  );
}
