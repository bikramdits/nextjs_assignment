import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#093545",
        primary: "#2BD17E",
        input: "#224957",
        card: "#092C39",
        error: "#EB5757",
        white: "#fff",
      },
      fontSize: {
        "2xs": ["0.75rem", { lineHeight: "1rem" }],
        xs: ["0.875rem", { lineHeight: "1.5rem" }],
        sm: ["0.9rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        h6: ["1rem", { lineHeight: "1.5rem" }],
        h5: ["1.25rem", { lineHeight: "1.5rem" }],
        h4: ["1.5rem", { lineHeight: "2rem" }],
        h3: ["2rem", { lineHeight: "2.5rem" }],
        h2: ["3rem", { lineHeight: "3.5rem" }],
        h1: ["4rem", { lineHeight: "5rem" }],
      },
      spacing: {
        "3xs": "0.125rem", // 2px
        "2xs": "0.25rem", // 4px
        xs: "0.5rem", // 8px
        sm: "0.75rem", // 12px
        base: "1rem", // 16px
        md: "1.5rem", // 24px
        lg: "2rem", // 32px
        xl: "2.5rem", // 40px
        "2xl": "3rem", // 48px
        "3xl": "3.5rem", // 56px
        "4xl": "4rem", // 64px
        "5xl": "5rem", // 80px
        "6xl": "7.5rem", // 120px
        "7xl": "10rem", // 160px
      },
      borderRadius: {
        none: "0",
        sm: ".125rem", // 2px
        DEFAULT: ".25rem", // 4px
        md: ".5rem", // 8px
        lg: ".625rem", // 10px
        xl: ".75rem", // 12px
        full: "9999px",
      },
      screens: {
        "2xl": "1636px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config
