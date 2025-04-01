/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class", // Enables dark mode using class strategy
  content: [
    "./index.html", // Include main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, TSX files in src/
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background, 0 0% 100%))", // White by default
        foreground: "hsl(var(--foreground, 222.2 84% 4.9%))", // Dark text by default
        card: {
          DEFAULT: "hsl(var(--card, 0 0% 100%))",
          foreground: "hsl(var(--card-foreground, 222.2 84% 4.9%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 0 0% 100%))",
          foreground: "hsl(var(--popover-foreground, 222.2 84% 4.9%))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary, 245 100% 60%))",
          foreground: "hsl(var(--primary-foreground, 0 0% 100%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 240 5% 26%))",
          foreground: "hsl(var(--secondary-foreground, 0 0% 100%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 240 4% 16%))",
          foreground: "hsl(var(--muted-foreground, 0 0% 100%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 240 4% 30%))",
          foreground: "hsl(var(--accent-foreground, 0 0% 100%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0 100% 60%))",
          foreground: "hsl(var(--destructive-foreground, 0 0% 100%))",
        },
        border: "hsl(var(--border, 240 5% 26%))",
        input: "hsl(var(--input, 240 5% 16%))",
        ring: "hsl(var(--ring, 245 100% 60%))",
        chart: {
          1: "hsl(var(--chart-1, 220 90% 56%))",
          2: "hsl(var(--chart-2, 190 90% 50%))",
          3: "hsl(var(--chart-3, 160 90% 44%))",
          4: "hsl(var(--chart-4, 130 90% 38%))",
          5: "hsl(var(--chart-5, 100 90% 32%))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Animation plugin
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--background": "0 0% 100%",
          "--foreground": "222.2 84% 4.9%",
          "--card": "0 0% 100%",
          "--card-foreground": "222.2 84% 4.9%",
          "--popover": "0 0% 100%",
          "--popover-foreground": "222.2 84% 4.9%",
          "--primary": "245 100% 60%",
          "--primary-foreground": "0 0% 100%",
          "--secondary": "240 5% 26%",
          "--secondary-foreground": "0 0% 100%",
          "--muted": "240 4% 16%",
          "--muted-foreground": "0 0% 100%",
          "--accent": "240 4% 30%",
          "--accent-foreground": "0 0% 100%",
          "--destructive": "0 100% 60%",
          "--destructive-foreground": "0 0% 100%",
          "--border": "240 5% 26%",
          "--input": "240 5% 16%",
          "--ring": "245 100% 60%",
          "--radius": "8px",
          "--chart-1": "220 90% 56%",
          "--chart-2": "190 90% 50%",
          "--chart-3": "160 90% 44%",
          "--chart-4": "130 90% 38%",
          "--chart-5": "100 90% 32%",
        },
      });
    }),
  ],
};
