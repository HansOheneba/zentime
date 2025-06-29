// tailwind.config.ts
import type { Config } from 'tailwindcss'
import animated from 'tailwindcss-animated'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [animated],
}

export default config
