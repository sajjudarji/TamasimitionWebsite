const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#0ea5e9",
          purple: "#a855f7",
          cyan: "#22d3ee",
          pink: "#ec4899",
        },
        dark: {
          900: "#030014",
          800: "#05051a",
          700: "#0a0a2e",
        }
      },
      animation: {
        'blob': "blob 7s infinite",
        'glow': "glow 3s linear infinite",
        'scroll-blur': 'scroll-blur auto linear',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        glow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        }
      },
    },
  },
  plugins: [],
});
