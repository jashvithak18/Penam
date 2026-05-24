import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToReservations = () => {
    const element = document.getElementById('reservations');
    if (element) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background Image with Soft Warm Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/assets/hero_bg.png')`,
          transform: 'translateZ(0)' // optimizes composite layers
        }}
      >
        {/* Soft, rich warm gradient overlay preserving beautiful interior lighting */}
        <div className="absolute inset-0 bg-gradient-to-tr from-wood/90 via-wood/50 to-sandalwood/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-sandalwood via-transparent to-transparent opacity-95"></div>
      </div>

      {/* Floating Traditional Brass Lamps (Suspended from top) */}
      <div className="absolute top-0 inset-x-0 hidden md:flex justify-between px-16 pointer-events-none z-10">
        {/* Left Lamp */}
        <motion.div 
          className="flex flex-col items-center origin-top"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {/* Chain */}
          <div className="w-[1px] h-32 bg-gold/50"></div>
          {/* Bell/Aesthetic ring */}
          <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
          {/* Lamp Body */}
          <div className="w-12 h-10 bg-gold rounded-b-full flex items-center justify-center text-wood shadow-lg relative">
            <span className="text-[10px]">🪔</span>
            {/* Flickering Flame */}
            <motion.div 
              className="absolute -top-3 left-[21px] w-1.5 h-3.5 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
              animate={{ opacity: [0.7, 1, 0.8, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Right Lamp */}
        <motion.div 
          className="flex flex-col items-center origin-top"
          animate={{ rotate: [2, -2, 2] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          {/* Chain */}
          <div className="w-[1px] h-48 bg-gold/50"></div>
          {/* Bell/Aesthetic ring */}
          <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
          {/* Lamp Body */}
          <div className="w-12 h-10 bg-gold rounded-b-full flex items-center justify-center text-wood shadow-lg relative">
            <span className="text-[10px]">🪔</span>
            {/* Flickering Flame */}
            <motion.div 
              className="absolute -top-3 left-[21px] w-1.5 h-3.5 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
              animate={{ opacity: [0.8, 1, 0.7, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Main Hero Content Box */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center z-20 relative pt-12">
        
        {/* Subtle rising steam elements behind the title */}
        <div className="absolute inset-x-0 -top-16 flex justify-center space-x-6 opacity-30 pointer-events-none">
          <span className="steam-line animate-steam-slow"></span>
          <span className="steam-line animate-steam-slow" style={{ animationDelay: '1.5s' }}></span>
          <span className="steam-line animate-steam-slow" style={{ animationDelay: '3s' }}></span>
        </div>

        {/* Traditional Gold Ornamental Border Corner Accents */}
        <motion.div 
          className="inline-block p-1 border border-white/40 rounded mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="px-4 py-2 border border-white/60 text-xs font-bold uppercase tracking-[0.25em] text-white font-['Times_New_Roman',_serif] bg-black/75 shadow-md">
            {t('hero.subtitle')}
          </div>
        </motion.div>

        {/* Brand Main Title */}
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[0.25em] text-white select-none mb-4 font-['Times_New_Roman',_serif] filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.95)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t('hero.title')}
        </motion.h1>

        {/* Short Poetic Description */}
        <motion.p 
          className="text-lg md:text-2xl font-bold text-white max-w-2xl mx-auto mb-10 leading-relaxed font-['Times_New_Roman',_serif] filter drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {t('hero.description')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {/* Order on Swiggy Button */}
          <a 
            href="https://www.swiggy.com" // Redirects to Swiggy main or custom restaurant page placeholder
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-[#FC8019] hover:bg-[#e16d0c] text-white px-8 py-4 rounded-md font-bold tracking-wider uppercase transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>{t('hero.swiggy')}</span>
          </a>

          {/* Reserve a Table Button */}
          <button
            onClick={scrollToReservations}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-md font-bold tracking-wider uppercase transition-all duration-300 shadow-xl hover:-translate-y-0.5 border border-gold-light/20"
          >
            <span>{t('hero.reserve')}</span>
          </button>
        </motion.div>

      </div>

      {/* Decorative Traditional Border along Bottom */}
      <div className="absolute bottom-0 inset-x-0 w-full h-8 overflow-hidden opacity-30 select-none pointer-events-none">
        <svg className="w-full h-full text-gold" viewBox="0 0 1440 24" fill="currentColor" preserveAspectRatio="none">
          <path d="M0 12 L20 0 L40 12 L60 0 L80 12 L100 0 L120 12 L140 0 L160 12 L180 0 L200 12 L220 0 L240 12 L260 0 L280 12 L300 0 L320 12 L340 0 L360 12 L380 0 L400 12 L420 0 L440 12 L460 0 L480 12 L500 0 L520 12 L540 0 L560 12 L580 0 L600 12 L620 0 L640 12 L660 0 L680 12 L700 0 L720 12 L740 0 L760 12 L780 0 L800 12 L820 0 L840 12 L860 0 L880 12 L900 0 L920 12 L940 0 L960 12 L980 0 L1000 12 L1020 0 L1040 12 L1060 0 L1080 12 L1100 0 L1120 12 L1140 0 L1160 12 L1180 0 L1200 12 L1220 0 L1240 12 L1260 0 L1280 12 L1300 0 L1320 12 L1340 0 L1360 12 L1380 0 L1400 12 L1420 0 L1440 12 L1440 24 L0 24 Z" />
        </svg>
      </div>

      {/* Floating Chevron Down indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-wood/60 cursor-pointer hidden sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => {
          const storySec = document.getElementById('story');
          if (storySec) storySec.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-8 h-8 hover:text-gold" />
      </motion.div>
    </section>
  );
};

export default Hero;
