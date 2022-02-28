import paths                   from './config/paths.js'
import vue                     from '@vitejs/plugin-vue'
import WindiCSS                from 'vite-plugin-windicss'
import AutoImport              from 'unplugin-auto-import/vite'
import Components              from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport( {
      resolvers: [ ElementPlusResolver() ],
    } ),
    Components( {
      resolvers: [ ElementPlusResolver() ],
    } ),
  ],
  server:  {
    port: process.env.PORT || 5555,
    open: false
  },
  resolve: {
    alias: paths.makeAliasForVite()
  }

}
