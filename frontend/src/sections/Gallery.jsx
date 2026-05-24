import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Separator from '../components/Separator';

const Gallery = () => {
  const { t } = useTranslation();

  // Custom data detailing imagery contexts
  const galleryItems = [
    { 
      id: 'dosa', 
      emoji: '🥞', 
      title: 'Art of Dosa Crafting', 
      tag: 'Breakfast',
      size: 'md:col-span-2 md:row-span-1',
      desc: 'Thin, extra-crisp fermented rice crepe rotating on hot penam grills.'
    },
    { 
      id: 'meals', 
      emoji: '🍃', 
      title: 'Banana Leaf Feasts', 
      tag: 'Lunch',
      size: 'md:col-span-1 md:row-span-2',
      desc: 'Intricate spreads of sambar, rice, and regional vegetable sides.'
    },
    { 
      id: 'interior', 
      emoji: '🪔', 
      title: 'Traditional Interiors', 
      tag: 'Ambiance',
      size: 'md:col-span-1 md:row-span-1',
      desc: 'Elegant temple pillars and glowing brass oil diyas welcoming guests.'
    },
    { 
      id: 'coffee', 
      emoji: '☕', 
      title: 'Filter Coffee Brews', 
      tag: 'Beverages',
      size: 'md:col-span-1 md:row-span-1',
      desc: 'Dynamic frothed chicory-coffee fusions aerated in brass tumblers.'
    },
    { 
      id: 'curry', 
      emoji: '🌶️', 
      title: 'Andhra Village Curries', 
      tag: 'Dinner',
      size: 'md:col-span-2 md:row-span-1',
      desc: 'Fiery, stone-pounded curries featuring authentic regional red chillies.'
    }
  ];

  return (
    <section id="gallery" className="relative py-24 px-4 md:px-8 bg-sandalwood sandalwood-texture overflow-hidden">
      {/* Kolam design */}
      <div className="absolute inset-0 kolam-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-gold font-bold text-lg">✦</span>
            <span className="text-xs uppercase font-sans tracking-[0.25em] text-gold font-bold">{t('nav.gallery')}</span>
            <span className="text-gold font-bold text-lg">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-wood font-traditional mb-3">
            Capture the Essence
          </h2>
          <p className="text-sm text-gold uppercase tracking-wider font-semibold">
            Visual tales of flavor, legacy, and warmth
          </p>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`gold-border group relative overflow-hidden rounded-md cursor-pointer ${item.size} bg-cream shadow-md`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              {/* Inner corner lines */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold/40 z-10 pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold/40 z-10 pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold/40 z-10 pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold/40 z-10 pointer-events-none group-hover:scale-110 transition-transform"></div>

              {/* Decorative graphic placeholder in the center */}
              <div className="absolute inset-0 flex flex-col justify-center items-center select-none group-hover:scale-95 transition-transform duration-700 bg-sandalwood-light">
                {/* Kolam graphics detail */}
                <div className="absolute w-24 h-24 border border-gold/5 rounded-full rotate-45 flex items-center justify-center">
                  <div className="w-16 h-16 border border-gold/10 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 border border-gold/20 rounded-full"></div>
                  </div>
                </div>
                <span className="text-6xl md:text-7xl drop-shadow-md z-10 mb-2">{item.emoji}</span>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-semibold text-gold z-10">{item.tag}</span>
              </div>

              {/* Rich warm terracotta/copper overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-wood/95 via-wood/75 to-terracotta/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-25">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-1 text-cream">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">{item.tag}</span>
                  <h4 className="text-lg font-bold font-traditional leading-tight">{item.title}</h4>
                  <p className="text-xs text-cream/70 font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Separator Accent */}
        <Separator />

      </div>
    </section>
  );
};

export default Gallery;
