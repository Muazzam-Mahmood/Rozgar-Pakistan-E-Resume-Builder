const handleSave = () => {
  fetch("http://localhost:5000/api/addExp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      JobTitle: "Software Engineer",
      CompanyName: "Systems Ltd",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Saved successfully:", data);
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
};