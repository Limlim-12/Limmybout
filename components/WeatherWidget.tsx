'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- VISUAL COMPONENTS (Brighter & Sharper) ---

const Sun = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1, rotate: 360 }}
    transition={{ rotate: { repeat: Infinity, duration: 20, ease: "linear" } }}
    className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 blur-xl opacity-80" // Increased opacity
  />
);

const Clouds = () => (
  <>
    <motion.div
      animate={{ x: [-20, 20, -20] }}
      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      // Increased opacity (bg-white/30) and removed blur for clearer shape
      className="absolute top-0 right-0 w-32 h-24 bg-white/30 rounded-full blur-xl"
    />
    <motion.div 
       animate={{ x: [0, 10, 0] }}
       transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
       // Much brighter (bg-white/60) and sharper (blur-md instead of xl)
       className="absolute top-8 left-4 w-16 h-8 bg-white/60 rounded-full blur-md" 
    />
  </>
);

const Rain = () => (
  <div className="absolute inset-0 overflow-hidden rounded-2xl">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -50, x: Math.random() * 200 }}
        animate={{ y: 200 }}
        transition={{ 
          repeat: Infinity, 
          duration: 0.5 + Math.random() * 0.5, 
          ease: "linear",
          delay: Math.random() * 2 
        }}
        className="absolute w-[2px] h-8 bg-gradient-to-b from-transparent to-cyan-400 opacity-80" // Increased opacity
      />
    ))}
  </div>
);

const Storm = () => (
  <>
    <Rain />
    <motion.div
      animate={{ opacity: [0, 0, 0.8, 0, 0, 0.5, 0] }}
      transition={{ repeat: Infinity, duration: 3, delay: 1 }}
      className="absolute inset-0 bg-white/20 z-0 mix-blend-overlay rounded-2xl"
    />
  </>
);

// --- MAIN WIDGET ---

export default function WeatherWidget() {
  const [realWeather, setRealWeather] = useState<any>(null);
  const [displayMode, setDisplayMode] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cycle Simulation
  const toggleMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDisplayMode((prev) => (prev + 1) % 5);
  };

  useEffect(() => {
    if (!navigator.geolocation) { setLoading(false); return; }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
          if (!apiKey) return;

          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
          );
          if (res.ok) {
            const data = await res.json();
            setRealWeather(data);
          }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      },
      () => setLoading(false)
    );
  }, []);

  // --- DATA LOGIC ---
  const simData = [
    null,
    { name: "SIM: SUNNY", main: { temp: 32, humidity: 20 }, weather: [{ main: "Clear", description: "Clear Sky" }], wind: { speed: 2 } },
    { name: "SIM: CLOUDY", main: { temp: 24, humidity: 60 }, weather: [{ main: "Clouds", description: "Overcast" }], wind: { speed: 8 } },
    { name: "SIM: RAIN", main: { temp: 19, humidity: 85 }, weather: [{ main: "Rain", description: "Showers" }], wind: { speed: 15 } },
    { name: "SIM: STORM", main: { temp: 16, humidity: 95 }, weather: [{ main: "Thunderstorm", description: "Heavy Storm" }], wind: { speed: 30 } },
  ];

  const activeWeather = displayMode === 0 ? realWeather : simData[displayMode];
  const weatherMain = activeWeather?.weather[0].main || "Clear";

  const getVisual = () => {
    const type = weatherMain.toLowerCase();
    if (type.includes('clear')) return <Sun />;
    if (type.includes('clouds')) return <Clouds />;
    if (type.includes('rain') || type.includes('drizzle')) return <Rain />;
    if (type.includes('storm')) return <Storm />;
    return <Sun />;
  };

  if (loading || (!realWeather && displayMode === 0)) return null;

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      // UPDATED STYLE: increased opacity (bg-slate-900/80) and reduced blur (backdrop-blur-md)
      className={`fixed bottom-6 left-6 z-40 bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden cursor-pointer group select-none ${
        isOpen ? 'rounded-2xl p-0 w-72' : 'rounded-full px-4 py-2 w-auto hover:bg-slate-800'
      }`}
    >
      <AnimatePresence mode="popLayout">
        
        {/* --- STATE 1: PILL (Collapsed) --- */}
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-6 relative overflow-hidden rounded-full">
              {getVisual()}
            </div>
            <span className="text-white font-mono font-bold text-sm">
              {Math.round(activeWeather?.main.temp || 0)}°
            </span>
          </motion.div>
        )}

        {/* --- STATE 2: CARD (Expanded & Interactive) --- */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative p-6"
            onClick={toggleMode}
          >
            {/* Background Visual Layer */}
            {/* UPDATED: Removed opacity-50 so visuals are fully bright */}
            <div className="absolute inset-0 z-0 opacity-100 mix-blend-screen pointer-events-none">
                <AnimatePresence mode='wait'>
                    <motion.div 
                        key={displayMode}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="w-full h-full"
                    >
                        {getVisual()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Header / Location */}
            <div className="relative z-10 flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${displayMode === 0 ? 'bg-green-500' : 'bg-yellow-500'}`} />
                  <h3 className="text-[10px] font-mono text-slate-300 tracking-widest uppercase truncate max-w-[120px]">
                    {activeWeather?.name}
                  </h3>
                </div>
                <div className="text-5xl font-bold text-white tracking-tighter drop-shadow-lg">
                  {Math.round(activeWeather?.main.temp)}°
                </div>
                <p className="text-cyan-200 text-xs font-medium capitalize drop-shadow-md">
                  {activeWeather?.weather[0].description}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10">
              <div className="text-xs text-slate-300 font-mono bg-black/40 px-2 py-1.5 rounded text-center backdrop-blur-sm border border-white/5">
                HUM: <span className="text-blue-300">{activeWeather?.main.humidity}%</span>
              </div>
              <div className="text-xs text-slate-300 font-mono bg-black/40 px-2 py-1.5 rounded text-center backdrop-blur-sm border border-white/5">
                WND: <span className="text-cyan-300">{Math.round(activeWeather?.wind.speed)}m/s</span>
              </div>
            </div>

            <div className="absolute bottom-2 right-4 text-[9px] text-white/40 font-mono uppercase tracking-wider">
              {displayMode === 0 ? "Click to Simulate" : "Simulating..."}
            </div>

            <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="absolute top-2 right-2 p-2 text-white/50 hover:text-white transition-colors z-20"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}