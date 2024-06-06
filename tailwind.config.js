/** @type {import('tailwindcss').Config} */

const blackColor = 'hsl(0, 0%, 7%)';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        Yellow: 'hsl(47, 88%, 63%)',
        White: 'hsl(0, 0%, 100%)',
        Grey: 'hsl(0, 0%, 50%)',
        Black: blackColor,
      },
      boxShadow: {
        black: '8px 8px 0 0 ${blackColor}',
      },
    },
    plugins: [],
  },
};
