USE eqreport; 
GO
IF EXISTS (SELECT *
FROM sysobjects
WHERE name='LoyaltioEventLog' AND xtype='U')

DROP TABLE [dbo].[LoyaltioEventLog]
GO

CREATE TABLE [dbo].[LoyaltioEventLog]
(
	[stateId] [int] NULL,
	[finished_time] [datetime] NULL,
	[branch] [varchar](50) NULL,
	[counter] [int] NULL,
	[employee_card_number] [varchar](50) NULL,
	[ticket] [varchar](50) NULL,
	[ticketId] [bigint] NULL,
	[call_time] [datetime] NULL,
	[waiting_time] [int] NULL,
	[enter_queue_time] [datetime] NULL,
	[transaction_time] [int] NULL,
	[state] [varchar](20) NULL,
	[service_id] [varchar](50) NULL,
	[sub_service_id] [varchar](50) NULL,
	[service_center_id] [float] NULL,
	[created_at] [datetime] NULL,
	[employee_first_name] [varchar](20) NULL,
	[employee_gender] [varchar](20) NULL,
	[customer_first_name] [varchar](50) NULL,
	[customer_phone_number] [varchar](50) NULL,
	[customer_email] [varchar](50) NULL,
	[customer_card_number] [varchar](50) NULL,
	[customer_last_name] [varchar](50) NULL
) ON [PRIMARY]
GO
