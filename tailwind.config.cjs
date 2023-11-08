/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,tsx}'],
  theme: {
    extend: {
      colors: {
        tertiary: '#cccccc',
        card: '#222225',
      },
      container: {
        padding: '1rem',
        center: true,
      },
    },
  },
  plugins: [],
};
