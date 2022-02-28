import paths                   from './config/paths.js'
import vue                     from '@vitejs/plugin-vue'
import WindiCSS                from 'vite-plugin-windicss'
import ElementPlus             from 'unplugin-element-plus/vite'
import AutoImport              from 'unplugin-auto-import/vite'
import Components              from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons                   from 'unplugin-icons/vite'
import IconsResolver           from 'unplugin-icons/resolver'
import VueI18n                 from '@intlify/vite-plugin-vue-i18n'
import Pages                   from 'vite-plugin-pages'
import Layouts                 from 'vite-plugin-vue-layouts'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  css:        {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@assets/styles/element/index.scss" as *;`,
      },
    },
  },
  server:     {
    port: process.env.PORT || 5555,
    open: false
  },
  resolve:    {
    alias: paths.makeAliasForVite()
  },
  ssgOptions: {
    script:     'async',
    formatting: 'minify',
  },
  plugins:    [
    vue(),

    Pages( {
      dirs:    'src/ui/views',
      exclude: [ '**/components/*.vue' ],
    } ),

    Layouts( {
      layoutsDirs: 'src/ui/layouts',
    } ),

    // VueI18n({
    //   runtimeOnly: true,
    //   compositionOnly: true,
    //   include: [path.resolve(__dirname, 'locales/**')],
    // }),

    ElementPlus( {
      useSource: true,
    } ),

    AutoImport( {
      imports:   [
        'vue',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      resolvers: [ ElementPlusResolver( { importStyle: 'sass' } ) ],
      dts:       'src/auto-imports.d.ts',
    } ),

    Components( {
      dirs:       [ 'src/ui/components' ],
      extensions: [ 'vue' ],
      deep:       true,
      resolvers:  [
        ElementPlusResolver( { importStyle: 'sass' } ),
        IconsResolver( { prefix: 'icon' } ),
      ],
      dts:        'src/components.d.ts',
    } ),

    WindiCSS(),

    Icons( { compiler: 'vue3' } ),
  ],

}
