'use client';

import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 1. Define Categories
const categories = ["All", "Full Stack", "Python", "Creative"];

// 2. Define Project Data with Categories
const allProjects = [
  {
    id: 1,
    title: "Kick: TSR Ticketing System",
    category: "Full Stack",
    description: "A full-stack Flask application for Technical Support teams. Features dashboard, auto-assignment, and rebate calculator.",
    imageUrl: "/images/kick.jpg",
    tags: ["Python", "Flask", "PostgreSQL", "Bootstrap"],
    githubUrl: "https://github.com/Limlim-12/kick-keep-in-track-"
  },
  {
    id: 2,
    title: "LiMoney: Finance Tracker",
    category: "Python",
    description: "A personal finance app built with Flask and SQLite. Track income/expenses, manage loans, and set savings goals.",
    imageUrl: "/images/limoney.jpg",
    tags: ["Python", "Flask", "SQLite", "Chart.js"],
    githubUrl: "https://github.com/Limlim-12/limoney-tracker"
  },
  {
    id: 3,
    title: "DoNow Productivity App",
    category: "Creative",
    description: "A minimalist to-do app with Focus Zone (Pomodoro), dark mode, voice input, and charts.",
    imageUrl: "/images/donow.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Chart.js"],
    githubUrl: "https://github.com/Limlim-12/donow-app"
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredProjects = allProjects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto min-h-screen py-12 px-4">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
          My Projects
        </h1>
        <p className="text-slate-400 text-lg">
          Filter by category to explore my different technical skills.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border backdrop-blur-md relative overflow-hidden group ${
              activeCategory === cat 
                ? "bg-blue-600/20 border-blue-500 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
            }`}
          >
            <span className="relative z-10">{cat}</span>
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>

      {/* Projects Grid with Animation */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}