USE eqreport
CREATE TABLE [eqreport].[dbo].[KhidmatiCategoryIds]
(
  [qms_sqn_categories] NVARCHAR(3),
  [service_id] NVARCHAR(23),
  [sub_service_id] NVARCHAR(307),
  [serviceNameArabic] NVARCHAR(100),
  [serviceNameEnglish] VARCHAR(100),
  [subServiceNameArabic] NVARCHAR(100),
  [subServiceNameEnglish] VARCHAR(100)
);
INSERT INTO [eqreport].[dbo].[KhidmatiCategoryIds]
VALUES
  (N'BIM', 651, 6532, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية مقيم', 'Issue ID Card Expat'),
  (N'BIM', 651, 6536, N'بطاقة الهوية', 'ID Card', N'نجديد بطاقة هوية وافد / مقيم', 'Renew ID Card Expat\ Resident'),
  (N'BIM', 651, 6192, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية بدل فاقد / بدل تالف', 'Issue Replacement for lost \ damaged ID Card'),
  (N'COM', 651, 6536, N'بطاقة الهوية', 'ID Card', N'نجديد بطاقة هوية وافد / مقيم', 'Renew ID Card Expat\ Resident'),
  (N'COM', 651, 6191, N'بطاقة الهوية', 'ID Card', N'تحديث البيانات', 'Data Update'),
  (N'CSM', 651, NULL, N'بطاقة الهوية', 'ID Card', '', ''),
  (N'IDM', 651, NULL, N'بطاقة الهوية', 'ID Card', '', ''),
  (N'CCM', 651, 6532, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية مقيم', 'Issue ID Card Expat'),
  (N'BIF', 651, 6532, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية مقيم', 'Issue ID Card Expat'),
  (N'BIF', 651, 6536, N'بطاقة الهوية', 'ID Card', N'نجديد بطاقة هوية وافد / مقيم', 'Renew ID Card Expat\ Resident'),
  (N'BIF', 651, 6192, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية بدل فاقد / بدل تالف', 'Issue Replacement for lost \ damaged ID Card'),
  (N'COF', 651, 6536, N'بطاقة الهوية', 'ID Card', N'نجديد بطاقة هوية وافد / مقيم', 'Renew ID Card Expat\ Resident'),
  (N'COF', 651, 6191, N'بطاقة الهوية', 'ID Card', N'تحديث البيانات', 'Data Update'),
  (N'CSF', 651, NULL, N'بطاقة الهوية', 'ID Card', '', ''),
  (N'IDF', 651, NULL, N'بطاقة الهوية', 'ID Card', '', ''),
  (N'CCF', 651, 6532, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية مقيم', 'Issue ID Card Expat'),
  (N'OSM', 651, 6532, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية مقيم', 'Issue ID Card Expat'),
  (N'OSF', 651, 6532, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية مقيم', 'Issue ID Card Expat'),
  (N'FWM', 651, NULL, N'بطاقة الهوية', 'ID Card', '', ''),
  (N'FWF', 651, NULL, N'بطاقة الهوية', 'ID Card', '', ''),
  (N'BWM', 651, 6532, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية مقيم', 'Issue ID Card Expat'),
  (N'BWM', 651, 6536, N'بطاقة الهوية', 'ID Card', N'نجديد بطاقة هوية وافد / مقيم', 'Renew ID Card Expat\ Resident'),
  (N'BWF', 651, 6532, N'بطاقة الهوية', 'ID Card', N'إصدار بطاقة هوية مقيم', 'Issue ID Card Expat'),
  (N'BWF', 651, 6536, N'بطاقة الهوية', 'ID Card', N'نجديد بطاقة هوية وافد / مقيم', 'Renew ID Card Expat\ Resident')
