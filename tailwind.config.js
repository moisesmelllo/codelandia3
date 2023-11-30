/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#846AFF'
        },
        gray: {
          100: '#F8F8FF;'
        }
      }
    },
  },
  plugins: [],
}

 