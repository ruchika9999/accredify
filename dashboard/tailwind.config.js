/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#151F32",
      secondly: "#353D4E",
      thirdly: "#493DF5",
      white: "#FFFFFF",
      "gray-scale-one": "#5B627A",
      "gray-scale-two": "#D0D2D6",
      "gray-scale-three": "#5B6270",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
