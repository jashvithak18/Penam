import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, Users, Clock, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';
import confetti from 'canvas-confetti';

const API_BASE_URL = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:5000'
    : '';

const Reservation = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    specialRequests: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Basic validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      setErrorMsg(t('reservation.err_fields'));
      setLoading(false);
      return;
    }

    try {
      // Post to backend Express server API
      const response = await axios.post(`${API_BASE_URL}/api/reservations`, formData);
      
      if (response.data.success) {
        setSuccess(true);
        setLoading(false);
        
        // Premium Confetti Effect!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FAF9F6', '#C05C46', '#3B7A57'] // Traditional theme colors!
        });

        // Reset form
        setFormData({
          name: '',
          phone: '',
          guests: '2',
          date: '',
          time: '19:00',
          specialRequests: ''
        });
      } else {
        setErrorMsg(response.data.message || t('reservation.err_generic'));
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || t('reservation.err_generic'));
      setLoading(false);
    }
  };

  return (
    <section id="reservations" className="relative py-24 px-4 md:px-8 bg-sandalwood-light sandalwood-texture overflow-hidden">
      {/* Kolam pattern background */}
      <div className="absolute inset-0 kolam-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-gold font-bold text-lg">✦</span>
            <span className="text-xs uppercase font-sans tracking-[0.25em] text-gold font-bold">{t('nav.reservations')}</span>
            <span className="text-gold font-bold text-lg">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-wood font-traditional mb-3">
            {t('reservation.title')}
          </h2>
          <p className="text-sm text-gold uppercase tracking-wider font-semibold">
            {t('reservation.subtitle')}
          </p>
        </div>

        {/* Reservation Card */}
        <div className="gold-border bg-cream p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden">
          {/* Subtle floral/Kolam watermark corner graphics */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-gold/5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold/5 rounded-full blur-xl"></div>

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Form Errors Notification */}
                {errorMsg && (
                  <motion.div 
                    className="flex items-center space-x-2 bg-terracotta/10 border border-terracotta/30 text-terracotta p-4 rounded text-sm font-sans"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                {/* Name & Phone Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-wood/80 flex items-center space-x-1.5 font-sans">
                      <User className="w-3.5 h-3.5 text-gold" />
                      <span>{t('reservation.name_label')} *</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('reservation.name_placeholder')}
                      className="px-4 py-3 bg-sandalwood-light border border-gold/20 focus:border-gold rounded outline-none text-wood text-sm transition-colors duration-300 font-sans"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-wood/80 flex items-center space-x-1.5 font-sans">
                      <Phone className="w-3.5 h-3.5 text-gold" />
                      <span>{t('reservation.phone_label')} *</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('reservation.phone_placeholder')}
                      className="px-4 py-3 bg-sandalwood-light border border-gold/20 focus:border-gold rounded outline-none text-wood text-sm transition-colors duration-300 font-sans"
                    />
                  </div>

                </div>

                {/* Guests, Date, and Time Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  
                  {/* Guests Dropdown */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-wood/80 flex items-center space-x-1.5 font-sans">
                      <Users className="w-3.5 h-3.5 text-gold" />
                      <span>{t('reservation.guests_label')} *</span>
                    </label>
                    <select 
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="px-4 py-3 bg-sandalwood-light border border-gold/20 focus:border-gold rounded outline-none text-wood text-sm transition-colors duration-300 font-sans cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-wood/80 flex items-center space-x-1.5 font-sans">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>{t('reservation.date_label')} *</span>
                    </label>
                    <input 
                      type="date" 
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]} // Block historical dates
                      value={formData.date}
                      onChange={handleChange}
                      className="px-4 py-3 bg-sandalwood-light border border-gold/20 focus:border-gold rounded outline-none text-wood text-sm transition-colors duration-300 font-sans"
                    />
                  </div>

                  {/* Time Selector Dropdown */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-wood/80 flex items-center space-x-1.5 font-sans">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{t('reservation.time_label')} *</span>
                    </label>
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="px-4 py-3 bg-sandalwood-light border border-gold/20 focus:border-gold rounded outline-none text-wood text-sm transition-colors duration-300 font-sans cursor-pointer"
                    >
                      {/* Standard Dining Slots */}
                      {['07:30', '08:35', '09:45', '11:30', '12:30', '13:30', '14:30', '18:00', '19:00', '20:00', '21:00', '21:45'].map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Special Requests Field */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs uppercase font-bold tracking-wider text-wood/80 flex items-center space-x-1.5 font-sans">
                    <MessageSquare className="w-3.5 h-3.5 text-gold" />
                    <span>{t('reservation.requests_label')}</span>
                  </label>
                  <textarea 
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="3"
                    placeholder={t('reservation.requests_placeholder')}
                    className="px-4 py-3 bg-sandalwood-light border border-gold/20 focus:border-gold rounded outline-none text-wood text-sm transition-colors duration-300 font-sans resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#FC8019] hover:bg-[#e16d0c] text-white font-bold tracking-wider uppercase py-4 rounded-md shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-[#FC8019]/20 hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white loader-circle rounded-full shrink-0"></div>
                        <span>{t('reservation.booking_loading')}</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        <span>{t('reservation.submit_btn')}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              // Success Screen Box
              <motion.div 
                key="success"
                className="flex flex-col items-center justify-center text-center py-8 space-y-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.1 }}
                >
                  <CheckCircle className="w-20 h-20 text-banana" />
                </motion.div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-wood font-traditional">
                    {t('reservation.success_title')}
                  </h3>
                  <p className="text-sm text-wood/80 max-w-md mx-auto font-sans leading-relaxed">
                    {t('reservation.success_desc')}
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2.5 bg-gold hover:bg-gold-dark text-white text-xs font-bold uppercase tracking-wider rounded shadow hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Make Another Booking
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default Reservation;
