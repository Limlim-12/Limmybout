'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // This uses a free counting API. It creates a namespace 'limmybout' automatically.
    // In a real production app, you would use your own database.
    fetch('https://api.counterapi.dev/v1/limmybout/visits/up')
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Counter error:", err));
  }, []);

  if (count === null) return null; // Don't show anything until loaded

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-xs font-mono text-slate-300">
        VISITORS: <span className="text-green-400 font-bold text-base ml-1">{count}</span>
      </span>
    </motion.div>
  );
}