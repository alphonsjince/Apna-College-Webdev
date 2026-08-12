const express = require("express");

const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello im root");
});

app.get("/search", (req, res) => {
  res.send("You contacted serarch route");
});

app.get("/help", (req, res) => {
  res.send("You contacted help route");
});

// app.use((req, res) => {
//   console.log("request recieved");
//   res.send("This is a basic response");
// })