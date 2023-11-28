/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-bg": "#394561",
        "container-bg": "#777ca8",
      },
      fontFamily: {
        sans: ["var(--noto_sans_kr)"],
      },
      screens: {
        sm: { min: "390px", max: "819px" },
        md: { min: "820px", max: "1023px" },
        lg: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
