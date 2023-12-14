/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-header-background': '#9A7197',
        'light-header-details':  "#312450",
        'light-body-background1': '#f5f5f5',
        'light-body-background2': '#e6e6fa',
        'light-body-background3': '#add8e6',
        'light-body-background4': '#dcdcff',
        'light-body-title1': '#704a6e',
        'light-body-title2': '#333333',
        'light-body-text1': '#333333',
        'light-body-text2': '#704a6e',
        'light-body-text3': '#8b4513',
        'light-body-text4': '#312450',
        'light-body-button': '#b9a0b9',
        'light-highlight': '#ffb6c1',
        'dark-header-background': '#312450',
        'dark-header-details': '#9A7197',
        'dark-body-background1': '#282828',
        'dark-body-background2': '#3a3140',
        'dark-body-background3': '#191970',
        'dark-body-background4': '#2d2631',
        'dark-body-title1': '#b686a4',
        'dark-body-title2': '#dcdcdc',
        'dark-body-text1': '#dcdcdc',
        'dark-body-text2': '#704a6e',
        'dark-body-text3': '#8b4513',
        'dark-body-text4': '#312450',
        'dark-body-button': '#704a6e',
        'dark-body-button-text': '#b3b3b3',
        'dark-highlight': '#ffb6c1',
      }
    },
  },
  plugins: [],
}

