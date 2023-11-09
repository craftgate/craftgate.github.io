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
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
