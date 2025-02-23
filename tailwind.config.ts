
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#444444",
        input: "#333333",
        ring: "#6c5ce7",
        background: "#1A1A1A",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#6c5ce7",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#333333",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#2A2A2A",
          foreground: "#888888",
        },
        accent: {
          DEFAULT: "#34C759",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#FF4444",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
