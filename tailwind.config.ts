import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': 'oklch(0.85 0.15 195)',
        'neon-green': 'oklch(0.82 0.2 145)',
        'neon-orange': 'oklch(0.78 0.18 55)',
        'neon-red': 'oklch(0.7 0.22 25)',
        'neon-purple': 'oklch(0.7 0.2 290)',
        'neon-blue': 'oklch(0.75 0.18 250)',
      },
    },
  },
  plugins: [],
}
export default config
