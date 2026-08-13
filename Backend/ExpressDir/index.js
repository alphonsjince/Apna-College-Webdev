const express = require("express");

const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});


app.get("/", (req, res) => {
  res.send("hello im root");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`welcome @${username} your id is ${id}`);
});


app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("no results"); 
})