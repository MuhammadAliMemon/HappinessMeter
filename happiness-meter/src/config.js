const fs = require('fs')

function getConfig () {
  try {
    var config = fs.readFileSync('./config.json', 'utf8')
  } catch (err) {
    console.error(`Error reading config file, check file name or permissions, config file must be named "config.json" and should be in the directory where .exe is placed`)
    return process.exit(1)
  }

  try {
    const configParsed = JSON.parse(config)
    return configParsed
  } catch (err) {
    console.error('Error parsing config file, make sure it is valid json file')
    return process.exit(1)
  }
}

module.exports = getConfig()
