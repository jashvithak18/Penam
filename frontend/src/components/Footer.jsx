import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="relative bg-wood text-cream/90 pt-16 pb-8 px-4 md:px-8 overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#FAF7F0_0.2px,transparent_0.2px)] bg-[size:24px_24px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand details */}
          <div className="flex flex-col space-y-4">
            <h3 
              onClick={handleScrollToTop} 
              className="text-3xl font-black tracking-[0.2em] text-gold cursor-pointer hover:brightness-110 font-traditional"
            >
              PENAM
            </h3>
            <p className="text-sm font-sans text-cream/60 leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
            {/* Social media icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" aria-label="Instagram" className="p-2 bg-cream/5 hover:bg-gold/20 text-cream/80 hover:text-gold rounded-full transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Facebook" className="p-2 bg-cream/5 hover:bg-gold/20 text-cream/80 hover:text-gold rounded-full transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-cream/5 hover:bg-gold/20 text-cream/80 hover:text-gold rounded-full transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>


          {/* Quick links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-gold uppercase tracking-wider text-sm font-bold border-b border-gold/20 pb-2 font-traditional">
              {t('footer.links_title')}
            </h4>
            <ul className="space-y-2 text-sm">
              {['home', 'story', 'menu', 'gallery', 'reservations'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link}`} 
                    className="hover:text-gold text-cream/70 transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span className="text-[10px] text-gold">✦</span>
                    <span>{t(`nav.${link}`)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-gold uppercase tracking-wider text-sm font-bold border-b border-gold/20 pb-2 font-traditional">
              {t('footer.hours_title')}
            </h4>
            <div className="space-y-3 text-sm text-cream/70">
              <p className="font-semibold text-cream">{t('footer.hours_weekdays')}</p>
              <p className="font-semibold text-cream">{t('footer.hours_weekends')}</p>
              <p className="text-xs text-cream/50 italic font-sans">
                * Note: Traditional Andhra Bhojanam Thalis are served between 11:30 AM and 3:30 PM.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-gold uppercase tracking-wider text-sm font-bold border-b border-gold/20 pb-2 font-traditional">
              {t('footer.contact_title')}
            </h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>{t('footer.contact_addr')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{t('footer.contact_phone')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{t('footer.contact_email')}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Traditional Gold Kolam divider */}
        <div className="w-full flex items-center justify-center my-8 text-gold/30">
          <div className="flex-grow h-[1px] bg-gold/20"></div>
          <span className="mx-4 text-lg">🪔 ✦ 🪔</span>
          <div className="flex-grow h-[1px] bg-gold/20"></div>
        </div>

        {/* Copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-cream/40 font-sans">
          <p className="text-center sm:text-left mb-2 sm:mb-0">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
