const figlet = require('figlet')
const chalk = require('chalk')

const signature = version => {
  title = chalk.cyan(
    figlet.textSync(`Controlla ${version}`, { horizontalLayout: 'full' }),
  )

  console.log(text)
}

export default signature
