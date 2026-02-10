module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/views/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Manrope", "system-ui", "sans-serif"],
      display: ["Fraunces", "Georgia", "serif"],
    },
    extend: {
      colors: {
        // Base surfaces
        bg: "#F7F8FA",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        text: "#1F2937",
        textLight: "#6B7280",

        // Semantic badge colors
        success: {
          bg: "#ECFDF5",
          text: "#059669",
        },
        danger: {
          bg: "#FEE2E2",
          text: "#DC2626",
        },
        warning: {
          bg: "#FEF9C3",
          text: "#CA8A04",
        },
        info: {
          bg: "#DBEAFE",
          text: "#2563EB",
        },
        purple: {
          bg: "#F3E8FF",
          text: "#7C3AED",
        },
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      boxShadow: {
        card: "0 1px 4px rgba(0,0,0,0.06)",
        cardHover: "0 2px 8px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
