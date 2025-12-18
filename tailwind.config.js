/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff5f5",
          100: "#ffecec",
          300: "#ff8a8a",
          500: "#ff4b4b",
          600: "#e03b3b",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.6)",
          dark: "rgba(15,15,15,0.55)"
        }
      },
      boxShadow: {
        soft: "0 6px 18px rgba(20,20,20,0.08)",
        float: "0 12px 40px rgba(10,10,10,0.12)"
      },
      borderRadius: {
        "xl-3": "1.25rem"
      }
    },
  },
  plugins: [],
}
