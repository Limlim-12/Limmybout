'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl?: string;
  githubUrl?: string;
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
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors duration-300"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/5 text-slate-300 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="flex gap-4 mt-auto">
          {projectUrl && (
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20">
                <span>Live Demo</span> 🚀
              </span>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/10">
                <span>Code</span> 💻
              </span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}