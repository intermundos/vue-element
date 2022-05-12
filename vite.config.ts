// @ts-ignore
import paths                   from './config/paths.js'
import vue                     from '@vitejs/plugin-vue'
import WindiCSS                from 'vite-plugin-windicss'
import AutoImport              from 'unplugin-auto-import/vite'
import Components              from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons                   from 'unplugin-icons/vite'
import IconsResolver           from 'unplugin-icons/resolver'
// import ElementPlus             from 'unplugin-element-plus/vite'
// import VueI18n                 from '@intlify/vite-plugin-vue-i18n' // TODO add i18n

const esbuild = {} as Record<string, any>

if ( process.env.NODE_ENV === 'production' ) {
  esbuild.drop = [ 'console' ]
}

const chunksMap = {
  core   : [ 'vue', 'vue-router', 'pinia' ],
  utils  : [ 'lodash', 'date-fns', 'ky' ],
  storage: [ 'localforage' ],
}

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  css         : {
    preprocessorOptions: {
      scss: {
        charset       : false,
        additionalData: `@use "@assets/styles/element/index.scss" as *;`,
      },
    },
  },
  server      : {
    port : Number( process.env.PORT ) || 8888,
    open : false,
    proxy: {
      '/api': {
        target      : 'http://localhost:5555/.netlify/functions',
        changeOrigin: true,
        rewrite     : path => path.replace( /^\/api/, '' ),
      },
    },
  },
  preview     : {
    port: 8080
  },
  resolve     : {
    alias: paths.makeAliasForVite()
  },
  plugins     : [

    vue(),

    // VueI18n( {
    //   fullInstall    : true,
    //   runtimeOnly    : false,
    //   compositionOnly: true,
    //   // include:         `${ paths.ROOT }/src/core/i18n/locales/**`,
    // } ),

    // ElementPlus( {
    //   useSource: true,
    // } ),

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
        {
          '@core/config': [
            'config',
          ]
        },
        {
          '@core/utils': [
            'utils',
          ]
        },
      ],
      resolvers: [
        ElementPlusResolver( { importStyle: 'sass' } ),
      ],
      dts      : 'src/auto-imports.d.ts',
    } ),

    Components( {
      dirs      : [ 'src/ui/components', 'src/ui/views' ],
      extensions: [ 'vue' ],
      deep      : true,
      include   : [ /\.vue$/, /\.vue\?vue/ ],
      exclude   : [ /[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/, /[\\/]\.view.vue[\\/]/ ],
      resolvers : [
        ElementPlusResolver( { importStyle: 'sass' } ),
        IconsResolver( { prefix: 'icon' } ),
      ],
      dts       : 'src/components.d.ts',
    } ),

    WindiCSS(),

    Icons( { compiler: 'vue3' } ),

  ],
  esbuild     : esbuild,
  build       : {
    sourcemap    : false,
    rollupOptions: {
      output: {
        assetFileNames: ( chunk ) => {
          return 'assets/[hash][extname]'
        },
        chunkFileNames: ( chunk ) => {
          if ( chunk.name.includes( '.view' ) ) {
            return '[name].[hash].js'
          }
          return '[hash].js'
        },
        manualChunks  : chunksMap,
      },
    },
  },
  optimizeDeps: {
    entries: [ './src/main.ts' ],
    include: [ 'lodash' ]
  }

}
