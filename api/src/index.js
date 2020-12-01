const express = require("express");

const app = express();
const PORT = 3001;

app.get("/test", (req, res) => {
  res.send("API server is working correctly");
});

app.listen(PORT, () => {
  console.log(`Started API service on http://localhost:${PORT}`);
});
