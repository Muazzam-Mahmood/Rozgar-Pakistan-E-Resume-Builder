USE RozgarDB;
--TASK:1
GO;
CREATE PROCEDURE sp_LoginUser
    @Email varchar(100),
    @Password varchar(100)
AS
BEGIN
    SELECT Users.UserID, Users.FullName 
    FROM Users
    WHERE Users.Email = @Email 
      AND Users.PasswordHash = @Password;
END;
GO

  --TESTING TASK:1
  EXEC sp_LoginUser 
    @Email = 'ali.raza@email.com', 
    @Password = 'wrongpassword';

    --TESTING TASK:1 -2
  EXEC sp_LoginUser 
    @Email = 'ali.raza@email.com', 
    @Password = 'password123';
