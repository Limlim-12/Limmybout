'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
          The Developer Behind the Code
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 blur-[60px] rounded-full transform scale-90" />
          
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl z-10 bg-slate-900"
          >
            <Image
              src="/images/profile.jpg"
              alt="Lim - Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Column: Bio + Resume Button */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 text-lg text-slate-300 leading-relaxed bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative shadow-xl"
        >
           <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-2xl -z-10" />

          <p>
            Hello, I'm <span className="text-white font-bold">Lim</span>! I'm a <span className="text-blue-400 font-medium">Computer Engineering graduate</span> currently working as a Technical Support Specialist. I'm a passionate, aspiring developer, and this site is a showcase of my journey toward my dream of becoming a <span className="text-purple-400 font-semibold">Software Engineer</span>.
          </p>
          <p>
            I've always found coding interesting because of its power to make our lives easier and more comfortable. I know the path is challenging, but I'm a firm believer that <span className="italic text-white">"if you truly love what you are doing, you're living the dream."</span>
          </p>
          <p>
            For me, that passion comes from the creative process. I love bringing new ideas to life and exploring their full potential through code. My current goal is to grow into a <span className="text-teal-400 font-semibold">full-stack developer</span>, capable of building and managing entire applications.
          </p>
          <p>
            When I'm not at the computer, you can usually find me unwinding with some <span className="text-pink-400 font-medium">online games</span> or relaxing and socializing with friends.
          </p>

          {/* === HOLOGRAPHIC RESUME BUTTON === */}
          <div className="pt-6">
            <a href="/resume.pdf" download="Limuel_CV.pdf">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-500 hover:to-purple-500 border border-white/20 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-3 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume / CV
              </motion.button>
            </a>
          </div>

        </motion.div>

      </div>
    </div>
  );
}