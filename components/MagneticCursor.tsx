'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function MagneticCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 🚀 SPEED TUNED CONFIGURATION
  // High stiffness = follows mouse instantly
  // Low mass = feels lightweight and fast
  // Damping = keeps it smooth, prevents jitter
  const springConfig = { damping: 25, stiffness: 450, mass: 0.15 };
  
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by half width/height to center it (24px / 2 = 12)
      mouseX.set(e.clientX - 12); 
      mouseY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'LABEL' ||
        target.closest('button') || 
        target.closest('a');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        scale: isHovering ? 2.5 : 1, 
        backgroundColor: isHovering ? "rgba(6, 182, 212, 0.1)" : "transparent",
        borderWidth: isHovering ? "1px" : "1.5px",
      }}
      // Reduced size to w-6 h-6 (24px) for a sharper, faster feel
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-cyan-400 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
    >
      <motion.div 
        animate={{ opacity: isHovering ? 0 : 1, scale: isHovering ? 0.2 : 1 }}
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2" 
      />
    </motion.div>
  );
}