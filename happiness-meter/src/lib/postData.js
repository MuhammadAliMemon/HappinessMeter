const axios = require('axios')
const fs = require('fs')
const { loyalityioEndpointBaseURL, integrationToken } = require('../config.js')

async function postRow (data, stateId, id) {
  const headers = {
    'x-integration-apikey': integrationToken
  }
  const url = `${loyalityioEndpointBaseURL}/api/v2/integrations/queue/${(stateId === 4 || stateId === 5) ? 'call' : 'event'}`
  const method = 'post'

  const getConfig = () => ({
    method,
    headers,
    data,
    url,
    timeout: 50000
  })
  try {
    fs.appendFileSync('./logs-live.txt', JSON.stringify(data))
    fs.appendFileSync('./logs-live.txt', '\n')  
  } catch (e) {
    console.error('File to collect logs could not be written upon')
    console.error(e)
    process.exit(1)
  }

  try {
    const { data } = await axios(getConfig())
    console.log(data);
    return id
  } catch (err) {
    err.id = id
    // fs.appendFileSync('./error-logs-live.txt', err.response.data.message)
    fs.appendFileSync('./error-logs-live.txt', JSON.stringify(data))
    fs.appendFileSync('./error-logs-live.txt', '\n')
    throw err
  }
}

module.exports = postRow
