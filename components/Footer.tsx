'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-2">Limmybout</h3>
            <p className="text-slate-500 text-sm max-w-xs mx-auto md:mx-0">
              Crafting digital experiences with code, creativity, and precision.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-center gap-2 text-sm text-slate-400">
            <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">About Me</Link>
            <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          </div>

          {/* Socials / Contact */}
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-slate-400">
            <a href="https://github.com/Limlim-12" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/limuel-ongtingco-b36264362" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:lim.coronatel@gmail.com" className="hover:text-blue-400 transition-colors">lim.coronatel@gmail.com</a>
          </div>

        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center">
          <p className="text-slate-600 text-xs">
            &copy; {currentYear} Limmybout. All rights reserved. Built with Next.js & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}