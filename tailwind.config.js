/** @type {import('tailwindcss').Config} */
export default {
  // ... suas outras configs de content ...
  darkMode: "class", // Importante ter essa linha
  theme: {
    extend: {
      colors: {
        // AS CORES EXATAS DO DESIGN NOVO:
        "primary": "#49ec13", 
        "brand-yellow": "#FFD700",
        "background-light": "#f6f8f6",
        "background-dark": "#152210",
        "forest": "#132c0d", 
        "soft-yellow": "#fffbeb",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      // Adicionando os tamanhos de borda arredondada que ele usou
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      }
    },
  },
  plugins: [],
}