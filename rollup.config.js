import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  external: ['mysql'],
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
