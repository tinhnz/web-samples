/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // For hero section
        hero: '1.5fr, 1fr',
      },
    },
  },
  plugins: [],
};
