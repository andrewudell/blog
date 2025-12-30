import HyperCardIcon from '@/components/HyperCardIcon';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-full">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Andrew Udell
        </h1>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-2xl">
        <HyperCardIcon
          href="/about"
          iconType="about"
          label="About"
        />
        <HyperCardIcon
          href="/writing"
          iconType="writing"
          label="Writing"
        />
        <HyperCardIcon
          href="/investments"
          iconType="investments"
          label="Angel Investments"
        />
        <HyperCardIcon
          href="/contact"
          iconType="contact"
          label="Contact"
        />
        <HyperCardIcon
          href="/projects"
          iconType="projects"
          label="Projects"
        />
        <HyperCardIcon
          href="/guestbook"
          iconType="guestbook"
          label="Guestbook"
        />
      </div>
    </main>
  );
}
