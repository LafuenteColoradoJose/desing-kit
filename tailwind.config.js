module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'media', // o 'media' o 'class'
  theme: {
    extend: {
      colors: {
        'primary' : '#4d8fa5',
        'secondary' : '#3a7e94',
        'tertiary': '#276e83',
        'quaternary': '#135d71',
        'quinary': '#004c60',
        'complementary': '#a5694d',
        'analogous1': '#594da5',
        'analogous2': '#4da563',
        'triadic1': '#a5954d',
        'triadic2': '#a54d6d',
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
};