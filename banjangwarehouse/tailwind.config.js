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
        "custom-black": {
          30: "rgba(0, 0, 0, 0.3)",
          25: "rgba(0, 0, 0, 0.25)",
        },
        "custom-gray": {
          DEFAULT: "#C1C1C1",
          light: "#D9D9D9",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".routingButton": {
          "@apply text-[25px] leading-[30.26px] bg-white font-normal text-black  px-[11px] py-[21px] rounded-[20px]":
            {},
        },
        ".eventPopup": {
          "@apply text-[13px] bg-custom-orange leading-[18px] text-white p-1 rounded-[10px] tracking-[0.16px] font-roboto":
            {},
        },
        ".commonText": {
          "@apply text-[18px] leading-[21.78px] font-normal text-black": {},
        },
        ".navShadow": {
          boxShadow: `0 4px px 0px ${theme("colors.custom-black.25")}, 0 2px 4px -1px ${theme("colors.custom-black.25")}`,
        },
        ".footerShadow": {
          boxShadow: `0 4px 10px 0px ${theme("colors.custom-black.25")}, 0 2px 4px -1px ${theme("colors.custom-black.25")}`,
        },
      });
    }),
  ],
};
