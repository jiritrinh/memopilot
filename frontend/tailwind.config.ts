import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#f8e6ea', // A light shade for background
          500: '#e45779', // Your specified color
          // Add other shades if needed, e.g., 600: '#d04a6b'
        },
      },
    },
  },
  plugins: [],
}
export default config 