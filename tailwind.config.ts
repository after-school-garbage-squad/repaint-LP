import { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./src/**/*.tsx"],
  theme: {},
  plugins: [animate],
} satisfies Config;
