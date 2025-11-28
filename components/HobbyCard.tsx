'use client';

import { motion } from 'framer-motion';

type HobbyCardProps = {
  title: string;
  description: string;
  emoji: string;
};

export default function HobbyCard({ title, description, emoji }: HobbyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="relative group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors duration-300 text-center"
    >
      {/* Background Gradient Spot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-purple-500/20 rounded-full blur-[50px] group-hover:bg-purple-500/40 transition-all duration-500" />

      <div className="relative z-10">
        <span className="text-6xl mb-6 block drop-shadow-2xl filter group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </span>
        
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}