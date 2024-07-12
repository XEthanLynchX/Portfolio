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
      'shade1': '#1d3262',
      'shade2': '#264283',
      'shade3': '#3053a4',
      'shade4': '#3a64c5',
      'shade5': '#5a7ecf',
      

      

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      sans: ['Open Sans', 'sans-serif'],
      robotoSlab: ['Roboto Slab', 'serif'],
      sans: ['Open Sans', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],

    },
    

    textShadow: {
      'default': '2px 2px 4px rgba(0,0,0,0.5)',
    },

    fontSize: {
      'xssm': '8px',
      'xxs': '12px', // '0.75rem
      'xs': '16px',    
      'sm': '20px',    
      'base': '24px',
      'md': '28px',
      'lg': '32px',
      'type':  '36px',  
      'xl': '48px',     
      '2xl': '64px',     
      '3xl': '72px',
      '4xl': '112px' ,
      '5xl': '144px',
      '6xl': '192px',

      
    },
    screens: {
      'sm': '640px',

      'mmd': '641px',

      'md': '1025px',

      'lg': '1024px',
    

      'xl': '1280px',
    

      '2xl': '1536px',
     

      '3xl': '1700px'
    }
    ,
    

    extend: {
      spacing: {
        '6xl': '32rem',
        '7xl': '80rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 4px 15px rgba(96, 130, 182, 0.8)', // Adjust the color and size as needed
      },

      
    },

    
  },
  plugins: [
    require('daisyui'),
  ],
}
