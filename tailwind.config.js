// //tailwind.config.js

// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",

  theme: {
    extend: {
      colors: {
        zinc: {
          50: "#F9FFFB",
          // 500: "#2AB939",
          200: "#999999",
          600: "#292929",
          // 600: "#048317",
        },
        yellow: {
          400: "#FDD912",
        },
        dark: {
          600: "#1F2937",
        },
      },
    },
  },

  plugins: [],
};
