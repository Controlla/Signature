const figlet = require('figlet')
const chalk = require('chalk')

module.exports = function (version) {
  let text = chalk.cyan(
    figlet.textSync(`Controlla ${version}`, { horizontalLayout: 'full' }),
  )

  text += ' By Iván Sotelo'
  console.log(text)
  return true
}
