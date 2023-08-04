/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#eff0f5",
        },
        darkslateblue: {
          "100": "#0e1b4d",
          "200": "rgba(14, 27, 77, 0.75)",
          "300": "rgba(14, 27, 77, 0.08)",
        },
        lightsteelblue: "#9fbed2",
        gray: {
          "100": "#74846f",
          "200": "#757575",
          "300": "rgba(255, 255, 255, 0)",
          "400": "rgba(255, 255, 255, 0.08)",
        },
        white: "#fff",
        darkslategray: "#333",
        beige: "#fdfce5",
        gainsboro: "#e0e5dd",
        aliceblue: "#eceff5",
        black: "#000",
        dimgray: {
          "100": "#666",
          "200": "#654236",
        },
        tomato: "#e24e1b",
      },
      fontFamily: {
        kalam: "Kalam",
        "open-sans": "'Open Sans'",
        inter: "Inter",
        "indie-flower": "'Indie Flower'",
        "luckiest-guy": "'Luckiest Guy'",
        poppins: "Poppins",
      },
      borderRadius: {
        "21xl": "40px",
        xl: "20px",
      },
    },
    fontSize: {
      "mini-3": "14.3px",
      "mini-7": "14.7px",
      mini: "15px",
      "xs-6": "11.6px",
      "base-8": "16.8px",
      base: "16px",
      xl: "20px",
      smi: "13px",
      "5xl": "24px",
      "3xl": "22px",
      "19xl": "38px",
      "20xl": "39px",
      "21xl": "40px",
      "sm-3": "13.3px",
      "13xl": "32px",
      "lgi-2": "19.2px",
      "2xs-7": "10.7px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
