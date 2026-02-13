/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#800000",
        "background-light": "#f8f5f5",
        "background-dark": "#230f0f",
        "cream-accent": "#FFFBEB",
        "accent-gold": "#D4A574",
        "whatsapp-green": "#065F46",
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      }
    },
  },
  plugins: [],
}
