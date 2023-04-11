/** @type {import('tailwindcss').Config} */
const {createGlobPatternsForDependencies} = require('@nrwl/react/tailwind')
const {join} = require('path')

export default {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec|*.test).{js,jsx,ts,tsx,mdx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {},
  plugins: [],
  presets: [require('../../tailwind-config-preset.js')]
}
