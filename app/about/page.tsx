'use client';

import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion'; // Import hooks for scroll animation
import { useRef } from 'react';

// --- YOUR REAL JOURNEY DATA ---
const timelineEvents = [
  {
    period: "June 2024",
    title: "BS Computer Engineering",
    role: "Civil Service Prof. Passer",
    description: "Graduated with a degree in Bachelor of Science in Computer Engineering. Validated my professional capability by passing the Civil Service Exam (Professional Level).",
    tech: ["Engineering", "Professional Eligibility"],
    icon: "🎓"
  },
  {
    period: "August 2024",
    title: "Full Stack Bootcamp",
    role: "Kidapawan City",
    description: "Attended a Full Stack Developer Bootcamp. While the event itself had its challenges, it served as a critical turning point that solidified my determination to pursue software development.",
    tech: ["Full Stack Basics", "Resilience"],
    icon: "💻"
  },
  {
    period: "Nov 2024 - April 2025",
    title: "Concentrix",
    role: "Advisor 1 - CSR",
    description: "Worked as a Customer Service Representative in Davao City. Developed high-level communication skills, patience, and the ability to handle complex client interactions under pressure.",
    tech: ["Client Relations", "Communication", "Problem Solving"],
    icon: "🎧"
  },
  {
    period: "May 2025 - Nov 2025",
    title: "Corona Telecom",
    role: "Technical Support Specialist",
    description: "Joined Apollo Global Corporation as a specialist. Focused on diagnosing technical faults, troubleshooting network issues, and bridging the gap between users and engineering teams.",
    tech: ["Technical Support", "Network Diagnostics", "Apollo Global"],
    icon: "🛠️"
  },
  {
    period: "Nov 2025 - Present",
    title: "Cargo Data Exchange Center",
    role: "Product Support Specialist",
    description: "Currently ensuring the stability and reliability of enterprise product data. Navigating complex systems and providing high-tier support for Apollo Global Corporation.",
    tech: ["Product Support", "Enterprise Systems", "Data Analysis"],
    icon: "🚀"
  }
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen py-12 px-4 max-w-6xl mx-auto">
      
      {/* --- HERO SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
          The Developer Behind the Code
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
        {/* Image */}
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

        {/* Bio */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 text-lg text-slate-300 leading-relaxed bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative shadow-xl"
        >
           <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-2xl -z-10" />

          <p>
            Hello, I'm <span className="text-white font-bold">Lim</span>! I'm a <span className="text-blue-400 font-medium">Computer Engineering graduate</span> currently working as a Product Support Specialist. I'm a passionate, aspiring developer, and this site is a showcase of my journey toward my dream of becoming a <span className="text-purple-400 font-semibold">Software Engineer</span>.
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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

      {/* --- UPGRADED TIMELINE SECTION --- */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Journey Protocol</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>
        
        <div className="relative">
          {/* Animated Glowing Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent origin-top md:left-1/2 md:-ml-[1px]" 
          />
          {/* Base Line (Faint) */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/5 md:left-1/2 md:-ml-[1px]" />


          <div className="space-y-16"> {/* Increased spacing for better flow */}
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered delay
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot (The "Node") - Now Pulsing */}
                <div className="absolute left-0 md:left-1/2 md:-ml-4 w-12 h-12 flex items-center justify-center bg-slate-900 border-2 border-blue-500 rounded-full z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <span className="text-lg">{event.icon}</span>
                  {/* Pulse Effect */}
                  <span className="absolute w-full h-full rounded-full bg-blue-500/30 animate-ping opacity-75"></span>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />

                {/* Content Card - Enhanced Hover */}
                <div className="flex-1 ml-16 md:ml-0"> {/* Adjusted margin for larger dot */}
                  <motion.div 
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                        <span className="inline-block px-3 py-1 text-xs font-mono font-bold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">
                        {event.period}
                        </span>
                        <span className="text-xs text-purple-400 font-bold uppercase tracking-wider bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                            {event.role}
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed text-sm mb-4">
                      {event.description}
                    </p>

                    {/* Tech Stack Mini-Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {event.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-slate-800 text-slate-400 border border-slate-700 font-mono hover:bg-slate-700 hover:text-white transition-colors cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}