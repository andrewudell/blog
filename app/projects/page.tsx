import HyperCardNav from '@/components/HyperCardNav';
import Image from 'next/image';

export const metadata = {
  title: 'Projects | Andrew Udell',
  description: 'Things I\'ve built',
};

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Hand-Forged Japanese Knives',
      description: 'Convinced one of the only knifemakers (Drew Hash) in SF to teach Andy Scheff (close friend) and I how to forge knives. Absolute blast and it turned out amazing.',
      image: '/projects/knives.jpg',
    },
    {
      name: 'Wooden Surfboard',
      description: 'Took a week-long workshop in York, Maine with the guys over at Grain. Almost exclusively hand-tools...lots of planing and sanding but so fun and the board is amazing. Incredible experience and some fun surf/tennis nearby.',
      image: '/projects/surfboard.jpg',
    },
    {
      name: 'Guitar',
      description: 'I was obsesed with guitar from the ages of 10-18 and always wanted to build one. I cold emailed Roger Sadowsky who is one the best luthiers in the US and he let me come to his shop on weekends to put this guy together in Dumbo. While I don\'t play much anymore, I still absolutely love this guitar.',
      image: '/projects/guitar.jpg',
    },
    {
      name: 'Go-Cart',
      description: 'I annoyed the shit out of my parents until they let me buy a go-cart kit online and I put it together at my mom\'s studio with one of her studio-mates. I was dead-set on the rainbow paint job and I decided to put the number 7 there to commemorate my age when I built it.',
      image: '/projects/gocart.png',
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
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="w-full h-auto border-2 border-black"
                    style={{
                      boxShadow: '2px 2px 0px #000000'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                  <p className="text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
