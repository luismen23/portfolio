/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bubblegum: '#ff77e9',
      bermuda: '#78dcca',
      black: '#000814',
      darkblue: '#001d3d',
      blue: '#003566',
      yellow: '#fca311',
      gray: '#e5e5e5'
    },
    fontFamily: {
      garamond: ['EB Garamond', 'sans-serif']
    }
  },
  plugins: []
}
