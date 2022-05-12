import { defineConfig } from 'windicss/helpers'

export default defineConfig( {
  // preflight: true,
  darkMode:  'class',
  important: true, // to override element plus styles
  plugins:   [
    require( '@windicss/plugin-question-mark' ),
    require( 'windicss/plugin/line-clamp' ),
    // require( 'windicss/plugin/filters' ),
    // require( 'windicss/plugin/forms' ),
    // require( 'windicss/plugin/aspect-ratio' ),
    require( '@windicss/plugin-heropatterns' )( {
      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: [ 'signal' ],

      // colors: {
      //   'default': '#ff3a64',
      //   'blue': '#123345',
      // },

      // The foreground opacity
      opacity: {
        default: '0.1',
        opac: '0.03',
        low: '0.05',
        10: '0.1',
        20:     '0.2',
        30:     '0.3',
        40:     '0.4',
        50:     '0.5',
        60:     '0.6',
        70:     '0.7',
        80:     '0.8',
        90:     '0.9',
        100:     '1.0',
      },
    } )
  ],
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
  },
} )
