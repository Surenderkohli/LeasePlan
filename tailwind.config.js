module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./libs/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "pattern-bg": "url('/images/home_bg.png')",
        "slider-home": "url('/images/lp-logo-footer@2x 2.png')",
      },
      colors: {
        // Configure your color palette here

        primary_orange_400: '#f06400',
        primary_orange_300: '#ed8b00',
        primary_orange_50: '#fdf3e5',
        primary_orange_dark:'#ee4c13',
        text_headings: '#004a5d',
        background_main: '#f6f8fb',
        cardBottom: '#FAFAFA',
        text_darkgrey: '#2d2d2d',
        text_lightgrey: '#545656',
        text_naturalgrey:'#989a9a'
        
      
      },
    },
  },

  corePlugins: {
    container: false,
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      }),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio");
    },
  ],
};
