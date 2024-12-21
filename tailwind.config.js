/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
        'flame-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'brightness(1)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            filter: 'brightness(1.2)'
          }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' }
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0) rotate(5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-5deg)' }
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' }
        }
      },
      animation: {
        shake: 'shake 0.2s linear 5',
        'flame-pulse': 'flame-pulse 2s ease-in-out infinite',
        'float-slow': 'float-slow 3s ease-in-out infinite',
        'float-medium': 'float-medium 2.5s ease-in-out infinite',
        'float-fast': 'float-fast 2s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}