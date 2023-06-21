/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "prodominicana-logo": "/images/prodominicana.png",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navy: "#062381",
        mint: "#1AD25D",
        "sky-blue": "rgba(41,151,242, 0.7)",
      },
      boxShadow: {
        button: "0px 0px 15px 15px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
