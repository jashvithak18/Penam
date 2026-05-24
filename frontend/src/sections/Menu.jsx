import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Separator from '../components/Separator';

const Menu = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('breakfast');

  const categories = [
    { id: 'breakfast', label: t('menu.breakfast') },
    { id: 'lunch', label: t('menu.lunch') },
    { id: 'dinner', label: t('menu.dinner') },
    { id: 'beverages', label: t('menu.beverages') },
  ];

  // Menu items list mapping back to our i18n keys
  const menuItems = {
    breakfast: [
      { id: 'idli', price: 90, image: '🍛' },
      { id: 'ghee_idli', price: 110, image: '🧈' },
      { id: 'mini_idli', price: 120, image: '🥣' },
      { id: 'plain_dosa', price: 100, image: '🥞' },
      { id: 'masala_dosa', price: 130, image: '🌯' },
      { id: 'pesarattu', price: 140, image: '🟢' },
      { id: 'onion_dosa', price: 125, image: '🧅' },
      { id: 'vada', price: 95, image: '🍩' },
      { id: 'puri', price: 110, image: '🟡' },
      { id: 'pongal', price: 120, image: '🍚' },
      { id: 'roti', price: 115, image: '🫓' },
      { id: 'upma', price: 80, image: '🥣' },
    ],
    lunch: [
      { id: 'sambar_rice', price: 140, image: '🍛' },
      { id: 'curd_rice', price: 110, image: '🥛' },
      { id: 'lemon_rice', price: 120, image: '🍋' },
      { id: 'veg_meals', price: 190, image: '🍱' },
      { id: 'andhra_meals', price: 210, image: '🌶️' },
      { id: 'thali', price: 290, image: '🍽️' },
      { id: 'pulihora', price: 125, image: '🍚' },
      { id: 'coconut_rice', price: 130, image: '🥥' },
    ],
    dinner: [
      { id: 'biryani', price: 210, image: '🍚' },
      { id: 'paneer_biryani', price: 240, image: '🧀' },
      { id: 'curry_combos', price: 160, image: '🍛' },
      { id: 'dosa_specials', price: 175, image: '🌯' },
    ],
    beverages: [
      { id: 'coffee', price: 60, image: '☕' },
      { id: 'buttermilk', price: 50, image: '🥛' },
      { id: 'panakam', price: 70, image: '🏺' },
      { id: 'lime_soda', price: 65, image: '🍋' },
    ]
  };

  return (
    <section id="menu" className="relative py-24 px-4 md:px-8 bg-sandalwood sandalwood-texture">
      {/* Kolam overlay */}
      <div className="absolute inset-0 kolam-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-gold font-bold text-lg">✦</span>
            <span className="text-xs uppercase font-sans tracking-[0.25em] text-gold font-bold">{t('nav.menu')}</span>
            <span className="text-gold font-bold text-lg">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-wood font-traditional mb-3">
            {t('menu.title')}
          </h2>
          <p className="text-sm text-gold uppercase tracking-wider font-semibold">
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Categories Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gold text-white shadow-md scale-105'
                  : 'bg-cream text-wood/80 hover:bg-cream-dark hover:text-gold border border-gold/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {menuItems[activeTab].map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="gold-border bg-cream p-6 rounded-md shadow-sm relative flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                >
                  
                  {/* Decorative Corner Ornaments */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/40"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/40"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/40"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/40"></div>

                  <div className="flex items-start justify-between space-x-4 mb-4">
                    {/* Item Image Placeholder Ring */}
                    <div className="w-14 h-14 bg-sandalwood rounded-full flex items-center justify-center text-2xl border border-gold/20 shrink-0">
                      {item.image}
                    </div>

                    {/* Item Details */}
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-wood font-traditional mb-1">
                        {t(`menu.items.${item.id}.name`)}
                      </h4>
                      <p className="text-xs text-wood/70 leading-relaxed font-sans line-clamp-2">
                        {t(`menu.items.${item.id}.desc`)}
                      </p>
                    </div>

                    {/* Pricing Pan Accent */}
                    <div 
                      className="flex flex-col items-center justify-center shrink-0 w-12 h-12 rounded-full border border-copper bg-gradient-to-br from-copper/20 to-copper/5 shadow-inner"
                      title="Price"
                    >
                      <span className="text-[10px] text-copper font-bold font-sans tracking-tighter leading-none">
                        {t('menu.currency')}
                      </span>
                      <span className="text-sm font-black text-copper font-sans leading-none">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Swiggy Button inside each card */}
                  <div className="flex items-center justify-between border-t border-gold/10 pt-4 mt-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC8019] flex items-center space-x-1">
                      <span>🪔</span> <span>PENAM Kitchen</span>
                    </span>

                    <a 
                      href="https://www.swiggy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1.5 rounded bg-[#FC8019] hover:bg-[#e16d0c] text-white text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 shadow-sm"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>{t('menu.order_swiggy')}</span>
                    </a>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small Traditional Accent */}
        <Separator />

      </div>
    </section>
  );
};

export default Menu;
