/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#302F2F" ,
        secondary :"#CBFFDA",
        fontcolor: "#8EFF8B",
        bgmodal:"#3C3C3D",
        bgusers: "#E5E5E5"
        

      }
    },
  },
  plugins: [],
}

