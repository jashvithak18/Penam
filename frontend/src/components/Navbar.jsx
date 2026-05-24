import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Calendar } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'te' ? 'en' : 'te';
    i18n.changeLanguage(nextLang);
  };

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Small offset for sticky header
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

  const navItems = [
    { key: 'home', id: 'home' },
    { key: 'story', id: 'story' },
    { key: 'menu', id: 'menu' },
    { key: 'gallery', id: 'gallery' },
    { key: 'reservations', id: 'reservations' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-cream/95 backdrop-blur-md shadow-md border-b border-gold/15 py-3' 
            : 'bg-gradient-to-b from-wood/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <span className="text-2xl font-black tracking-[0.2em] text-gold-dark font-traditional group-hover:text-gold transition-colors duration-300">
              PENAM
            </span>
            <div className="w-[6px] h-[6px] bg-gold rounded-full group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-wood hover:text-gold-dark' 
                    : 'text-white/90 hover:text-gold'
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Right Side Options: Language & Table Reservation */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isScrolled
                  ? 'border-gold text-gold-dark hover:bg-gold hover:text-white'
                  : 'border-white/30 text-white hover:bg-white hover:text-wood'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{i18n.language === 'te' ? 'English' : 'తెలుగు'}</span>
            </button>

            {/* Reserve Table CTA */}
            <button
              onClick={() => scrollToSection('reservations')}
              className={`flex items-center space-x-2 px-5 py-2 rounded-md font-medium text-sm tracking-wider uppercase transition-all duration-500 shadow-md hover:-translate-y-0.5 ${
                isScrolled
                  ? 'bg-gold hover:bg-gold-dark text-white'
                  : 'bg-white hover:bg-gold text-wood hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{t('nav.reserve_btn')}</span>
            </button>
          </div>

          {/* Mobile Buttons (Hamburger & Language) */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Quick Language Toggle on Mobile */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full border transition-all duration-300 ${
                isScrolled
                  ? 'border-gold text-gold-dark'
                  : 'border-white/30 text-white'
              }`}
              aria-label="Toggle language"
            >
              <span className="text-xs font-bold font-sans">
                {i18n.language === 'te' ? 'EN' : 'తె'}
              </span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-wood' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Fullscreen Sliding Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-sandalwood text-wood sandalwood-texture flex flex-col justify-center items-center lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            {/* Mobile Menu Decorative Kolam background */}
            <div className="absolute inset-0 kolam-pattern opacity-10 pointer-events-none"></div>
            
            {/* Fullscreen Menu Links */}
            <nav className="flex flex-col space-y-6 text-center z-10">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-semibold tracking-widest uppercase text-wood/90 hover:text-gold transition-colors font-traditional"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  {t(`nav.${item.key}`)}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <motion.button
                onClick={() => scrollToSection('reservations')}
                className="mt-6 flex items-center justify-center space-x-2 bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-md font-semibold text-base tracking-wider uppercase shadow-lg z-10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
              >
                <Calendar className="w-5 h-5" />
                <span>{t('nav.reserve_btn')}</span>
              </motion.button>
            </nav>

            {/* Backdrops details */}
            <div className="absolute bottom-10 flex flex-col items-center opacity-40 z-10">
              <span className="text-xs tracking-[0.3em] font-bold">PENAM</span>
              <div className="w-16 h-[1px] bg-gold my-2"></div>
              <span className="text-[10px] uppercase font-sans tracking-widest">{t('hero.subtitle')}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
