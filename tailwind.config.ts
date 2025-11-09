import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Mode sombre (défaut)
        dark: {
          bg: '#2b2d42',
          'bg-secondary': '#1a1b2e',
          text: '#edf2f4',
          accent: '#8d99ae',
        },
        // Mode clair jaune joyeux
        light: {
          bg: '#fffbeb',
          'bg-secondary': '#fef3c7',
          text: '#78350f',
          accent: '#f59e0b',
        },
        // Couleurs d'accent
        accent: {
          blue: '#60a5fa',
          cyan: '#22d3ee',
          pink: '#f472b6',
          yellow: '#fbbf24',
          orange: '#f59e0b',
          green: '#4ade80',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 8rem)',
        'heading': 'clamp(2rem, 5vw, 4rem)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
