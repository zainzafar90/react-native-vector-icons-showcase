const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        1: `${1 * 0.25}rem`,
        2: `${2 * 0.25}rem`,
        3: `${3 * 0.25}rem`,
        4: `${4 * 0.25}rem`,
        5: `${5 * 0.25}rem`,
        6: `${6 * 0.25}rem`,
      },
      boxShadow: {
        px: defaultTheme.boxShadow.xs,
        1: defaultTheme.boxShadow.sm,
        2: defaultTheme.boxShadow.default,
        3: defaultTheme.boxShadow.md,
        4: defaultTheme.boxShadow.lg,
        5: defaultTheme.boxShadow.xl,
        6: defaultTheme.boxShadow["2xl"],
        "px-1": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.sm,
        "px-2":
          defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.default,
        "px-3": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.md,
        "px-4": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.lg,
        "px-5": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.xl,
        "px-6":
          defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow["2xl"],
      },
      colors: {
        // html {
        //   --theme: hsl(270, 100%, 50%);
        //   --dark-theme: hsl(270, 100%, 43.75%);
        // }
        theme: "#8000ff",
        "dark-theme": "#7000df",
      },
      opacity: {
        0: "0",
        6.25: "0.0625",
        12.5: "0.125",
        18.75: "0.1875",
        25: "0.25",
        75: "0.75",
        81.25: "0.8125",
        87.5: "0.875",
        93.75: "0.9375",
        100: "1",
      },
    },
    screens: {
      sm: 640 + "px",
      md: 768 + "px",
      lg: 24 + 1024 + 24 + "px",
      xl: 24 + 1280 + 24 + "px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
