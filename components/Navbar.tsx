'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to adjust style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-0 right-0 z-50 mx-auto transition-all duration-300 ${
          scrolled ? 'max-w-6xl px-4' : 'max-w-7xl px-6'
        }`}
      >
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full 
          backdrop-blur-xl border transition-all duration-300
          ${scrolled 
            ? 'bg-slate-900/80 border-slate-700 shadow-lg shadow-blue-500/10' 
            : 'bg-transparent border-transparent'
          }
        `}>
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Limmybout
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path} className="relative px-4 py-2 text-sm font-medium transition-colors">
                  <span className={`relative z-10 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }} className="w-full h-0.5 bg-current block origin-center transition-all" />
              <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="w-3/4 h-0.5 bg-current block transition-all" />
              <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }} className="w-full h-0.5 bg-current block origin-center transition-all" />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={item.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold tracking-tight transition-colors ${
                    pathname === item.path ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}