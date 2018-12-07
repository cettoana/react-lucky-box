import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

export default {
  input: 'compiled/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  external: ['react'],
  plugins: [
    commonjs(),
  ],
}
