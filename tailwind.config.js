const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
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
  darkMode: "class",
  plugins: [heroui({
    prefix: "heroui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "dark", // default theme from the themes object
    defaultExtendTheme: "dark", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          background: "#dad4ed", // or DEFAULT
          foreground: "#6a6090", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#423aa1",
            100: "#4c429e",
            200: "#55499a",
            300: "#5d5197",
            400: "#645993",
            500: "#6a6090",
          },
          surface: {
            DEFAULT: "#ffffff",
            100: "#f0f0f0",
            200: "#e1e1e1",
            300: "#d3d3d3",
            400: "#c5c5c5",
            500: "#b6b6b6",
          },
          tonal: {
            DEFAULT: "#dad4ed",
            100: "#d0cae0",
            200: "#c5c1d4",
            300: "#bbb7c7",
            400: "#b1aebb",
            500: "#a7a4af",
          },
        }, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          background: "#282247", // or DEFAULT
          foreground: "#aea2d6", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#433aa1",
            100: "#5b4eac",
            200: "#7162b6",
            300: "#8577c1",
            400: "#9a8ccb",
            500: "#aea2d6",
          },
          surface: {
            DEFAULT: "#121212",
            100: "#282828",
            200: "#3f3f3f",
            300: "#575757",
            400: "#717171",
            500: "#8b8b8b",
          },
          tonal: {
            DEFAULT: "#282247",
            100: "#3e375a",
            200: "#544d6d",
            300: "#6a6480",
            400: "#827c94",
            500: "#9994a9",
          },
        }, // dark theme colors
      },
    },
  })],
}