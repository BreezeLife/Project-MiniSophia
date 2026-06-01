/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fff8f2",
        porcelain: "#fffdfb",
        blush: "#f6d9d7",
        rosewood: "#8b5158",
        ink: "#3f3032",
        cocoa: "#6f5550",
        gilt: "#b48961",
        sage: "#7e8f7d",
        sunshine: "#ffd36a",
        tangerine: "#f58a4b",
        sky: "#78c8df",
        berry: "#e65f83",
        mint: "#9acb88",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(139, 81, 88, 0.14)",
        button: "0 14px 34px rgba(139, 81, 88, 0.22)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "sans-serif",
        ],
        serif: [
          "Cormorant Garamond",
          "Georgia",
          "Times New Roman",
          "Songti SC",
          "SimSun",
          "serif",
        ],
      },
    },
  },
  plugins: [],
}
