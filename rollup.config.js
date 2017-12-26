import babel from 'rollup-plugin-babel'
import scss from 'rollup-plugin-scss'


export default {
  input: 'src/main.js',
  output: {
    file: 'public/SmoothLightbox.js',
    format: 'umd',
    name: 'SmoothLightbox'
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: ['node_modules/**', 'src/styles/main.scss'],
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    scss({
      output: 'public/SmoothLightbox.css',
      failOnError: true
    }),
  ],
  version: true,
  sourcemap: true,
}