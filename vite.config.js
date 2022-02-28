import paths                   from './config/paths.js'
import vue                     from '@vitejs/plugin-vue'
import WindiCSS                from 'vite-plugin-windicss'
import ElementPlus             from 'unplugin-element-plus/vite'
import AutoImport              from 'unplugin-auto-import/vite'
import Components              from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons                   from 'unplugin-icons/vite'
import IconsResolver           from 'unplugin-icons/resolver'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  css:     {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@assets/styles/element/index.scss" as *;`,
      },
    },
  },
  server:  {
    port: process.env.PORT || 5555,
    open: false
  },
  resolve: {
    alias: paths.makeAliasForVite()
  },
  plugins: [
    vue(),
    ElementPlus( {
      useSource: true,
    } ),
    AutoImport( {
      resolvers: [ ElementPlusResolver() ],
    } ),
    Components( {
      resolvers: [
        ElementPlusResolver( {
          importStyle: 'sass',
        } ),
        IconsResolver({
          prefix: 'icon'
        }),
      ],
    } ),
    WindiCSS(),
    Icons( { compiler: 'vue3' } ),
  ],

}
