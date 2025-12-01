'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 bg-red-500/5 z-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] animate-pulse" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-12 bg-slate-900/80 backdrop-blur-xl border border-red-500/30 rounded-3xl shadow-2xl"
      >
        <motion.h1 
          animate={{ x: [-2, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
          className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-purple-600 mb-4"
        >
          404
        </motion.h1>

        <h2 className="text-3xl font-bold text-white mb-6">System Malfunction</h2>
        
        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
          The coordinates you entered do not match any known sector in this portfolio. The data may have been corrupted or moved.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full shadow-lg shadow-red-500/20 transition-all"
          >
            Return to Base
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}