/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainWhite: "#FFFFFF",
        mainBlue: "#071E60",

        textWhite: "#E0E0E0",
        mainBackground: "#12141D",
        borderColor: "#676767",
      },
    },
  },
  plugins: [],
};
