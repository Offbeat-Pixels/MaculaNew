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
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};