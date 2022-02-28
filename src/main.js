import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@assets/styles/vendors/vendors.scss'
import '@assets/styles/main.scss'
import { createApp }  from 'vue'
// import { ViteSSG }    from 'vite-ssg'
import { router }     from '@core/router/router.js'
import { addPlugins } from '@core/plugins'
import App            from '@/App.vue'

const isProduction = import.meta.env.PROD

const app = createApp( App )

app.config.devtools = !isProduction

app.use( router )

addPlugins(app, router)

router.isReady().then( () => app.mount( '#app' ) )
