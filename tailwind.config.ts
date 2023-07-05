import { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        beige: "#F5EFE7",
        purple: "#9376E0",
        pink: "#E893CF",
        orange: "#F2BE22",
        blue: "#2192FF",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
