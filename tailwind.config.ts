import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        booming: {
          primary: "#004185",
          secondary: "#002a5c",
          heading: "#1e293b",
          body: "#334155",
          light: "#f9fafb",
          border: "#e2e8f0"
        }
      },
      fontFamily: {
        sans: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
