/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#1f1f1f',
        'titleColor': '#E50914',
      },
      fontFamily: {
        'Bebas': ['"Bebas Neue"', 'sans-serif'],
      },
      fontSize: {
        'titleSize': '2rem',
        'notFound': '1.6rem',
      },
    },
  },
  plugins: [],
}

