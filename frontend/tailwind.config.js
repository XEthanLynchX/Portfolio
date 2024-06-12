/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.jsx", "./src/views/**/*.jsx", "./src/**/*.jsx"], //you have to add the path to every folder you use tailwind classes
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
      'darkblue' : '#0C1428',
      'gradient1': '#132141',
      'gradient2': '#132141',
      'gradient3': '#6082B6',
      

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      cambria: ['Cambria', 'serif'],

      
      

      
    },

    fontSize: {
      'xs': '0.75rem',     // Extra small font size
      'sm': '20px',    // Small font size
      'base': '24px',
      'type':  '36px',     // Base font size
      'lg': '32px',    // Large font size
      'xl': '48px',     // Extra large font size
      '2xl': '64px',     // 2 times extra large font size
      '3xl': '72px',
      '4xl': '112px' ,
      '5xl': '144px',
      '6xl': '192px',

      
    },

    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 4px 15px rgba(96, 130, 182, 0.8)', // Adjust the color and size as needed
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
