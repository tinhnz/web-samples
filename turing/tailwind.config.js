/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryLight: '#e4f3fc',
        primary: '#2e6edf',
        primaryDark: '#204d9c',
        back: '#212121',
      },
      gridTemplateColumns: {
        // For hero section
        hero: '1.5fr, 1fr',
      },
    },
  },
  plugins: [],
};
