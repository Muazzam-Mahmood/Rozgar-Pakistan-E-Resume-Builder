const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sql, dbConfig } = require("./dbConfig"); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/addExp", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);

    const UserID = 1;
    const JobTitle = "Software Engineer";
    const CompanyName = "Systems Ltd";
    const YearsWorked = 2;

    await pool
      .request()
      .input("UserID", sql.Int, UserID)
      .input("JobTitle", sql.NVarChar, JobTitle)
      .input("CompanyName", sql.NVarChar, CompanyName)
      .input("YearsWorked", sql.Int, YearsWorked)
      .execute("sp_AddExperience");

    res.json({ success: true, message: "Experience added successfully!" });
  } catch (err) {
    console.error("Error adding experience:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));