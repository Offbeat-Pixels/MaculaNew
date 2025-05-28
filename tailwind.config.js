// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           "0%": { "background-position": "100%" },
//           "100%": { "background-position": "-100%" },
//         },
//       },
//       backgroundImage: {
//         "banner-pattern": "url('/src/assets/BannerImg.png')",
//         "why-pattern": "url('/src/assets/WhySectionImg.png')",
//         "service-pattern": "url('/src/assets/ServiceSectionImg.png')",
//         "contact-pattern": "url('/src/assets/contactImg.png')",
//         "unique-pattern": "url('/src/assets/uniqueImg.png')",
//         "servicepage-pattern": "url('/src/assets/ServiceImg.png')",
//         "WhitePapper2-pattern": "url('/src/assets/WhitePapper2.png')",
//         "mission-pattern": "url('/src/assets/mission.png')",
//         "values-pattern": "url('/src/assets/values.png')",
//       },
//       colors: {
//         primary: {
//           DEFAULT: "#3b82f6", // Define your primary color
//         },
//       },
//       screens: {
//         sm: "640px",
//         md: "768px",
//         lg: "1024px",
//         xl: "1280px",
//         "2xl": "1536px",
//         "3xl": "1920px",
//         "4xl": "2560px",
//         "5xl": "3840px",
//         "6xl": "5120px",
//         "7xl": "7680px",
//       },
//       animation: {
//         shine: "shine 5s linear infinite",
//       },
//     },
//   },
//   plugins: [
//     require("tailwindcss-motion"),
//     require("@tailwindcss/typography"),
//     addVariablesForColors,
//   ],
// };


// // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [--${key}, val])
//   );
 
//   addBase({
//     ":root": newVars,
//   });
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
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
          DEFAULT: "#3b82f6",
        },
      },
      screens: {
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
      animation: {
        shine: "shine 5s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-motion"),
    require("@tailwindcss/typography"),
    addVariablesForColors,
  ],
};

// FIXED function without flattenColorPalette
function addVariablesForColors({ addBase, theme }) {
  const colors = theme("colors");
  
  const flattenColors = (colors, prefix = "") =>
    Object.entries(colors).reduce((acc, [key, value]) => {
      if (typeof value === "object") {
        Object.assign(acc, flattenColors(value, `${prefix}${key}-`));
      } else {
        acc[`--${prefix}${key}`] = value;
      }
      return acc;
    }, {});

  addBase({
    ":root": flattenColors(colors),
  });
}
