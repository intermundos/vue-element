const { resolve } = require( 'path' )

const ROOT = process.cwd()

const paths = {
  '@config':     'config',
  '@':           'src',
  '@assets':     'src/@assets',
  '@core':       'src/@core',
  '@modules':    'src/@modules',
  '@ui':         'src/@ui',
  '@components': 'src/@ui/components',
  '@views':      'src/@ui/views',
  '@layouts':    'src/@ui/layouts',
}

/**
 * returns a map of paths for webpack
 * 'ALIAS': 'PATH'
 * '@': resolve( process.cwd(), 'src' )
 * @return {{}}
 */
function makeAliasForWebpack() {
  return Object.entries( paths ).reduce( ( aliases, [ alias, path ] ) => {
    aliases[ alias ] = resolve( ROOT, path )
    return aliases
  }, {} )
}

/**
 * returns an array of paths for vite
 * { find: '@', replacement: resolve( process.cwd(), 'src' ) }[]
 * @return {Array}
 */
function makeAliasForVite() {
  return Object.entries( paths ).reduce( ( aliases, [ alias, path ] ) => {
    aliases.push( { find: alias, replacement: resolve( ROOT, path ) } )
    return aliases
  }, [] )
}

module.exports = {
  paths,
  makeAliasForVite,
  makeAliasForWebpack
}
