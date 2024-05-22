const config = require('../config')

const getNewEventsQuery = (dbName) => (
    `
    SELECT top ${config.batchSize} i.id AS id,
      i.StateId AS stateId,
      i.ServiceEndTime AS finished_time,
      i.TransferTime AS TransferTime,
      i.NoShowTime AS NoShowTime,
      QMSBranchNames.happiness_meter_branch_names AS branch,
      i.CounterId AS counter,
      eqportal_Operator.EmployeeId AS employee_card_number,
      i.TicketNumber AS ticket,
      i.TicketId AS ticketId,
      i.CallTime AS call_time,
      i.CalcWaitTime AS waiting_time,
      i.IssueTime AS enter_queue_time,
      i.CalcServiceTime AS transaction_time,
      KhidmatiIds.service_id AS service_id,
      KhidmatiIds.serviceNameArabic AS service_name_ar,
      KhidmatiIds.serviceNameEnglish AS service_name_en,
      KhidmatiIds.sub_service_id AS sub_service_id,
      KhidmatiIds.subServiceNameArabic AS sub_service_name_ar,
      KhidmatiIds.subServiceNameEnglish AS sub_service_name_en,
      QMSBranchNames.happiness_meter_branch_ids AS service_center_id,
      GETDATE() AS created_at,
      eqportal_Operator.Name AS employee_first_name,
      eqportal_Operator.OperatorGender AS employee_gender
    FROM [${dbName}].[dbo].[PSRTicketHM] AS i 
    Inner join eqportal..eqportal_hubsetting hs 
      on hs.branchid = i.BranchID 
      and hs.isdeleted = 0
    Left outer join [eqPortal].[dbo].[Eqportal_operator] AS eqportal_Operator
      ON i.OperatorId = eqportal_Operator.OperatorId
      AND i.BranchId = hs.branchid
    LEFT JOIN [eqreport].[dbo].[QMSBranchNames] AS QMSBranchNames
      ON i.BranchId = QMSBranchNames.qms_branch_id
    LEFT JOIN [eqreport].[dbo].[KhidmatiCategoryIds] AS KhidmatiIds
      ON i.CategoryId = KhidmatiIds.qms_sqn_categories
    WHERE KhidmatiIds.service_id IS NOT NULL
      AND KhidmatiIds.sub_service_id IS NOT NULL
      AND i.Published = 0
    ORDER BY id ASC  
  `
)

module.exports = { getNewEventsQuery }
