const sql = require('mssql')
const config = require('./config')

const poolPromise = sql.connect(config.mssql)
module.exports = poolPromise
