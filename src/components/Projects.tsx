import Image from 'next/image';
import Link from 'next/link';
import { projects, type Project, type ProjectLink } from '@/data/projects';
import { ExternalLinkIcon } from './icons';

const ProjectLinkButton = ({ link, primary }: { link: ProjectLink; primary: boolean }) => {
  const className = primary
    ? 'inline-flex items-center gap-1.5 rounded-full gradient-bg px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105'
    : 'inline-flex items-center gap-1.5 rounded-full border-2 border-gray-900 px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white';

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
        <ExternalLinkIcon size={14} />
        <span className="sr-only">(nouvel onglet)</span>
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
};

const ProjectCard = ({ project, featured }: { project: Project; featured: boolean }) => (
  <article
    className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg ${
      featured ? 'lg:flex-row' : ''
    }`}
  >
    <div className={`relative aspect-[16/9] overflow-hidden bg-gray-100 ${featured ? 'lg:aspect-auto lg:w-3/5' : ''}`}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes={featured ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
        className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>

    <div className={`flex flex-1 flex-col p-6 ${featured ? 'lg:p-10' : ''}`}>
      <p className="text-sm font-semibold uppercase tracking-wide text-purple-800">{project.context}</p>
      <h3 className={`mt-2 font-bold text-black ${featured ? 'text-3xl' : 'text-2xl'}`}>{project.title}</h3>
      <p className="mt-3 text-gray-800 leading-relaxed">{project.problem}</p>
      {project.note && <p className="mt-2 text-sm text-gray-600">{project.note}</p>}

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.links.map((link, i) => (
          <ProjectLinkButton key={link.href} link={link} primary={i === 0} />
        ))}
      </div>
    </div>
  </article>
);

type ProjectsProps = { asPage?: boolean };

const Projects = ({ asPage = false }: ProjectsProps) => {
  const Heading = asPage ? 'h1' : 'h2';
  return (
    <section id="projets" className={asPage ? 'pt-28 pb-20' : 'py-20'}>
      <div className="container mx-auto px-4">
        <Heading className="text-4xl md:text-5xl font-bold mb-4 text-center text-black">Projets</Heading>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-700">
          Des projets que vous pouvez vérifier : chacun a une capture réelle et un lien qui fonctionne.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.slug} className={index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}>
              <ProjectCard project={project} featured={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
