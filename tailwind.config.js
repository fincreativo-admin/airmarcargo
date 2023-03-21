/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {

    fontFamily:{
      Inter:['Inter'],
    },
    
    extend: {
      
  colors: {

  grisAirmar: '#3f4e55',
  grisAirmarClaro: '#676c73',
  verdeAirmar: '#a4d060',
  gris: '#676C73',
  primary:'ffcc00',
  maar:{
    100: '#6096B4', 
    200: '#93BFCF',
    300: '#BDCDD6',
    400: '#EEE9DA',

  },
}

    },
  },
  plugins: [],
}
