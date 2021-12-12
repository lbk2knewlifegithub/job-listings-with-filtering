const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "jit",
  purge: {
    enabled: isProduction,
    content: [join(__dirname, "src/**/*.{html,ts}")],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1024px",
      },
      // create custom fonts here
      fontFamily: {
        mono: ["'Spartan'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        primary: withOpacity("--text-primary"),
        muted: withOpacity("--text-muted"),
        inverted: withOpacity("--text-inverted"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        header: withOpacity("--bg-header"),
        primary: withOpacity("--bg-primary"),
        dark: withOpacity("--bg-dark"),
        muted: withOpacity("--bg-muted"),
      },
      // borders colors
      borderColor: {
        primary: withOpacity("--border-primary"),
      },
    },
  },
  // custom variants
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen desktop": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
