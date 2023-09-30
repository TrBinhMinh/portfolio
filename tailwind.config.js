/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#2D42FF',
      secondary: '#7389FA',
      'txt-color': '#FCFCFC',
      'secondary-color': '#EEEEEE',
      'bg-main': '#0C0B0E',
      asterisk: '#E63B1D',
      'gradient-start': '#2F7EE4',
      'gradient-end': '#5361FA',
    },
    fontFamily: {
      Montserrat: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        13: '3.25rem',
        66: '16.5rem',
        68: '17rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      fontSize: {
        '5.5xl': '3.375rem'
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
