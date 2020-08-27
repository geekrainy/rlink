const spawn = require('cross-spawn');
const { yalc } = require('./bin')

module.exports = (args) => {
  spawn(yalc, ['link', ...args] , { stdio: 'inherit' })
}
