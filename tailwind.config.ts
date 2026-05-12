import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blush: '#EBC7CE',
        ivory: '#FFFCF7',
        champagne: '#D8B77A',
        nude: '#E7D8CC',
        softRose: '#F7E2E9',
        wine: '#6F2C3F'
      },
      fontFamily: {
        serifLuxury: ['"Playfair Display"', 'serif'],
        sansModern: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        premium: '0 10px 40px rgba(111,44,63,0.12)'
      }
    }
  },
  plugins: []
};

export default config;
