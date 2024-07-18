/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '280px',
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
      xxl: '1280px'
    },
    height: {
      'screen': '70vh',
      'screen-sm': '100vh',
      'custom-full': '100%',
      'sm-height': '4rem'
    },
    // colors: {
    //   'bg-white': '#ffffff',
    //   'blue-900': '#0D3153', 
    //   'white-antique': '#faebd7'
    // },
    extend: {},
  },
  plugins: [],
}

