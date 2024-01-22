/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#1B1D1F",
        "custom-light": "#D2D5DA",
        "custom-light-gray": "#6C727F",
        "custom-dark-gray": "#282B30",
        "custom-blue": "#4E80EE",
      },
    },
  },
  plugins: [],
};
