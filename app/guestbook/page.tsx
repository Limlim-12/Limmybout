'use client';

import GuestbookForm from "@/components/GuestbookForm";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSession } from "next-auth/react";

// Initial Mock Data
const initialMessages = [
  { id: 1, name: "Sarah Jenkins", message: "Love the holographic design! Super clean.", date: "2 days ago", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
  { id: 2, name: "Dev_Mike", message: "Great portfolio. The Next.js integration is smooth.", date: "5 days ago", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
  { id: 3, name: "DesignFan", message: "The animations on the skills page are 🔥", date: "1 week ago", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fan" },
];

export default function Guestbook() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState(initialMessages);

  // YOUR EMAIL HERE - This makes YOU the admin
  const ADMIN_EMAIL = "lim.coronatel@gmail.com"; 
  const isAdmin = session?.user?.email === ADMIN_EMAIL;

  // Function to add a new message to the list
  const handleNewMessage = (newMessage: any) => {
    setMessages((prev) => [newMessage, ...prev]); // Add new message to the TOP
  };

  // Function to delete a message
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this message?")) {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }
  };

  return (
    <div className="max-w-3xl mx-auto min-h-screen py-12 px-4">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block">
          Guestbook
        </h1>
        <p className="text-slate-400 text-lg">
          Leave a note, say hi, or give feedback. <br />
          Join the <span className="text-white font-semibold">Limmybout</span> community.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        {/* Pass the handler function down to the form */}
        <GuestbookForm onNewMessage={handleNewMessage} />
      </motion.div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex justify-between items-center">
          <span>Recent Messages</span>
          <span className="text-sm font-normal text-slate-500">{messages.length} posts</span>
        </h3>
        
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              layout // Smoothly slide other items up when one is deleted
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group"
            >
              <img src={msg.image} alt={msg.name} className="w-10 h-10 rounded-full bg-slate-800 shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-bold text-slate-200">{msg.name}</h4>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">{msg.date}</span>
                    
                    {/* DELETE BUTTON - Only visible to ADMIN */}
                    {isAdmin && (
                      <button 
                        onClick={() => handleDelete(msg.id)}
                        className="text-red-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                        title="Delete Message"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{msg.message}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {messages.length === 0 && (
          <p className="text-center text-slate-600 py-8">No messages yet. Be the first!</p>
        )}
      </div>

    </div>
  );
}