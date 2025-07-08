import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
     "./src/**/*.{html,js}"
  ],

  theme: {
    
    extend: {
      colors:{
        
        primaryGreen: '#8BBF29',
         cyanBlue: '#0AA1CA',
        leafGreen: '#74C03C',
      buttoncol: '#F5F5F9',
      tabtextcol:'#526C82',
      smalltext:'#555555CC',
      line:'#F2F0F5'
        
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        inter: ['var(--font-inter)'],
        futura: ['var(--font-futura)'],
        opensans: ["var(--font-open-sans)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;