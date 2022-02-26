const http = require("http");
const express = require("express");
const app = express();

//recursos
app.use(express.static(__dirname + "/"));

//enrutamiento
app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(6969);
console.log('Todo bien papu')