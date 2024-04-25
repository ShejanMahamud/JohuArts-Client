/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#FF5733'
      },
      fontFamily: {
        'raleway':'Raleway',
        'clickerScript':'Clicker Script',
        'ovo' : 'Ovo',
        'poppins' : 'Poppins'
      },
      backgroundImage:{
        'banner-1': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/tMk6n1s/pexels-yigithan02-1108532.jpg')",
        'banner-2': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/SxwVzKJ/slider2-ed88e0f0-9323-45d5-bb44-fb1a02930634.webp')",
        'banner-3': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/RbBjdZ8/painting-4159435-1280.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}