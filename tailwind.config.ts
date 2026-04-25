import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#24352d",
        forest: "#274f42",
        forestSoft: "#d7e4dc",
        cream: "#f7f3ea",
        orangeSoft: "#f6ddc2",
        orangeAccent: "#d28d58",
        line: "rgba(39, 79, 66, 0.14)",
      },
      boxShadow: {
        card: "0 20px 50px rgba(29, 63, 50, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["'Noto Sans SC'", "'PingFang SC'", "'Microsoft YaHei'", "sans-serif"],
        serif: ["'Noto Serif SC'", "'Source Han Serif SC'", "serif"],
      },
      backgroundImage: {
        "paper-glow":
          "radial-gradient(circle at top, rgba(238, 176, 114, 0.18), transparent 28%), linear-gradient(180deg, rgba(247, 243, 234, 0.98), rgba(247, 243, 234, 1))",
      },
    },
  },
  plugins: [],
};

export default config;
