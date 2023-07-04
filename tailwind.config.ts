import { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      background: "#F5EFE7",
    },
  },
  plugins: [animate],
} satisfies Config;
