const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
        },
      });
    }),
  ],
};
