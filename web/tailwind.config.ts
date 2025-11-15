import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#b9d9ff',
          300: '#8cc1ff',
          400: '#509dff',
          500: '#1977f3',
          600: '#0b6efe',
          700: '#0a5adb',
          800: '#0c49af',
          900: '#0f3f8c',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
