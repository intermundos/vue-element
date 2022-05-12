import VueNextProgressbar from '@jambonn/vue-next-progressbar'

export const install = ( { app }: App ) => {
  app.use( VueNextProgressbar, { router: true } )
}