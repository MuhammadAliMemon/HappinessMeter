const moment = require('moment')

const { updateLoyaltioEventStatus, getNewLoyaltioEvents } = require('./data/LoyaltioEventLog')
const postData = require('./lib/postData')
const logError = require('./lib/logError')

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function main () {
  try {
    var events = await getNewLoyaltioEvents()
  if (events.length === 0) return
    var normalizedEvents = events.map(event => normalizeData(event))
  } catch (err) {
    const errorMessage = 'Error occured when attempted to fetch unprocessed rows'
    logError(err, errorMessage)
    return console.error(errorMessage)
  }

  await handlePostDataToLoyaltio(events, normalizedEvents)
}

const handlePostDataToLoyaltio = async (events, normalizedEvents) => {
  const validEventIds = []
  const failedEventIds = []

  await asyncForEach(normalizedEvents, async (event, idx) => {
    const rawDataEvent = events[idx]
    const { id, ...eventData } = event
    const { stateId } = rawDataEvent
    try {
      await postData(eventData, stateId, id)
      validEventIds.push(id)
      return
    } catch (err) {
      failedEventIds.push(id)
    }
  });
  await updateProcessedTicketsStatus(validEventIds)
  await updateFailedTicketsStatus(failedEventIds)
}

async function updateProcessedTicketsStatus (processedTickets) {
  console.log(`Updating ${processedTickets.length} processed tickets status`);
  if (processedTickets.length < 1) return
  try {
    await updateLoyaltioEventStatus(processedTickets)
  }
  catch (err) {
    const errorMessage = `Rows were posted successfully to Loyaltio but their status could not be changed to "Processed" in DB`
    logError(err, errorMessage)
    return console.error(errorMessage)
  }
}

async function updateFailedTicketsStatus (failedTicketsBatch) {
  console.log(`Updating ${failedTicketsBatch.length} failed tickets status`);
  if (failedTicketsBatch.length < 1) return
  try {
    await updateLoyaltioEventStatus(failedTicketsBatch, 2)
  }
  catch (err) {
    return handleErrorFromLoyaltio(err)
  }
}

function handleErrorFromLoyaltio (err) {
  if (err.response) {
    const devMessage = 'There is an error encounted sending data to Loyaltio' 
    console.log(devMessage)
    logError(err.response.data.message, devMessage, err.response.status)
  } else if (err.request) {
    const devMessage = 'A request was sent but no response was received' 
    console.log(devMessage)
    logError(err.request, devMessage)
  } else {
    const devMessage = 'This is an error sending data to Loyaltio not related to request or response' 
    console.log(devMessage)
    logError(err.message, devMessage)
  }
}

function getResolution (stateId) {
  switch (stateId) {
    case 4:
      return null
    case 5:
      return null
    case 6:
      return 'served'
    case 7:
      return 'served'
    case 9:
      return 'no_show'
  }
}

function normalizeData (data) {
  const customer = {}
  const normalizedData = {
    customer,
    id: data.id,
    employee: {
      card_number: String(data.employee_card_number),
      first_name: data.employee_first_name,
      gender: data.employee_gender === 'M' ? 'Male' : 'Female'
    },
    ticket: data.ticket,
    enter_queue_time: moment(data.enter_queue_time).format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
    waiting_time: parseInt(data.waiting_time) || 0,
    call_time: moment(data.call_time).format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
    branch: data.branch.toString(),
    counter: parseInt(data.counter) || 0,
    entity_id: 4,
    integration_name: "wavetec",
    integration_visit_id: null,
    metadata: {},
    service_id: data.service_id,
    service_center_id: data.service_center_id,
    sub_service_complementary_id: 0,
    sub_service_id: data.sub_service_id,
    transaction_time: parseInt(data.transaction_time) || 0,
    service_name_ar: data.service_name_ar,
    service_name_en: data.service_name_en,
    sub_service_name_ar: data.sub_service_name_ar,
    sub_service_name_en: data.sub_service_name_en.replace(/\\\\/g, '\\')
  }

  const { stateId } = data
  if (stateId === 6) {
    normalizedData.integration_event_id = data.ticketId,
    normalizedData.finished_time = data.finished_time
    normalizedData.resolution = getResolution(stateId)
  } else if (stateId === 7) {
    normalizedData.integration_event_id = data.ticketId,
    normalizedData.finished_time = data.TransferTime
    normalizedData.resolution = getResolution(stateId)
  } else if (stateId === 4 ) {
    normalizedData.integration_event_id = data.ticketId
  } else if (stateId === 9) {
    normalizedData.integration_event_id = data.ticketId,
    normalizedData.resolution = getResolution(stateId)
    normalizedData.finished_time = data.NoShowTime
  }

  return normalizedData
}

(async function () {
  console.log('Now will share data with loyaltio')
  while (true) {
    await main()
  }
})()

process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
})
