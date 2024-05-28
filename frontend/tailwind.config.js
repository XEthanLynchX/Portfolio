/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.jsx"],
  theme: {
    colors: {
      'blue': '#4169E1',
      'purple': '#EE82EE',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'red': '#ff4f4f',
      'white': '#ffffff',
      'black': '#000000',
      'darkblue' : '#0C1428'

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      
    },

    fontSize: {
      'xs': '0.75rem',     // Extra small font size
      'sm': '20px',    // Small font size
      'base': '28px',      // Base font size
      'lg': '32px',    // Large font size
      'xl': '48px',     // Extra large font size
      '2xl': '64px',     // 2 times extra large font size
      '3xl': '96px',   // 3 times extra large font size
      // Add your custom font sizes here
    },

    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
