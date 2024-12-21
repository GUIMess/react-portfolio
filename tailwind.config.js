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
        bounce: {
          '0%, 100%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 }
        },
        disco: {
          '0%': { backgroundColor: '#ff0000' },
          '25%': { backgroundColor: '#00ff00' },
          '50%': { backgroundColor: '#0000ff' },
          '75%': { backgroundColor: '#ff00ff' },
          '100%': { backgroundColor: '#ff0000' }
        }
      },
      animation: {
        shake: 'shake 0.2s linear 5',
        bounce: 'bounce 0.5s infinite',
        pulse: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        disco: 'disco 2s infinite'
      }
    }
  },
  plugins: [],
}