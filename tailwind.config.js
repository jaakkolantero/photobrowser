module.exports = {
  theme: {
    extend: {
      width: {
        "150": "150px",
        "300": "300px",
      },
      height: {
        "150": "150px",
        "300": "300px",
      },
    },
  },
  variants: {
    display: ["responsive", "group-hover"],
  },
  plugins: [
    require("tailwind-easing-gradients")({
      variants: ["responsive", "group-hover"],
      // required
      gradients: {
        item: {
          easing: "cubic-bezier(0.7, 0, 0.84, 0)",
          color: ["transparent", "#1a202c"],
        },
      },
      // defaults
      alphaDecimals: 5,
      colorMode: "lrgb",
      type: "linear",
      easing: "ease", // default settings
      colorStops: 10,
      directions: {
        t: "to top",
        r: "to right",
        b: "to bottom",
        l: "to left",
      },
    }),
  ],
};
