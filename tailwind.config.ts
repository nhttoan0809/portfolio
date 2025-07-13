// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/ui/**/*.{tsx,ts,js,jsx}"],
  
  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(240, 253, 244)",
          100: "rgb(220, 252, 231)",
          200: "rgb(187, 247, 208)",
          300: "rgb(134, 239, 172)",
          400: "rgb(74, 222, 128)",
          500: "rgb(34, 197, 94)",
          600: "rgb(22, 163, 74)",
          700: "rgb(21, 128, 61)",
          800: "rgb(22, 101, 52)",
          900: "rgb(20, 83, 45)",
        },
        neutral: {
          0: "rgb(255, 255, 255)",
          50: "rgb(250, 250, 250)",
          100: "rgb(245, 245, 245)",
          200: "rgb(229, 229, 229)",
          300: "rgb(212, 212, 212)",
          400: "rgb(163, 163, 163)",
          500: "rgb(115, 115, 115)",
          600: "rgb(82, 82, 82)",
          700: "rgb(64, 64, 64)",
          800: "rgb(38, 38, 38)",
          900: "rgb(23, 23, 23)",
          950: "rgb(10, 10, 10)",
        },
        error: {
          50: "rgb(255, 241, 242)",
          100: "rgb(255, 228, 230)",
          200: "rgb(254, 205, 211)",
          300: "rgb(253, 164, 175)",
          400: "rgb(251, 113, 133)",
          500: "rgb(244, 63, 94)",
          600: "rgb(225, 29, 72)",
          700: "rgb(190, 18, 60)",
          800: "rgb(159, 18, 57)",
          900: "rgb(136, 19, 55)",
        },
        warning: {
          50: "rgb(255, 251, 235)",
          100: "rgb(254, 243, 199)",
          200: "rgb(253, 230, 138)",
          300: "rgb(252, 211, 77)",
          400: "rgb(251, 191, 36)",
          500: "rgb(245, 158, 11)",
          600: "rgb(217, 119, 6)",
          700: "rgb(180, 83, 9)",
          800: "rgb(146, 64, 14)",
          900: "rgb(120, 53, 15)",
        },
        success: {
          50: "rgb(240, 253, 244)",
          100: "rgb(220, 252, 231)",
          200: "rgb(187, 247, 208)",
          300: "rgb(134, 239, 172)",
          400: "rgb(74, 222, 128)",
          500: "rgb(34, 197, 94)",
          600: "rgb(22, 163, 74)",
          700: "rgb(21, 128, 61)",
          800: "rgb(22, 101, 52)",
          900: "rgb(20, 83, 45)",
        },
        "brand-primary": "rgb(22, 163, 74)",
        "default-font": "rgb(23, 23, 23)",
        "subtext-color": "rgb(115, 115, 115)",
        "neutral-border": "rgb(229, 229, 229)",
        white: "rgb(255, 255, 255)",
        "default-background": "rgb(255, 255, 255)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        "heading-3": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "heading-2": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
      },
      fontFamily: {
        caption: "Outfit",
        "caption-bold": "Outfit",
        body: "Outfit",
        "body-bold": "Outfit",
        "heading-3": "Outfit",
        "heading-2": "Outfit",
        "heading-1": "Outfit",
        "monospace-body": "monospace",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)",
        lg: "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
        overlay:
          "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        DEFAULT: "16px",
        lg: "24px",
        full: "9999px",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
  plugins: [],
  // presets: ["./src/ui/tailwind.config.js"]
};
