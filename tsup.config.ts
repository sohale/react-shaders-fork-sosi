import { defineConfig } from 'tsup'

export default defineConfig([
  {
  entry: ['core/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  sourcemap: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
  },
])
