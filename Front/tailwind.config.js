/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-100': '#f4f2f2', // Adjust to your specific color needs
        'gray-200': '#f0eeee', // Custom background color on focus
        'gray-400': '#b4b4b4', // For the icon color
      },
      boxShadow: {
        'custom-black': '0 0 1em rgba(0, 0, 0, 0.07)', // Custom shadow equivalent
      },
    },
  },
  plugins: [],
};
