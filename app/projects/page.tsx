import HyperCardNav from '@/components/HyperCardNav';
import HyperCardButton from '@/components/HyperCardButton';

export const metadata = {
  title: 'Projects | Andrew Udell',
  description: 'Things I\'ve built',
};

export default function ProjectsPage() {
  const projects = [
    {
      name: 'HyperCard Blog',
      description: 'A retro blog built with Next.js, styled to look like classic HyperCard.',
      link: '#',
    },
    {
      name: 'Project Two',
      description: 'Description of another cool project you&apos;ve worked on.',
      link: '#',
    },
    {
      name: 'Project Three',
      description: 'Yet another interesting project worth showcasing.',
      link: '#',
    },
  ];

  return (
    <>
      <HyperCardNav />
      <main>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <hr className="border-t-2 border-black mb-6" />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="border-3 border-black bg-white p-5"
              style={{
                boxShadow: 'inset 3px 3px 0px #FFFFFF, inset -3px -3px 0px #CCCCCC, 3px 3px 0px #000000, 4px 4px 0px rgba(0, 0, 0, 0.4)'
              }}
            >
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-sm mb-4 leading-relaxed text-gray-700">
                {project.description}
              </p>
              <HyperCardButton href={project.link}>
                View Project
              </HyperCardButton>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
