import { defineConfig } from 'tsup'

export default defineConfig([{
  entry: ['core/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  sourcemap: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    // THIS IS THE KEY FIX:
    options.jsx = 'automatic'
  },
}])
