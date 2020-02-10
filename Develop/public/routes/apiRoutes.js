const db = require("../../db/db.json");

app.post("/api/notes", function (req, res) {
  var newNote = req.body;
  db.push(newNote);
  res.json(newNote); //is this line needed????
});