/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.jsx", "./src/views/**/*.jsx", "./src/**/*.jsx"], //you have to add the path to every folder you use tailwind classes
  darkMode: 'class',
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
      'h-sm': { 'raw': '(max-height: 640px)' },

      'h-md': { 'raw': '(max-height: 768px)' },

      'h-lg': { 'raw': '(max-height: 1024px)' },
      
      'sm': '640px',

      'mmd': '641px',

      'md': '1025px',

      'lg': '1024px',
    

      'xl': '1280px',
    

      '2xl': '1536px',
     

      '3xl': '1700px',
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
      animation: {
        'pulse': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-delay': 'pulse 10s 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.1)' },
        },
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #a0aec0 1px, transparent 1px), linear-gradient(to bottom, #a0aec0 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '40px 40px',
      },
    },

    
  },
  plugins: [
    require('daisyui'),
  ],
}
