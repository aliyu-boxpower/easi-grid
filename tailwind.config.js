/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ED583B',
          dark:"#141E46",
        },
        white:{
          DEFAULT: '#FFFFFF',
          light:"#F5F5F4",
          dark:"#FAFAFA",
          vlight:"rgba(163, 163, 163, 0.25)",

        },
        black:{
          DEFAULT: '#09090A',
          light:" rgba(0, 0, 0, 0.4)",
          dark:"#333333",
          vlight:"#828282",
          vdark:"#808080",
        },
        grey:{
          DEFAULT: 'rgba(120, 139, 149, 0.4)',
          light:"#F5F5F5",
          dark:"#FFE5D3",
          vdark:'#818181',
          vlight:"#FAFBFF",
          darkest:"#A09E9E",
          
        }
        // green:{
        //   DEFAULT: '#01E5B2',
        //   gradiant:"radial-gradient(270% 3033.24% at 18.13% -99.41%, #00E6B3 22.14%, #FFFFFF 34.58%, #01E5B2 88.93%, #FFFFFF 100%)",
          
        // },
      },
    },
    screens: {
      // 'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      
    },
    fontSize: {
      'xs': '10px',
      'sm': '10px',
      'tiny': '12px',
      'base': '14px',
      'lg':  '16px',
      'xl': '18px',
      '2xl': '20px',
      '3xl': '32px',
      '4xl': '26px',
      '5xl': '40px',
      '6xl': '64px',
      // '7xl': '100px',
      // '8xl': '20px',
    },
  },
  plugins: [],
}
