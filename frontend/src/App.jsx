import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './i18n/config'; // Initialize translation system

// Components
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import Story from './sections/Story';
import Menu from './sections/Menu';
import Reservation from './sections/Reservation';
import Gallery from './sections/Gallery';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Pre-loading Screen Timer (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Tracking Scroll Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Pre-Loader Splash Screen */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen text-wood sandalwood-texture select-none overflow-x-hidden font-sans">
          
          {/* Scroll Progress Bar */}
          <div 
            className="fixed top-0 left-0 h-[3px] bg-gold z-50 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Background overlay */}
          <div className="absolute inset-0 kolam-pattern opacity-10 pointer-events-none"></div>

          {/* 2. Header/Navbar Navigation */}
          <Navbar />

          {/* 3. Hero Visual Section */}
          <Hero />

          {/* 4. Scroll Storytelling Sections */}
          <Story />

          {/* 5. Menu Showcase */}
          <Menu />

          {/* 6. Photo Gallery */}
          <Gallery />

          {/* 7. Reservation Booking Form */}
          <Reservation />

          {/* 8. Contact details & Footer */}
          <Footer />

          {/* Dynamic Floating Traditional Brass Lamp Ornament (Bottom right corner scroll-to-reservations CTA) */}
          <div 
            className="fixed bottom-6 right-6 z-30 group cursor-pointer hidden md:block"
            onClick={() => {
              const element = document.getElementById('reservations');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-12 h-12 bg-gold hover:bg-gold-dark text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 relative">
              <span className="text-xl">🪔</span>
              <span className="absolute -top-10 scale-0 group-hover:scale-100 bg-wood text-cream text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow transition-transform origin-bottom duration-300 pointer-events-none whitespace-nowrap border border-gold/30">
                Book Table
              </span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}

export default App;
