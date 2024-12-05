const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("This is home page");
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});
app.get("/user/:username/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}`);
});
