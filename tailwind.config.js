/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: '#EF5A28',
        secondary: '#414143',
        accent: '#34A853', // Example: Accent color (Green)
        neutral: '#F5F5F5', // Neutral background or text color
      },
    },
  },
  plugins: [],
};
