/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme palette
        'bg-primary': '#0B0F0D',
        'bg-secondary': '#111715',
        'bg-tertiary': 'rgba(255,255,255,0.03)',
        'accent-green': '#7ED957',
        'theme-color': 'rgb(var(--theme-color-rgb) / <alpha-value>)',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B8C1BC',
      },
      backgroundColor: {
        'card': 'rgba(255,255,255,0.03)',
        'nav': 'rgba(11, 15, 13, 0.7)',
      },
      backdropBlur: {
        'xl': '20px',
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'glow': {
          '0%, 100%': {
            opacity: '0.5',
          },
          '50%': {
            opacity: '1',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '0.6',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
