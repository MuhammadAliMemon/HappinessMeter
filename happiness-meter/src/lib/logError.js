const fs = require('fs')
const EOL = require('os').EOL
const LOGS_FILENAME = 'error-logs-live.txt'

module.exports = function logError (error, customMessage, code) {
  const writeConfig = {
    flag: 'a'
  }

  const errorString = `
    ${EOL}
    Timestamp:
    ${(new Date(Date.now())).toISOString()}
    Developer set message:
    ${customMessage}
    Error contents:
    ${error.toString ? error.toString() : error}
    Error code:
    ${code ? code : 'N/A'}
    Error stack:
    ${error.stack}
  `

  try {
    fs.writeFileSync(LOGS_FILENAME, errorString, writeConfig)
  } catch (e) {
    console.error('File to collect error logs could not be written upon')
    console.error(e)
    process.exit(1)
  }
}
