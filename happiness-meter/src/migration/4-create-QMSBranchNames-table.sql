USE eqreport
CREATE TABLE [eqreport].[dbo].[QMSBranchNames]
(
    [qms_branch_id] INT,
    [qms_branch_name] NVARCHAR(34),
    [happiness_meter_branch_ids] INT,
    [happiness_meter_branch_names] NVARCHAR(78)
);

INSERT INTO [eqreport].[dbo].[QMSBranchNames]
VALUES
    (1, N'Ajman Main Branch', 14, N'Ajman Happiness Centre'),
    (2, N'Al Dhaid (Shj)', 20, N'Al Dhaid Happiness Center'),
    (4, N'Jazeera FC Main ( Abu Dhabi)', 1870, N'Al Jazira Customer Happiness Centre'),
    (5, N'SHJ Main (Rehmaniya)', 25, N'Sharjah Happiness Centre'),
    (6, N'AL Karama (Dubai)', 91, N'Karama Happiness Centre'),
    (7, N'UAQ Main', 13, N'Umm Al Quwain Happiness Centre'),
    (8, N'Al Barsha (Dubai)', 72, N'Al Barsha Happiness Centre'),
    (9, N'Rashidiya(Dubai)', 69, N'Al Rashidya Happiness Centre'),
    (10, N'RAK Main Branch', 18, N'Ras Al Khaima Happiness Centre'),
    (11, N'Fujairah Main Branch', 10, N'Fujairah Happiness Centre'),
    (12, N'Al Ain Main Branch', 31, N'Al Ain Happiness Centre'),
    (13, N'Al Rams (RAK)', 17, N'Al Rams Happiness Center'),
    (16, N'Al Nasareeya PMC (SHJ)', 1441, N'Sharjah Municipality Clinic (Nasiriya) Happiness Center - Preventive Medicine'),
    (17, N'Muhaisanah (Dubai)', 1426, N'Muhaisina Happiness Center - Preventive Medicine'),
    (18, N'Al Ghubaiba(SHJ)', 1443, N'Al Ghubaiba Happiness Center - PMC'),
    (21, N'Jazeera Capital Health(ABU DHABI)', 1429, N'Capital Health Happiness Center - PMC'),
    (23, N'Khalifa City HQ (Abu Dhabi)', 1425, N'Khalifa City Happiness Center'),
    (24, N'Ajman PMC', 1446, N'Ajman Happiness Center 2 - Preventive Medicine'),
    (25, N'Al Baraha PMC (DUBAI)', 1433, N'Al Baraha Happiness Center - Preventive Medicine'),
    (26, N'Al Quoz PMC (DUBAI)', 1434, N'Al Quz Happiness Center - Preventive Medicine'),
    (27, N'Jafza PMC ( DUBAI)', 1427, N'Jafza Happiness Office  - Preventive Medicine'),
    (28, N'Fujairah PMC', 1447, N'Fujairah 2 Happiness Center - Preventive Medicine'),
    (30, N'RAK PMC', 1445, N'Ras Al Khaimah Happincess Office -Preventive Medicine'),
    (32, N'WR-Madinat Zayed (ABUDHABI)', 47, N'Madinat Zayed Happiness Center'),
    (33, N'Al Yahar PMC (ALAIN)', 1670, N'Al Yahar Happiness Office'),
    (34, N'Al Quaa PMC(ALAIN)', 26, N'Al Qoa Happincess Office'),
    (35, N'Musaffah PMC( ABUDHABI)', 1430, N'Musaffah Happiness Center- Preventive Medicine'),
    (36, N'Al Hayar PMC (ALAIN)', 1671, N'Al Hayar Happiness Office'),
    (37, N'Umm Hurair PMC(DUBAI)', 1681, N'Um Hurrir Happincess Center - PMC'),
    (38, N'Khalifa Medical City PMC(ABUDHABI)', 1428, N'Khalifa Medical City Happiness Center - Preventive Medicine'),
    (39, N'Shahama (ABUDHABI)', 1674, N'Al Shahama Happiness Office');
