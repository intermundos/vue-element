import { defineConfig } from 'windicss/helpers'
// import colors           from 'windicss/colors'
// import plugin           from 'windicss/plugin'
//
// console.log(plugin)

export default defineConfig( {
  preflight: true,
  darkMode:  'class',
  important: true,
  plugins:   [
    require( '@windicss/plugin-question-mark' ),
    // require( 'windicss/plugin/filters' ),
    // require( 'windicss/plugin/forms' ),
    // require( 'windicss/plugin/aspect-ratio' ),
    // require( 'windicss/plugin/line-clamp' ),
  ],
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
  },
} )
