const noteArray = require("../data/noteData.js");

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(noteArray);
  });

  app.post("/api/notes", function (req, res) {
    noteArray.push(req.body);
    res.json(true);
  });

  //add the DELETE route
  app.delete("/api/notes/:id")
}