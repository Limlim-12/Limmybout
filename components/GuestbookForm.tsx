'use client';

import { useSession, signIn } from 'next-auth/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Define the shape of a message
type GuestbookMessage = {
  id: number;
  name: string;
  message: string;
  date: string;
  image: string;
};

// Define the props this component accepts
type GuestbookFormProps = {
  onNewMessage: (msg: GuestbookMessage) => void;
};

export default function GuestbookForm({ onNewMessage }: GuestbookFormProps) {
  const { data: session } = useSession();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !session?.user) return;
    
    setIsSubmitting(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Create the new message object
    const newMessage: GuestbookMessage = {
      id: Date.now(), // Generate a unique ID based on time
      name: session.user.name || "Anonymous",
      message: message,
      date: "Just now",
      image: session.user.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=Anonymous"
    };

    // Send it to the parent page
    onNewMessage(newMessage);
    
    setMessage('');
    setIsSubmitting(false);
  };

  if (!session) {
    return (
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center backdrop-blur-sm">
        <h3 className="text-xl font-bold text-slate-200 mb-2">Leave a mark</h3>
        <p className="text-slate-400 mb-6">Sign in to write a message in the guestbook.</p>
        <button
          onClick={() => signIn('google')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/20"
        >
          Sign In with Google
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={session.user?.image || ''} 
          alt="User" 
          className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
        <div className="text-sm">
          <p className="text-slate-200 font-bold">Signing as {session.user?.name}</p>
          <p className="text-slate-500">Posting publicly</p>
        </div>
      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        className="w-full bg-black/20 border border-slate-700 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none mb-4"
        rows={3}
      />

      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Posting...' : 'Sign Guestbook'}
        </motion.button>
      </div>
    </form>
  );
}