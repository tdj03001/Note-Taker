//create localhost server
const express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=========DATA=========================






//==========ROUTES============================
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../../notes.html"));
});

//change the route below to be a page where you see the parsed json of the notes (might be a bonus)
app.get("/api/savednotes", function (req, res) {
  return res.json(characters);
});


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest); //MUST PASS a function to http.createServer()



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});