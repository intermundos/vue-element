import { createRouter, createWebHistory } from 'vue-router'

const defaultLayout = () => import(( `@layouts/default.layout.vue` ))

const routes = [

  {
    path:      '/',
    component: defaultLayout,
    children:  [
      {
        path:      '',
        name:      'home',
        component: () => import(( `@views/home/home.view.vue` )),
        meta:      {}
      },
    ],

  },


  // 404
  {
    path:      '/:pathMatch(.*)*',
    name:      'not-found',
    component: () => import(( `@views/service-views/404.vue` ))
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export { router }