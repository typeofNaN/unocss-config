import { defineConfig } from 'vite'
import viteDts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [viteDts({
    rollupTypes: true,
    copyDtsFiles: true
  })],
  build: {
    lib: {
      entry: './package/index.ts',
      name: 'UnocssConfig',
      formats: ['es', 'umd', 'cjs']
    }
  }
})
