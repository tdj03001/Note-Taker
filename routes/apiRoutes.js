const fs = require("fs");
const noteArray = require("../data/db.json");


module.exports = function (app) {

  app.get("/api/notes", function (req, res) {

    fs.readFile("./data/db.json", function (err, data) {
      if (err) return res.sendStatus(500)
      try {
        notes = JSON.parse(data)
      } catch (err) {
        res.sendStatus(500)
      }
      res.json(notes)
    })
  });

  app.post("/api/notes", function (req, res) {
    res.json(true);

    fs.readFile("./data/db.json", "utf-8", function (err, data) {
      if (err) throw err;

      var arrayOfObjects = JSON.parse(data);
      arrayOfObjects.push(req.body);
      noteArray["id"] = "2";
      console.log(arrayOfObjects);

      fs.writeFile("./data/db.json", JSON.stringify(arrayOfObjects), "utf-8", function (err) {
        if (err) throw err;

        console.log("Done!");
      })
    })
  })

  app.delete("/api/notes/:id", function (req, res) {
    for (const i = 0; i < noteArray.length; i++) {

    }
  })

}


// DEVELOPMENT NOTES=======================================================================

// deploy to heroku, need index.php and something else (composer.json?)
// deploy to github pages with gh-pages package 
//add fs code to the app.delete. Write/create id on save. Use loop to loop through json file by id when deleting, and to create the id (basically the last id in the existing list +1 for the new item's id)

// ===========================================================================