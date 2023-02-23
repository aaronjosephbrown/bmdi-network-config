/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#85c7dd",
        
"secondary": "#0de226",
        
"accent": "#104bcc",
        
"neutral": "#182125",
        
"base-100": "#2D2F4E",
        
"info": "#5268CB",
        
"success": "#198A72",
        
"warning": "#9E7805",
        
"error": "#E35962",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
