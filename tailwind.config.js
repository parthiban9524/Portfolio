/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18202f",
        slate: "#41516a",
        mist: "#eef3f8",
        ocean: "#0e7490",
        leaf: "#15803d",
        ember: "#c2410c",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(24, 32, 47, 0.12)",
      },
    },
  },
  plugins: [],
};
