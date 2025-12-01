'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // The Loading Sequence
    const sequence = [
      { t: "LOADING ASSETS...", d: 800 },
      { t: "ESTABLISHING CONNECTION...", d: 1800 },
      { t: "ACCESS GRANTED", d: 2800 },
    ];

    // Schedule text changes
    const timeouts = sequence.map((step) => 
      setTimeout(() => setText(step.t), step.d)
    );

    // Finish loading
    const finishTimeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 3500);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finishTimeout);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center"
        >
          {/* Pulsing Logo/Icon */}
          <motion.div
             animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
             transition={{ repeat: Infinity, duration: 1.5 }}
             className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mb-8 border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]" />
          </motion.div>

          {/* Changing Text */}
          <motion.h2
            key={text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-blue-400 font-mono text-lg tracking-[0.2em] font-bold"
          >
            {text}
          </motion.h2>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-slate-900 rounded-full mt-8 overflow-hidden border border-slate-800">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
            />
          </div>
          
          <p className="absolute bottom-10 text-slate-600 text-xs font-mono">
            SECURE CONNECTION | V1.0.0
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}