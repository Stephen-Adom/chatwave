const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#5867e8',
        secondaryColor: '#958bf4',
      },
      backgroundImage: {
        lightGreyGradient: 'linear-gradient(145deg, #f4f5f7, #ffffff)',
      },
      boxShadow: {
        shadowLight: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
