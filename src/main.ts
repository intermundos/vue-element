import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@assets/styles/main.scss'
import { createApp } from 'vue'
import { router }    from '@core/router'
import AppMain           from '@/App.vue'

function installPlugins(app: App) {
  Object.values( import.meta.globEager( '/src/core/plugins/*.ts' ) ).forEach( plugin => plugin.install?.( { app } ) )
}

async function bootstrap(app: App) {

  console.time('Bootstrap')

  app.config.devtools = import.meta.env.DEV // Vue devtools enable
  app.use( router )
  await router.isReady()
  installPlugins(app)
  app.mount( '#app' )

  console.timeEnd('Bootstrap')
}

bootstrap(createApp( AppMain )).catch(e => console.error(e))

