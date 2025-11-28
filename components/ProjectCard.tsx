// in components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string; // Path like /images/project-kick.jpg
  tags: string[];
  projectUrl?: string; // Optional: link to the live demo
  githubUrl?: string;  // Optional: link to the GitHub repo
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Project Title */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        {/* Project Tags (Skills) */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>

        {/* Project Links */}
        <div className="flex gap-4 mt-auto">
          {projectUrl && (
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              <span className="text-blue-600 hover:text-blue-800 font-semibold">
                Live Demo
              </span>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="text-gray-800 hover:text-black font-semibold">
                View Code
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}