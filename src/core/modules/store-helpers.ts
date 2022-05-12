import { get, set } from '@utils/objects'

/**
 * Uses Vue computed to return computed with get/set
 * used mainly for form inputs handling
 * @param store
 * @param path
 */
export const createComputed = ( store, path ) => computed( {
  get: () => get(store, path),
  set: ( val ) => store.$patch( state => set(state, path, val) ),
} )