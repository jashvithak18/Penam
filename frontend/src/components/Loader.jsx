import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-sandalwood-light text-wood sandalwood-texture"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Decorative Traditional Border Framing Loader */}
      <div className="absolute inset-6 border border-gold/20 pointer-events-none rounded-lg">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold"></div>
      </div>

      <div className="relative flex flex-col items-center text-center">
        {/* Kolam / Mandala Rotating Slowly behind Logo */}
        <motion.div
          className="absolute -top-16 opacity-10 text-gold"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-48 h-48" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5 5" />
            <path d="M50 5 L55 35 L85 35 L60 50 L75 80 L50 65 L25 80 L40 50 L15 35 L45 35 Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>

        {/* Animated Diya (Traditional Brass Lamp) */}
        <div className="relative mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Diya Body */}
            <svg className="w-20 h-16 text-gold drop-shadow-md" viewBox="0 0 100 60" fill="currentColor">
              <path d="M10 30 Q50 65 90 30 Q90 10 50 15 Q10 10 10 30 Z" />
              <path d="M40 15 Q50 35 60 15 Z" fill="#FAF7F0" opacity="0.3" />
              {/* Stand */}
              <path d="M42 45 Q50 50 58 45 L55 55 L45 55 Z" />
            </svg>
          </motion.div>

          {/* Flickering Flame */}
          <motion.div 
            className="absolute -top-6 left-[43px] w-4 h-8 origin-bottom rounded-full"
            style={{
              background: 'radial-gradient(ellipse at bottom, #FFD700 0%, #FF8C00 50%, #FF4500 100%)',
              boxShadow: '0 0 12px #FF8C00, 0 0 20px #FF4500'
            }}
            animate={{ 
              scaleY: [1, 1.15, 0.9, 1.1, 1],
              scaleX: [1, 0.9, 1.1, 0.95, 1],
              skewX: [-2, 2, -3, 3, -1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* PENAM Logo Text with elegant traditional Serif letter spacing */}
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold tracking-[0.25em] text-wood select-none"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          PENAM
        </motion.h1>

        {/* Traditional separator line */}
        <motion.div 
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent my-3"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />

        {/* Poetic Subtitle */}
        <motion.p 
          className="text-gold font-medium uppercase tracking-[0.2em] text-xs font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Where Tradition Meets Taste
        </motion.p>
      </div>

      {/* Decorative brass hanging lamps flanking the center on wide displays */}
      <div className="hidden md:block absolute left-12 top-0 h-40 w-[2px] bg-gold/40">
        <div className="absolute bottom-0 -left-3 w-7 h-7 bg-gold rounded-full flex items-center justify-center text-wood shadow-md">🪔</div>
      </div>
      <div className="hidden md:block absolute right-12 top-0 h-40 w-[2px] bg-gold/40">
        <div className="absolute bottom-0 -left-3 w-7 h-7 bg-gold rounded-full flex items-center justify-center text-wood shadow-md">🪔</div>
      </div>
    </motion.div>
  );
};

export default Loader;
