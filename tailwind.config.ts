import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#00D9A3',
        accent: '#FF6B6B',
        dark: '#0A0E27',
      },
      fontFamily: { sans: ['Vazirmatn', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
export default config
