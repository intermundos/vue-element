import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@assets/styles/vendors/vendors.scss'
import '@assets/styles/main.scss'
import { ViteSSG }    from 'vite-ssg'
import { router }     from '@core/router/router.js'
// import { addPlugins } from '@core/plugins'
import App            from '@/App.vue'

const isProduction = import.meta.env.PROD

export const createApp = ViteSSG(
  App,
  router,
  (ctx) => {

    // install plugins
    Object.values(import.meta.globEager('/src/core/plugins/*.js')).forEach(plugin => plugin.install?.(ctx))

  }
)
