/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ['Neue Montreal', 'sans-serif'],
        DM: ["DM Sans"],
        founder: ['Test Founders Grotesk X', 'sans-serif']
      }
    },
  },
  plugins: [],
}

