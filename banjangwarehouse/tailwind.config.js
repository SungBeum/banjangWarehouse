const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": {
          DEFAULT: "#F75A2F",
          10: "#F75A2F1A",
        },
        "custom-black": "#0000004D",
        "custom-gray": {
          DEFAULT: "#C1C1C1",
          light: "#D9D9D9",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".routingButton": {
          "@apply text-[25px] leading-[30.26px] bg-white font-normal text-black  px-[11px] py-[21px] rounded-[20px]":
            {},
        },
        ".eventPopup": {
          "@apply text-[13px] leading-[18px] font-normal text-white p-1 rounded-[10px] tracking-[0.16px]":
            {},
        },
        ".commonText": {
          "@apply text-[18px] leading-[21.78px] font-normal text-black": {},
        },
      });
    }),
  ],
};
