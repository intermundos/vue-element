import { createI18n } from 'vue-i18n'


const messages = Object.fromEntries(
  Object.entries( import.meta.globEager( '/src/core/i18n/locales/*.y(a)?ml' ) )
    .map( ( [ key, value ] ) => {
      const locale = key.split('/').pop().split('.')[0]
      return [ locale, value.default ]
    } ),
)

export const install = ({ app }) => {

  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })

  app.use(i18n)
}