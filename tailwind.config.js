// tailwind.config.js (v4 Compatible)

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // All theme customizations now live at the top level of the config.

  colors: {
    // Your brand colors
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    // Your semantic colors from CSS variables
    background: "var(--background)",
    foreground: "var(--foreground)",
  },

  borderRadius: {
    none: "0px",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
    full: "9999px",
    button: "8px",
  },

  fontFamily: {
    // Your custom fonts from layout.js
    sans: ["var(--font-open-sans)"],
    lora: ["var(--font-lora)"],
    display: ["var(--font-pacifico)"],
  },

  // Set dark mode strategy to align with your media query in globals.css
  darkMode: "media",

  plugins: [],
};
