/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customOrange: "#ff7f3e",
        generalColor: "#ebebeb",
        imageColor: "#f1f1f1",
      },
      width: {
        navWidth: "1442px",
        navItemWidth: "551px",
        catWidth: "143px",
        catItemsWidth: "112px",
        arrivalWidth: "1440px",
        imageW: "83px",
        calcW:"1020px"
      },
      height: {
        navHeight: "80px",
        navItemHeight: "32px",
        catHeight: "327px",
        catItemsHeight: "275px",
        arrivalHeight: "112px",
        footerHeight: "215px",
        imageH: "83px",
        calcH: "120px"
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        lemonda: ["Lemonada", "cursive"],
      },
      fontSize: {
        logo: "28px",
        arrival: "45px",
      },
      colors: {
        borderColor: "#ababab",
        star: "#FF9A3F",
        customOrange: "#ff7f3e",
        customBlack: "#1e1e1e"
      },
      
    },
  },
  plugins: [],
};
