const poolPromise = require('../db')
const logError = require('../lib/logError')
const fs = require('fs')
const path = require('path')

const createQMSBranchNamesTable = () => {
  const sql = fs.readFileSync(path.join(__dirname, '4-create-QMSBranchNames-table.sql')).toString().trim()

  return poolPromise
    .then(pool => pool.request()
      .batch(`
        SELECT *
        FROM INFORMATION_SCHEMA.TABLES
        WHERE TABLE_NAME = 'QMSBranchNames' and TABLE_CATALOG='master'
      `)
    )
    .then(response => {
      console.log(response);
      if (response.recordset.length) {
        console.info('QMSBranchNames table already created')
      } else {
        poolPromise
        .then(pool => pool.request()
          .batch(sql)
        )
        .then(() => console.info('QMSBranchNames table created successfully'))
      }
    })
    .catch((err) => {
      const errorMessage = 'Failed creation of QMSBranchNames table'
      console.error(errorMessage)
      logError(err, errorMessage)
    })
}

const createKhadamatiCategoryIdsTable = () => {
  const sql = fs.readFileSync(path.join(__dirname, '5-create-KhidmatiCategoryIds-table.sql')).toString().trim()

  return poolPromise
    .then(pool => pool.request()
      .batch(`
        SELECT *
        FROM INFORMATION_SCHEMA.TABLES
        WHERE TABLE_NAME = 'KhidmatiCategoryIds' and TABLE_CATALOG='master'
      `)
    )
    .then(response => {
      console.log(response);
      if (response.recordset.length) {
        console.info('KhidmatiCategoryIds table already created')
      } else {
        poolPromise
        .then(pool => pool.request()
          .batch(sql)
        )
        .then(() => console.info('KhidmatiCategoryIds table created successfully'))
      }
    })
    .catch((err) => {
      const errorMessage = 'Failed creation of KhidmatiCategoryIds table'
      console.error(errorMessage)
      logError(err, errorMessage)
    })
}

const processMigrations = async () => {
  await createQMSBranchNamesTable()
  await createKhadamatiCategoryIdsTable()
}

module.exports = processMigrations
