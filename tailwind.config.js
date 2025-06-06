/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#00f3ff",
        tertiary: "#8892b0",
        light: "#ccd6f6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        neon: "0 0 5px #00f3ff, 0 0 20px #00f3ff40",
        "neon-text": "0 0 5px #00f3ff, 0 0 20px #00f3ff",
      },
      dropShadow: {
        "neon-text": "0 0 5px #00f3ff, 0 0 20px #00f3ff",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
