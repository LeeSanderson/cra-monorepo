/** @type {import('tailwindcss').Config} */

const config = require("@brighthr/tailwind-config");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@brighthr/*/src/*"],
  theme: {
    extend: {
      ...config,
    },
    plugins: [],
  },
};
