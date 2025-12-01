'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OfflineGame() {
  const [isOffline, setIsOffline] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  // NEW: State to track the transition back to online
  const [isRestored, setIsRestored] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const scoreRef = useRef(0);

  // --- 1. Detect Offline Status ---
  useEffect(() => {
    const handleOffline = () => {
      setIsOffline(true);
      setIsRestored(false);
      setGameStarted(false);
    };

    const handleOnline = () => {
      // 1. Signal is back! Show "Restored" UI first.
      setIsRestored(true);
      
      // 2. Wait 2.5 seconds, then hide the overlay completely.
      setTimeout(() => {
        setIsOffline(false);
        setIsRestored(false);
        setGameStarted(false);
      }, 2500);
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setIsOffline(true);
    }

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // --- 2. Game Logic (Standard Dino Runner) ---
  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    scoreRef.current = 0;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gravity = 0.6;
    const jumpStrength = -10;
    const speed = 5;
    
    let player = { x: 50, y: 150, width: 30, height: 30, dy: 0, grounded: true };
    let obstacles: { x: number; y: number; width: number; height: number }[] = [];
    let frame = 0;

    const loop = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Physics
      if (!player.grounded) {
        player.dy += gravity;
        player.y += player.dy;
      }
      if (player.y + player.height >= canvas.height - 10) {
        player.y = canvas.height - 10 - player.height;
        player.dy = 0;
        player.grounded = true;
      } else {
        player.grounded = false;
      }

      // Draw Player
      ctx.fillStyle = '#06b6d4';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#06b6d4';
      ctx.fillRect(player.x, player.y, player.width, player.height);
      ctx.shadowBlur = 0;

      // Obstacles
      if (frame % 100 === 0) {
        const height = Math.random() > 0.5 ? 40 : 25;
        obstacles.push({ x: canvas.width, y: canvas.height - 10 - height, width: 20, height: height });
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        let obs = obstacles[i];
        obs.x -= speed;
        
        ctx.fillStyle = '#ef4444';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ef4444';
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        ctx.shadowBlur = 0;

        // Collision
        if (
          player.x < obs.x + obs.width &&
          player.x + player.width > obs.x &&
          player.y < obs.y + obs.height &&
          player.y + player.height > obs.y
        ) {
          setGameOver(true);
          setGameStarted(false);
          if (scoreRef.current > highScore) setHighScore(scoreRef.current);
          return;
        }

        if (obs.x + obs.width < 0) {
          obstacles.splice(i, 1);
          scoreRef.current += 1;
          setScore(scoreRef.current);
        }
      }

      // Floor
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 10);
      ctx.lineTo(canvas.width, canvas.height - 10);
      ctx.stroke();

      frame++;
      requestRef.current = requestAnimationFrame(loop);
    };

    const handleJump = (e?: KeyboardEvent | TouchEvent) => {
      if ((e instanceof KeyboardEvent && e.code === 'Space') || e instanceof TouchEvent) {
        if (player.grounded) {
          player.dy = jumpStrength;
          player.grounded = false;
        }
      }
    };

    window.addEventListener('keydown', handleJump);
    window.addEventListener('touchstart', handleJump);
    loop();

    return () => {
      window.removeEventListener('keydown', handleJump);
      window.removeEventListener('touchstart', handleJump);
    };
  };

  // Start game wrapper
  useEffect(() => {
    if (gameStarted && !gameOver && !isRestored) {
      const cleanup = startGame();
      return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        if (cleanup) cleanup();
      };
    }
  }, [gameStarted, gameOver, isRestored]);

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }} // Fade out blur effect
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-4 text-center"
        >
          
          {/* --- VIEW 1: SIGNAL RESTORED (Reconnecting) --- */}
          {isRestored ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10 bg-slate-900/80 border border-green-500/30 p-10 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.15)] backdrop-blur-md max-w-sm w-full text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 tracking-wider">SIGNAL FOUND</h2>
              
              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden mb-4 border border-slate-700">
                <motion.div 
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 2.2, ease: "circOut" }}
                   className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                />
              </div>
              
              <p className="text-green-400/80 text-xs font-mono uppercase tracking-widest animate-pulse">
                Re-initializing System...
              </p>
            </motion.div>
          ) : (
            
            /* --- VIEW 2: OFFLINE GAME --- */
            <>
              <motion.div 
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-2 tracking-widest glitch-text">
                  SYSTEM OFFLINE
                </h1>
                <p className="text-slate-400 text-lg">Connection lost. Waiting for signal...</p>
                <p className="text-slate-500 text-sm mt-2">While you wait, survive the glitch.</p>
              </motion.div>

              <div className="relative bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
                <canvas 
                  ref={canvasRef}
                  width={600}
                  height={200}
                  className="w-full max-w-[600px] h-[200px] bg-slate-900 cursor-pointer"
                  onClick={() => !gameStarted && setGameStarted(true)}
                />
                
                {!gameStarted && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                    {gameOver ? (
                      <>
                        <h2 className="text-3xl font-bold text-red-500 mb-2">CRITICAL FAILURE</h2>
                        <p className="text-cyan-400 text-xl mb-6">Score: {score}</p>
                      </>
                    ) : (
                      <h2 className="text-2xl font-bold text-white mb-6">Ready to Run?</h2>
                    )}
                    
                    <button 
                      onClick={() => { setGameOver(false); setGameStarted(true); }}
                      className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)]"
                    >
                      {gameOver ? "Retry" : "Start Game"}
                    </button>
                    <p className="text-slate-400 text-xs mt-4">Spacebar or Tap to Jump</p>
                  </div>
                )}

                {gameStarted && (
                  <div className="absolute top-4 right-4 text-cyan-400 font-mono text-xl font-bold">
                    {score.toString().padStart(5, '0')}
                  </div>
                )}
              </div>

              <div className="mt-6 text-slate-500 font-mono flex gap-8">
                <span>STATUS: <span className="text-red-500">DISCONNECTED</span></span>
                <span>HIGH SCORE: <span className="text-white">{highScore}</span></span>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}