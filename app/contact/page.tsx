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
          <h2 className="text-lg font-bold mb-3">Get in Touch</h2>
          <p className="mb-4 leading-relaxed text-sm">
            Feel free to reach out through any of these channels:
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-20">Email:</span>
              <HyperCardButton href="mailto:hello@example.com">
                Send Mail
              </HyperCardButton>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-20">Twitter:</span>
              <HyperCardButton href="https://twitter.com">
                @username
              </HyperCardButton>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-20">GitHub:</span>
              <HyperCardButton href="https://github.com">
                @username
              </HyperCardButton>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-20">LinkedIn:</span>
              <HyperCardButton href="https://linkedin.com">
                Connect
              </HyperCardButton>
            </div>
          </div>
        </HyperCardField>

        <HyperCardField>
          <p className="text-xs text-gray-600 italic">
            All messages are welcome! Response time: Usually within 24-48 hours.
          </p>
        </HyperCardField>
      </main>
    </>
  );
}
