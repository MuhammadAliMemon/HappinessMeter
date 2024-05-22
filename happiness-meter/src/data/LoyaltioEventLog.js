const poolPromise = require('../db')
const { getNewEventsQuery }  = require('./getNewEventsQuery')

const getNewLoyaltioEvents = () => {
  return poolPromise
    .then(pool => pool.request()
      .query(getNewEventsQuery('eqreport')))
    .then(response => {
      return response.recordset
    })
}

const updateLoyaltioEventStatus = (ticketIds, status = 1) => {
  return poolPromise
    .then(pool => pool.request()
      .query(`
        UPDATE [eqreport].[dbo].[PSRTicketHM]
        SET [Published] = ${status}
        WHERE [id] in (${ticketIds})
      `))
    .then(response => {
      return response.recordset
    })
}

module.exports = {
  updateLoyaltioEventStatus,
  getNewLoyaltioEvents
}
