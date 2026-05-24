import React from 'react';
import { motion } from 'framer-motion';

const Separator = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center py-8 w-full max-w-lg mx-auto ${className}`}>
      {/* Left Scrollwork Line */}
      <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gold to-gold opacity-60"></div>
      
      {/* Decorative Traditional Brass Accent */}
      <div className="flex items-center mx-4 space-x-2 text-gold">
        <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 12h3v8h14v-8h3L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="13" r="3" />
        </svg>
        
        {/* Central Swinging Temple Bell */}
        <motion.div 
          className="relative origin-top"
          animate={{ rotate: [-4, 4, -4] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        >
          <svg 
            className="w-8 h-8 drop-shadow-md text-gold filter hover:brightness-110 cursor-pointer" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            {/* Detailed Temple Bell Path */}
            <path d="M12 2a2 2 0 00-2 2v1.17C8.06 5.8 7 7.77 7 10v4l-2 2v1h14v-1l-2-2v-4c0-2.23-1.06-4.2-3-4.83V4a2 2 0 00-2-2zm-2 17a2 2 0 004 0h-4z"/>
          </svg>
          {/* Bell clapper hanging down */}
          <div className="absolute left-1/2 bottom-[1px] -translate-x-1/2 w-[3px] h-[5px] bg-gold rounded-full"></div>
        </motion.div>

        <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 12h3v8h14v-8h3L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="13" r="3" />
        </svg>
      </div>

      {/* Right Scrollwork Line */}
      <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-gold to-gold opacity-60"></div>
    </div>
  );
};

export default Separator;
