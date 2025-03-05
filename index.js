const express = require("express");

const PORT = 5000;
const app = express();
app.use(express.json());

// Test Routes
app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
