import { defineStore } from 'pinia'

export interface UIState {
  ready: boolean
  mod: 'light' | 'dark'
  name?: string
}

const initialState = (): UIState => {
  return {
    ready: false,
    mod    : 'light',
  }
}
export default defineStore( {

  id     : 'ui',
  state  : () => initialState(),
  actions: {},
  getters: {}

} )