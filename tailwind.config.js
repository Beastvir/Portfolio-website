/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-lime': '#CCFF00',
        'bg-light': '#F5F5F0',
        'bg-dark': '#1A1A1A',
        'text-primary': '#000000',
        'text-secondary': '#FFFFFF',
        'text-muted': '#666666',
        'accent-hover': '#B8E600',
      },
      fontFamily: {
        display: ['Oswald', 'Impact', 'sans-serif'],
        body: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
      },
    },
  },
  plugins: [],
}
