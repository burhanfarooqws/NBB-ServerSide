/****** Script for SelectTopNRows command from SSMS  ******/
SELECT *  FROM [VC6Product].[Softtoken].[VPSoftTokenRegistration]
  /****** Script for SelectTopNRows command from SSMS  ******/
SELECT * FROM [VC6Product].[dbo].[VpOtpDevice]
/****** Script for SelectTopNRows command from SSMS  ******/
SELECT * FROM [VC6Product].[dbo].[VpUser] 
where 
[ID] = 12012 or [ID] = 12080
--[CustomerID] = '0893156208'
/****** Script for SelectTopNRows command from SSMS  ******/

--SELECT count(*) FROM [VC6Product].[dbo].[VpOtpHistory] 

SELECT * FROM [VC6Product].[dbo].[VpOtpHistory] 
  where [UserID] = 12012 or [UserID] = 12080

/****** Script for SelectTopNRows command from SSMS  ******/
--Delete FROM VC6Product.dbo.VpSmsPasswordAuditLog
--WHERE        (OtpID IN
--                             (SELECT        ID
--                               FROM            VC6Product.dbo.VpOtpHistory
--                               WHERE        (UserID = 12012)))

--delete FROM [VC6Product].[dbo].[VpOtpHistory] 
--  where [UserID] = 12012 or [UserID] = 12080

--SELECT * FROM VpConfigurationParameter 

--select * from VpChannel

-- where Keyword like 'RSA%'

--UPDATE       VC6Product.Softtoken.VPSoftTokenRegistration
--SET                UserId = 12012

--UPDATE       [VC6Product].[dbo].[VpOtpDevice]
--SET                [CreateBy] = 12012

-- new password = 2c14e9d068ea81f13d5f4d8d73278f24 old password = 16c47151c18ac087cd12b3a70746c790
--UPDATE       VC6Product.Softtoken.VPSoftTokenRegistration
--SET                [Password] = '2c14e9d068ea81f13d5f4d8d73278f24'

--update [VC6Product].[dbo].[VpOtpHistory]
--set [ExpireTime] = getdate()+1
--where [UserID] = 12012 or [UserID] = 12080

--SELECT count(*) FROM [VC6Product].[dbo].[VpOtpHistory] 
