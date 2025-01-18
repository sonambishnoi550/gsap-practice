/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1328px"
        },
      },

     
      fontSize: {
        'custom-xl': '22px',
        'custom-2xl': '25px',
       
      },
      lineHeight: {
        'custom-xl': '147%',
        
        'custom-3xl': '174%',
      },
      colors: {
        "skyblue": '#24FAFF',
        
      },
     
    },
  },
  plugins: [],
};
