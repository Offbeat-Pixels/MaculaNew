/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-pattern": "url('/src/assets/BannerImg.png')",
        "why-pattern": "url('/src/assets/WhySectionImg.png')",
        "service-pattern": "url('/src/assets/ServiceSectionImg.png')",
        "contact-pattern": "url('/src/assets/contactImg.png')",
        "unique-pattern": "url('/src/assets/uniqueImg.png')",
        "servicepage-pattern": "url('/src/assets/ServiceImg.png')",
        "WhitePapper2-pattern": "url('/src/assets/WhitePapper2.png')",
        "mission-pattern": "url('/src/assets/mission.png')",
        "values-pattern": "url('/src/assets/values.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#3b82f6", // Define your primary color
        },
      },
      screens:{
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
        "6xl": "5120px",
        "7xl": "7680px",
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("@tailwindcss/typography")],
};