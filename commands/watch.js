const spawn = require('cross-spawn');
const { onchange } = require('./bin')

module.exports = (args) => {
  spawn(onchange, ['--', ...args] , { stdio: 'inherit' })
}
