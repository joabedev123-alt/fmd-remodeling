/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101010',
        graphite: '#1B1B1B',
        gold: '#D4AF37',
        'gold-light': '#E8C96A',
        cream: '#F5F3EE',
        mist: '#C8C8C8',
        charcoal: '#252525',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1240px',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0, 0, 0, 0.12)',
        lift: '0 18px 50px rgba(0, 0, 0, 0.18)',
      },
      spacing: {
        header: '5.5rem',
        'mobile-bar': '4.75rem',
      },
    },
  },
  plugins: [],
}
