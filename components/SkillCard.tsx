'use client';

import { motion } from 'framer-motion';

type SkillCardProps = {
  title: string;
  level: string;
  description: string;
};

export default function SkillCard({ title, level, description }: SkillCardProps) {
  // Determine color based on level
  const colorClass = 
    level === 'Proficient' ? 'border-green-500/50 shadow-green-500/20' :
    level === 'Intermediate' ? 'border-blue-500/50 shadow-blue-500/20' :
    'border-purple-500/50 shadow-purple-500/20';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-slate-900/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-opacity-100 ${colorClass} hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]`}
    >
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider bg-white/10 ${
            level === 'Proficient' ? 'text-green-400' : 
            level === 'Intermediate' ? 'text-blue-400' : 'text-purple-400'
        }`}>
          {level}
        </span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}