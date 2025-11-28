'use client';

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's Build <br /> Something <br /> Amazing.
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I'm always open to new ideas and opportunities.
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-300">
              <span className="p-3 bg-white/5 rounded-full border border-white/10 text-xl">📧</span>
              <a href="mailto:lim.coronatel@gmail.com" className="hover:text-blue-400 transition-colors">
                leumil1211@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-slate-300">
              <span className="p-3 bg-white/5 rounded-full border border-white/10 text-xl">📞</span>
              <span className="hover:text-purple-400 transition-colors cursor-default">
                +63 967 025 5854 (Viber)
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <span className="p-3 bg-white/5 rounded-full border border-white/10 text-xl">📍</span>
              <span>Davao City, Philippines</span>
            </div>
          </div>

          {/* Social Links Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="https://github.com/Limlim-12" target="_blank" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-bold transition-all hover:scale-105 flex items-center gap-2">
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/limuel-ongtingco-b36264362" target="_blank" className="px-6 py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 rounded-full text-sm font-bold text-blue-400 transition-all hover:scale-105 flex items-center gap-2">
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com/_leumil" target="_blank" className="px-6 py-3 bg-pink-600/10 hover:bg-pink-600/20 border border-pink-500/20 rounded-full text-sm font-bold text-pink-400 transition-all hover:scale-105 flex items-center gap-2">
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: The Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[60px] -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[60px] -z-10" />
          
          <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
          <ContactForm />
        </motion.div>

      </div>
    </div>
  );
}