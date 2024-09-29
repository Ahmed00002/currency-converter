/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        header: "rgb(255, 251, 240)",
        fontPrimary: "rgb(250, 190, 76)",
        para: "rgb(54, 57, 88)",
        para2: "rgb(62, 62, 62)",
        gradientStart: "rgb(164, 188, 70)",
        gradientEnd: "rgb(133, 160, 25)",
        cardBg: "rgb(241, 241, 241)",
        shadowColor: "rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
