const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("This is home page");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}`);
});
