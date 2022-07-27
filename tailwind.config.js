/** @type {import('tailwindcss').Config} */

/*-----------------
  Paleta de colores
  https://coolors.co/palette/386641-6a994e-a7c957-f2e8cf-bc4749 
-------------------*/

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {      
      colors: {
        hunterGreen: '#386641',
        mayGreen: '#6A994E',
        androidGreen: '#A7C957',
        eggShell: '#F2E8CF',
        bittersweetShimmer: '#BC4749',     
      },
    },
  },
  plugins: [],
};
