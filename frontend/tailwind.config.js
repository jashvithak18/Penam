/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sandalwood: {
          light: '#FAF7F0',
          DEFAULT: '#F5F2EB',
          dark: '#E5DFD0',
        },
        gold: {
          light: '#F3DF95',
          DEFAULT: '#D4AF37',
          dark: '#B39127',
        },
        cream: {
          DEFAULT: '#FAF9F6',
          dark: '#F3F0E6',
        },
        turmeric: {
          DEFAULT: '#EAA812',
          light: '#F4C430',
        },
        terracotta: {
          DEFAULT: '#C05C46',
          dark: '#A34531',
        },
        banana: {
          DEFAULT: '#3B7A57',
          dark: '#2A5C3F',
        },
        copper: {
          DEFAULT: '#B87333',
        },
        wood: {
          light: '#8B5A2B',
          DEFAULT: '#5C4033',
          dark: '#3E2723',
        }
      },
      fontFamily: {
        traditional: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'steam-slow': 'steam 8s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'bell-swing': 'swing 3s ease-in-out infinite',
      },
      keyframes: {
        steam: {
          '0%, 100%': { transform: 'translateY(0) scale(1) translateX(0)', opacity: 0.1 },
          '50%': { transform: 'translateY(-20px) scale(1.1) translateX(5px)', opacity: 0.4 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        }
      }
    },
  },
  plugins: [],
}
