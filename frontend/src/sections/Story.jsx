import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Separator from '../components/Separator';

const Story = () => {
  const { t } = useTranslation();

  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardHoverVariant = {
    hover: { 
      y: -8, 
      boxShadow: "0 20px 25px -5px rgba(92, 64, 51, 0.15), 0 10px 10px -5px rgba(92, 64, 51, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const traditionalCards = [
    { key: 'banana', emoji: '🍃', color: 'from-banana/20 to-banana/5' },
    { key: 'dosa', emoji: '🍳', color: 'from-gold/20 to-gold/5' },
    { key: 'coffee', emoji: '☕', color: 'from-copper/20 to-copper/5' },
    { key: 'spices', emoji: '🌶️', color: 'from-terracotta/20 to-terracotta/5' },
    { key: 'meals', emoji: '🍲', color: 'from-turmeric/20 to-turmeric/5' },
  ];

  const experienceGrid = [
    { key: 'warmth', emoji: '🪔' },
    { key: 'family', emoji: '👨‍👩-‍👧‍👦' },
    { key: 'ambiance', emoji: '🏡' },
    { key: 'handcrafted', emoji: '👨‍🍳' },
    { key: 'cultural', emoji: '🎨' },
  ];

  return (
    <section id="story" className="relative py-24 px-4 md:px-8 overflow-hidden bg-sandalwood-light sandalwood-texture">
      {/* Background patterns */}
      <div className="absolute inset-0 kolam-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">

        {/* SECTION 1: Our Roots (Alternating Story Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Story Text */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariant}
          >
            <div className="flex items-center space-x-2">
              <span className="text-gold font-bold text-lg">✦</span>
              <span className="text-xs uppercase font-sans tracking-[0.25em] text-gold font-bold">{t('story.roots_subtitle')}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-wood leading-tight font-traditional">
              {t('story.roots_title')}
            </h2>
            
            <p className="text-base md:text-lg text-wood/80 leading-relaxed font-sans">
              {t('story.roots_text1')}
            </p>

            <p className="text-base md:text-lg text-wood/75 leading-relaxed font-sans">
              {t('story.roots_text2')}
            </p>
          </motion.div>

          {/* Artistic Image Stack / Representation */}
          <motion.div 
            className="relative flex justify-center items-center h-[350px] md:h-[450px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Visual Backframe with gold border */}
            <div className="absolute w-[80%] h-[80%] border-2 border-gold rounded shadow-lg transform rotate-3"></div>
            
            {/* Main Visual box (Banana leaf background representation) */}
            <div className="absolute w-[78%] h-[78%] bg-banana-dark/10 rounded shadow-xl flex flex-col justify-center items-center text-center p-8 border border-banana/20 overflow-hidden transform -rotate-2">
              {/* Inner subtle noise overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#3B7A57_1px,transparent_1px)] bg-[size:16px_16px] opacity-10"></div>
              
              <span className="text-7xl mb-4 select-none">🍃</span>
              <h4 className="text-xl font-bold text-banana-dark font-traditional mb-2">Authentic Flavors</h4>
              <p className="text-xs text-wood/70 font-sans max-w-xs">
                Prepared in cast-iron skillets (Penam) and stone-ground mortars, our meals preserve the true taste of South India.
              </p>
            </div>

            {/* Brass lamp floats close to it */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sandalwood rounded-full border border-gold shadow-md flex items-center justify-center text-4xl">
              🪔
            </div>
          </motion.div>
        </div>

        {/* Temple Bell Separator */}
        <Separator />

        {/* SECTION 2: Crafted with Tradition */}
        <div className="my-24">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariant}
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-gold font-bold text-lg">✦</span>
              <span className="text-xs uppercase font-sans tracking-[0.25em] text-gold font-bold">{t('story.crafted_subtitle')}</span>
              <span className="text-gold font-bold text-lg">✦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-wood font-traditional">
              {t('story.crafted_title')}
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {traditionalCards.map((card, idx) => (
              <motion.div
                key={card.key}
                className="gold-border bg-cream p-6 rounded-md text-center flex flex-col items-center justify-between min-h-[260px]"
                whileHover="hover"
                variants={cardHoverVariant}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                {/* Background color gradient glow on hover */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center text-3xl mb-4 shadow-inner`}>
                  {card.emoji}
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-wood font-traditional mb-2">
                    {t(`story.card_${card.key}_title`)}
                  </h3>
                  <p className="text-xs text-wood/70 leading-relaxed font-sans">
                    {t(`story.card_${card.key}_desc`)}
                  </p>
                </div>

                <div className="w-8 h-[1px] bg-gold/40 mt-4"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Temple Bell Separator */}
        <Separator />

        {/* SECTION 3: Experience PENAM (Cinematic scrolling grid) */}
        <div className="my-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Header column */}
            <motion.div 
              className="lg:col-span-1 flex flex-col space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariant}
            >
              <div className="flex items-center space-x-2">
                <span className="text-gold font-bold text-lg">✦</span>
                <span className="text-xs uppercase font-sans tracking-[0.25em] text-gold font-bold">{t('story.exp_subtitle')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-wood font-traditional">
                {t('story.exp_title')}
              </h2>
              <div className="w-16 h-[2px] bg-gold mt-2"></div>
            </motion.div>

            {/* Cinematic details grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experienceGrid.map((exp, idx) => (
                <motion.div
                  key={exp.key}
                  className="bg-cream/40 hover:bg-cream border border-gold/10 hover:border-gold/30 p-6 rounded-md transition-all duration-300 flex items-start space-x-4 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <span className="text-3xl select-none shrink-0">{exp.emoji}</span>
                  <div className="flex flex-col space-y-1">
                    <h4 className="text-base font-bold text-wood font-traditional">
                      {t(`story.exp_${exp.key}`)}
                    </h4>
                    <p className="text-xs text-wood/70 leading-relaxed font-sans">
                      {t(`story.exp_${exp.key}_desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;
