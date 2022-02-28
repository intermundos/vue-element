import { addStore }   from './_store.js'
import { addElement } from './_element-ui.js'

export function addPlugins( app, router ) {

  [
    addElement,
    addStore,
  ].forEach(fn => fn(app))

}