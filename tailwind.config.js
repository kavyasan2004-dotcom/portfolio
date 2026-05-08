/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE7D9',
          white: '#FAF7F2',
        },
        graphite: {
          DEFAULT: '#3D3A38',
          light: '#5A5754',
          lighter: '#7A7673',
        },
        pencil: {
          DEFAULT: '#B8B2A8',
          light: '#D4CFC8',
          dark: '#8A847C',
        },
        vermillion: {
          DEFAULT: '#C84B31',
          dark: '#A83B24',
          light: '#D4614A',
        },
        terracotta: {
          DEFAULT: '#c8855a',
          light: '#d9a07a',
          dark: '#a86840',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '0.9' }],
        '9xl': ['7.5rem', { lineHeight: '0.88' }],
        '10xl': ['9rem', { lineHeight: '0.86' }],
        '11xl': ['11rem', { lineHeight: '0.84' }],
      },
      letterSpacing: {
        'editorial': '0.04em',
        'display': '-0.02em',
        'wide-xl': '0.15em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};