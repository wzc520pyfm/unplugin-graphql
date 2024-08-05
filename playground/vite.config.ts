import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import UnpluginGraphql from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    UnpluginGraphql(),
  ],
})
