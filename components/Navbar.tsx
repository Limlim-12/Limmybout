'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, SessionProvider } from 'next-auth/react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

function NavbarContent() {
  const pathname = usePathname();
  const { data: session } = useSession(); // Restored Session Data
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Detect scroll to toggle visibility
  useEffect(() => {
    const handleScroll = () => {
      // We are "at the top" if scrollY is less than 50px
      setIsAtTop(window.scrollY < 50);
    };
    
    // Check initially
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        // LOGIC: If we are at the top OR the mobile menu is open, SHOW it (y: 0).
        // Otherwise (scrolled down and menu closed), HIDE it (y: -100).
        animate={{ 
          y: isAtTop || isOpen ? 0 : -100,
          opacity: isAtTop || isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-6"
      >
        <div className="flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-xl border border-white/10 bg-slate-900/80 shadow-lg shadow-blue-500/10 transition-all duration-300">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Limmybout
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1">
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

            {/* --- RESTORED SIGN IN BUTTON --- */}
            <div className="pl-6 border-l border-white/10">
              {session ? (
                <div className="flex items-center gap-3">
                  <img 
                    src={session.user?.image || ''} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border border-blue-500/50"
                  />
                  <button 
                    onClick={() => signOut()}
                    className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => signIn('google')}
                  className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-xs font-bold text-white transition-all hover:scale-105"
                >
                  Sign In
                </button>
              )}
            </div>
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

            {/* Mobile Auth Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-8 border-t border-white/10 w-full max-w-xs flex justify-center"
            >
              {session ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <img src={session.user?.image || ''} alt="User" className="w-10 h-10 rounded-full border-2 border-blue-500" />
                    <span className="text-slate-300 font-medium">{session.user?.name}</span>
                  </div>
                  <button 
                    onClick={() => signOut()} 
                    className="text-red-400 font-bold text-lg hover:text-red-300"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => { signIn('google'); setIsOpen(false); }}
                  className="px-8 py-3 bg-blue-600 rounded-full text-white font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                >
                  Sign In with Google
                </button>
              )}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Ensure SessionProvider wraps the component
export default function Navbar() {
  return (
    <SessionProvider>
      <NavbarContent />
    </SessionProvider>
  );
}