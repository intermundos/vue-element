// @ts-ignore
import paths                   from './config/paths.js'
import vue                     from '@vitejs/plugin-vue'
import WindiCSS                from 'vite-plugin-windicss'
import ElementPlus             from 'unplugin-element-plus/vite'
import AutoImport              from 'unplugin-auto-import/vite'
import Components              from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons                   from 'unplugin-icons/vite'
import IconsResolver           from 'unplugin-icons/resolver'
import VueI18n                 from '@intlify/vite-plugin-vue-i18n' // TODO add i18n

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  css    : {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@assets/styles/element/index.scss" as *;`,
      },
    },
  },
  server : {
    port: process.env.PORT || 5555,
    open: false
  },
  resolve: {
    alias: paths.makeAliasForVite()
  },
  plugins: [

    vue(),

    VueI18n( {
      runtimeOnly    : true,
      compositionOnly: true,
      // include:         `${ paths.ROOT }/src/core/i18n/locales/**`,
    } ),

    ElementPlus( {
      useSource: true,
    } ),

    AutoImport( {
      include  : [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports  : [
        'vue',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      resolvers: [
        ElementPlusResolver( { importStyle: 'sass' } ),
      ],
      dts      : 'src/auto-imports.d.ts',
    } ),

    Components( {
      dirs      : [ 'src/ui/components' ],
      extensions: [ 'vue' ],
      deep      : true,
      // include:    [ /\.vue$/, /\.vue\?vue/ ],
      // exclude:    [ /[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/ ],
      resolvers: [
        ElementPlusResolver( {
          importStyle: 'sass',
        } ),
        IconsResolver( { prefix: 'icon' } ),
      ],
      dts      : 'src/components.d.ts',
    } ),

    WindiCSS(),

    Icons( { compiler: 'vue3' } ),

  ],

}
