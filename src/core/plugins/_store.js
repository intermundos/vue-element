import { createPinia }     from 'pinia'

export function addStore( app ) {
  app.use( createPinia() )
}