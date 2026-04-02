import React from "react";

function ExperienceTable({ data }) {
  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {data.map((job, index) => (
          <tr key={index}>
            <td>{job.JobTitle}</td>
            <td>{job.CompanyName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExperienceTable;