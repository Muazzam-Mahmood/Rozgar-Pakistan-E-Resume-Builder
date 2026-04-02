USE RozgarDB;
--TASK:2
GO
CREATE PROCEDURE sp_GetExperience
    @UserID INT            
AS
BEGIN
    
    SELECT  ExpID,JobTitle,CompanyName,YearsWorked,IsCurrentJob        
    FROM 
        Experience
    WHERE 
        UserID = @UserID     
    ORDER BY 
        ExpID DESC;         
END;
GO

--TESTING TASK:2
EXEC sp_GetExperience @UserID = 1;

GO
CREATE PROCEDURE sp_AddExperience
    @UserID INT,                    
    @JobTitle VARCHAR(100),        
    @CompanyName VARCHAR(100),     
    @YearsWorked INT                
AS
BEGIN
    INSERT INTO Experience (UserID, JobTitle, CompanyName, YearsWorked, IsCurrentJob)
    VALUES (@UserID, @JobTitle, @CompanyName, @YearsWorked, 0);
     SELECT 
        'Experience added successfully!' AS Message,
        SCOPE_IDENTITY() AS NewExpID;    
END;
GO


--TESTING TASK:2 --2
EXEC sp_AddExperience 
    @UserID = 1, 
    @JobTitle = 'Tech Lead', 
    @CompanyName = 'Google Pakistan', 
    @YearsWorked = 1;

--  Check if new experience was added for UserID = 1 
EXEC sp_GetExperience @UserID = 1;

GO
