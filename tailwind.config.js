module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          "900_0c": "var(--black_900_0c)",
          "900_19": "var(--black_900_19)",
          "900_26": "var(--black_900_26)",
          "900_68": "var(--black_900_68)",
        },
        blue_gray: { 100: "var(--blue_gray_100)", "100_7f": "var(--blue_gray_100_7f)" },
        gray: { 50: "var(--gray_50)", 500: "var(--gray_500)", 800: "var(--gray_800)", "500_7f": "var(--gray_500_7f)" },
        white: { a700: "var(--white_a700)", a700_82: "var(--white_a700_82)" },
        yellow: { 400: "var(--yellow_400)" },
      },
      boxShadow: {
        xs: "0 16px 25px 0 #0000000c",
        sm: "0 16px 50px 0 #0000000c",
        md: "0 16px 50px 0 #00000019",
        lg: "0 16px 50px 0 #00000026",
      },
      fontFamily: { poppins: "Poppins", playfairdisplay: "Playfair Display" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
