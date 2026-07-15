/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#233554',
        },
        slate: {
          DEFAULT: '#8892b0',
          light: '#a8b2d1',
          lighter: '#ccd6f6',
        },
        teal: {
          DEFAULT: '#64ffda',
          dark: '#0d6b6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        content: '1000px',
      },
      spacing: {
        sidebar: '240px',
        section: '100px',
      },
    },
  },
  plugins: [],
}
