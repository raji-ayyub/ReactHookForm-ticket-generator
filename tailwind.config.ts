/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#24A0B5',
        primary: "#0E464F", 
        secondary: "#9333EA", 
        accent: "#FACC15",  
        dark: "#02191D", 
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"], // Default
        serif: ["var(--font-jeju)", "serif"], // For Jeju Myeongjo
        display: ["var(--font-road)", "cursive"], // Road Rage (Custom Font)
      },
    },
  },
  plugins: [],
};

export default tailwindConfig