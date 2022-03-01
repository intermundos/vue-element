import { createPinia }     from 'pinia'

export const install = ({ isClient, initialState, app }) => {

  const pinia = createPinia()

  app.use(pinia)

  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  // if (ctx.isClient)
  //   pinia.state.value = (initialState.pinia) || {}
  //
  // else
  //   initialState.pinia = pinia.state.value

}