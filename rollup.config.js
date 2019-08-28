import typescript from 'rollup-plugin-typescript'

import pkg from './package.json'

export default {
  input: `src/tidb.ts`,
  output: [
    // CommonJS
    {
      file: pkg.main,
      format: 'cjs',
      indent: false
    },
    // ES
    {
      file: pkg.module,
      format: 'es',
      indent: false
    }
  ],
  plugins: [typescript()]
}
