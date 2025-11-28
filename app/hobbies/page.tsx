'use client';

import HobbyCard from "@/components/HobbyCard";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
};

export default function Hobbies() {
  return (
    <div className="max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block">
          Beyond the Code
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          I believe that downtime fuels creativity. When I'm not building software, 
          this is how I recharge my batteries and find inspiration.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        
        <motion.div variants={item}>
          <HobbyCard
            title="Online Gaming"
            emoji="🎮"
            description="Immersing myself in competitive worlds. It sharpens my strategic thinking and reflex—plus, it's just fun to win."
          />
        </motion.div>

        <motion.div variants={item}>
          <HobbyCard
            title="Socializing"
            emoji="🍻"
            description="Connecting with friends over drinks. I believe the best ideas often come from great conversations away from the keyboard."
          />
        </motion.div>

        <motion.div variants={item}>
          <HobbyCard
            title="Tech Exploration"
            emoji="🚀"
            description="I'm a gadget geek at heart. I spend my free time keeping up with the latest hardware trends and future tech."
          />
        </motion.div>

      </motion.div>
    </div>
  );
}