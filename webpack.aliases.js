// this file is for Webstorm paths assistance via Settings>Webpack file
// and might be excluded for editor other than Webstorm and its family :)
const paths = require('./config/paths.js')

module.exports = {
  resolve: {
    alias: paths.makeAliasForWebpack()
  }
}
