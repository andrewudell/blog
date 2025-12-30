import HyperCardButton from './HyperCardButton';

export default function HyperCardNav() {
  return (
    <nav className="mb-8">
      <HyperCardButton href="/" variant="nav">
        ← Back
      </HyperCardButton>
    </nav>
  );
}
