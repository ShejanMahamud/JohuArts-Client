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
      },
      boxShadow: {
        'voilet-shadow': '0px 8px 21px 0px rgba(152, 72, 255, 0.25)',
        'light-green': '0px 8px 21px 0px rgba(167, 206, 74, 0.25);',
        'light-blue': '0px 8px 21px 0px rgba(77, 147, 223, 0.25);',
        'light-pink': '0px 8px 21px 0px rgba(255, 96, 168, 0.25)',
        'light-orange': '0px 8px 21px 0px rgba(246, 103, 66, 0.25)',
        'light-yellow': '0px 8px 21px 0px rgba(255, 207, 89, 0.25)',
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
}