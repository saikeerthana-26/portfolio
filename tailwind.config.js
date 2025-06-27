/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0) 50%), linear-gradient(141.27deg, rgba(15, 23, 42, 0) 50%, rgba(15, 23, 42, 0.4) 100%)',
      },

    },
  },
  plugins: [],
}

