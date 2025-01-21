/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-800": "#01012B",
        "primary-600": "#3D43B4",
        "primary-100": "#44D4DF",
        "yellow-100": "#F2C035",
        "orange-100": "#EE9551",
        "red-100": "#E42060",
        "pink-100": "#F6AFAC",
      },
      backgroundImage: (theme) => ({
        "gradient-sunset": "linear-gradient(90deg, #F2C035 0%, #EE9551 100%)",
        "pc-background": "url('/src/assets/PC.png')",
      })
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}