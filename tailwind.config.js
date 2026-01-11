/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "primary-white": "#fff",
        "primary-black": "#000",
        darkslategray: "#333",
        "zinc-500": "#71717a",
        "zinc-300": "#d4d4d8",
      },
      borderRadius: {
        "lg-8": "18.8px",
        "3xs": "10px",
      },
      fontFamily: {
  sans: ["Inter", "ui-sans-serif", "system-ui"],
  // sora: ["Sora", "sans-serif"],
}

    },

    // keep your custom font sizes
    fontSize: {
      base: "16px",
      xl: "20px",
      "9xl": "28px",
      "3xl": "22px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "5xl": "24px",
      inherit: "inherit",
    },

    // keep your custom breakpoints
    screens: {
      mq1425: { raw: "screen and (max-width: 1425px)" },
      lg: { max: "1200px" },
      mq825: { raw: "screen and (max-width: 825px)" },
      mq450: { raw: "screen and (max-width: 450px)" },
    },
  },
  plugins: [],
};
