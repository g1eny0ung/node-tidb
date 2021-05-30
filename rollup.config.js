import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  external: ['mysql'],
  output: [
    // CommonJS
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'default',
    },
    // ES
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [typescript()],
}
