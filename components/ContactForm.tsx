'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
          <input 
            type="text" 
            placeholder="John Doe"
            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
          />
        </div>
        
        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
          <input 
            type="email" 
            placeholder="john@example.com"
            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
          />
        </div>
      </div>

      {/* Message Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
        <textarea 
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
        />
      </div>

      {/* Send Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
      >
        Send Message 🚀
      </motion.button>
    </form>
  );
}