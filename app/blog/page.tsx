'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: "My Journey into Web Development",
    date: "April, 2025",
    excerpt: "Why I decided to switch careers and dive into the world of coding, starting with Python and moving to full-stack.",
    category: "Career"
  },
  {
    id: 2,
    title: "Building 'Kick': Lessons Learned",
    date: "October 22, 2025",
    excerpt: "Reflecting on the challenges of building a TSR system and how Flask made the backend development smoother.",
    category: "DevLog"
  },
  {
    id: 3,
    title: "Why I Love Next.js",
    date: "June, 2025",
    excerpt: "Moving from vanilla HTML/CSS to a modern framework like Next.js has been a game-changer for my workflow.",
    category: "Tech"
  }
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen py-12 px-4">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
          Thoughts & Code
        </h1>
      </motion.div>

      {/* 🚧 Construction Banner 🚧 */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-16 p-6 md:p-8 bg-yellow-500/5 backdrop-blur-md border border-yellow-500/20 rounded-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/50" />
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="text-5xl p-4 bg-yellow-500/10 rounded-full">🚧</div>
          <div>
            <h3 className="text-xl font-bold text-yellow-200 mb-2">Content Under Construction</h3>
            <p className="text-yellow-100/70 leading-relaxed">
              I'm currently curating my best stories and technical guides. 
              The posts below are just <span className="text-white font-semibold">previews</span> of what is coming soon. 
              Check back later for the full articles!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Blog List (Previews) */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {posts.map((post) => (
          <motion.div
            key={post.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-slate-500 text-sm font-mono">{post.date}</span>
              </div>

              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                <Link href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                {post.excerpt}
              </p>

              <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                Coming Soon
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}