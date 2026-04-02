const sql = require("mssql");

const dbConfig = {
  server: "localhost",          
  port: 1433,                 
  database: "RozgarDB",        
  user: "sa",             
  password: "123",            
  options: {
    encrypt: false,          
    trustServerCertificate: true, 
  },
};

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log("Connected to SQL Server!");
    return pool;             
  })
  .catch(err => {
    console.error("Database connection failed:", err);
    return null;                
  });

module.exports = { sql, poolPromise, dbConfig };