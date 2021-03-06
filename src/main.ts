import '@assets'
import { createApp } from 'vue'
import { router }    from '@core/router'
import App           from '@/App.vue'

function installPlugins(app: App, router) {
  Object.values( import.meta.globEager( '/src/core/plugins/*.ts' ) ).forEach( plugin => plugin.install?.( { app, router } ) )
}

async function bootstrap(app: App) {

  console.time('Bootstrap')

  app.config.devtools = import.meta.env.DEV // Vue devtools enable
  app.use( router )
  installPlugins(app, router)
  await router.isReady()
  app.mount( '#app' )

  console.timeEnd('Bootstrap')
}

bootstrap(createApp( App )).catch(e => console.error(e))

