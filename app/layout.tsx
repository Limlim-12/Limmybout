import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google'; // New Font
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Initialize the font
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Limmybout | Creative Developer',
  description: 'The interactive portfolio of Limmybout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} flex flex-col min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-purple-500/30`}>
        {/* Background is now handled by a fixed element in page.tsx or here */}
        <div className="fixed inset-0 z-[-1]">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        </div>
        
        <Navbar />
        <main className="flex-grow container mx-auto p-4 pt-24 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}