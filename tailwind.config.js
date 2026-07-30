/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        // Base surfaces
        surface: {
          0: "#09090b", // zinc-950
          1: "#0f0f12", // slightly lighter
          2: "#18181b", // zinc-900
          3: "#27272a", // zinc-800
          4: "#3f3f46", // zinc-700
        },
        // Accent - violet
        accent: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
          muted: "#8b5cf620",
          border: "#8b5cf640",
        },
        // Difficulty colors
        easy: {
          DEFAULT: "#10b981",
          muted: "#10b98115",
          border: "#10b98140",
        },
        medium: {
          DEFAULT: "#f59e0b",
          muted: "#f59e0b15",
          border: "#f59e0b40",
        },
        hard: {
          DEFAULT: "#ef4444",
          muted: "#ef444415",
          border: "#ef444440",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-up": "slideUp 0.4s ease forwards",
        "slide-down": "slideDown 0.3s ease forwards",
        "scale-in": "scaleIn 0.3s ease forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(139,92,246,0)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(139,92,246,0.25)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle, #3f3f4620 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.15), transparent)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
    },
  },
  plugins: [],
};
