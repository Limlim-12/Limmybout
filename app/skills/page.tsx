'use client';

import SkillCard from "@/components/SkillCard";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 min-h-screen">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent inline-block">
          Technical Arsenal
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The tools, languages, and frameworks I use to bring ideas to life. 
          Always learning, always upgrading.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-20"
      >
        
        {/* Category: Programming Languages */}
        <section>
          <motion.div variants={item} className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Programming Languages</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-emerald-500/50 to-transparent" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={item}>
              <SkillCard 
                title="Python" 
                level="Proficient" 
                description="My go-to for backend logic, automation scripts, and data processing using Flask." 
              />
            </motion.div>
            <motion.div variants={item}>
              <SkillCard 
                title="JavaScript" 
                level="Intermediate" 
                description="Building dynamic front-ends and interactive elements for modern web apps." 
              />
            </motion.div>
            <motion.div variants={item}>
              <SkillCard 
                title="HTML & CSS" 
                level="Proficient" 
                description="The backbone of the web. Semantic markup and responsive, modern styling." 
              />
            </motion.div>
          </div>
        </section>

        {/* Category: Frameworks & Libraries */}
        <section>
          <motion.div variants={item} className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Frameworks & Libraries</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={item}>
              <SkillCard 
                title="Next.js" 
                level="Beginner" 
                description="Leveraging server-side rendering and static site generation for performance." 
              />
            </motion.div>
            <motion.div variants={item}>
              <SkillCard 
                title="React" 
                level="Beginner" 
                description="Creating reusable component-based UIs and managing complex state." 
              />
            </motion.div>
            <motion.div variants={item}>
              <SkillCard 
                title="Tailwind CSS" 
                level="Intermediate" 
                description="Rapidly styling interfaces with a utility-first approach and custom configs." 
              />
            </motion.div>
          </div>
        </section>

        {/* Category: Tools & Other */}
        <section>
          <motion.div variants={item} className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Tools & Workflow</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={item}>
              <SkillCard 
                title="Git & GitHub" 
                level="Intermediate" 
                description="Version control, branching strategies, and collaborative development." 
              />
            </motion.div>
            <motion.div variants={item}>
              <SkillCard 
                title="VS Code" 
                level="Proficient" 
                description="My editor of choice, customized with extensions for maximum productivity." 
              />
            </motion.div>
            <motion.div variants={item}>
              <SkillCard 
                title="MySQL" 
                level="Intermediate" 
                description="Designing schemas and managing relational databases for application data." 
              />
            </motion.div>
          </div>
        </section>

      </motion.div>
    </div>
  );
}