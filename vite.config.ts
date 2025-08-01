import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base:"/portfolioSite/",
  resolve:{
    alias: [{find: "@", replacement: path.resolve(__dirname,"src")}],
  },
})
