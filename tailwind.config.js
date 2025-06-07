/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f0d4cd',
        secondary: '#e0c1ba',
        accent: '#000000',
        text: '#222222',
        background: '#faf4f2'
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'texture': "url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      }
    },
  },
  plugins: [],
};