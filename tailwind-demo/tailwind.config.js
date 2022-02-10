const plugin=require('tailwindcss/plugin')

module.exports = {
  mode:'jit',
  content: [
    'index.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'whitesmoke': '#fafafa',
      'grey': '#5e6052',
      'metal': '#5e605266',
      'tahiti': '#f2752a',
      'silver': '#ecebff',
      'amber-400': '#ffb016',
      'bermuda': '#78dcca',
    },
    fontSize: {
      'xs': '15px',
      'sm': '22px',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '70px',
    },
    boxShadow: {
      '2xl': '-10px 10px #ffb016',
    },
    extend: {
      width: {
        '128': '276px',
        '76':'76%',
        '11':'11.4%',
        '2/9':'30%',
      },
      lineHeight: {
        '12': '3rem',
        '14':'3.5rem',
        '16':'4.5rem',
      }
    },
  },
  plugins: [],
}
