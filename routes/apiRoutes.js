const fs = require("fs");
const noteArray = require("../db/db.json");


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

      const arrayOfObjects = JSON.parse(data);
      arrayOfObjects.push(req.body);
      console.log(arrayOfObjects);

      fs.writeFile("./data/db.json", JSON.stringify(arrayOfObjects), "utf-8", function (err) {
        if (err) throw err;

        console.log("Done!");
      })
    })
  })

  app.delete("/api/notes/:id", function (req, res) {
    // for (const i = 0; i < noteArray.length; i++) {
    fs.readFile("./data/db.json", "utf-8", function (err, data) {
      if (err) throw err;
      const arrayOfObjects = JSON.parse(data);
      for (let i = 0; i < arrayOfObjects.length; i++) {
        let query = { id: req.params.id }
        if (req.params.id === id) {
          delete query;
        }
      }

      // console.log(noteArray[1].id)

      // let note = req.body;
      // for (let i = 0; i < noteArray.length; i++) {
      //   if (noteArray.id === req.params.id) {
      //     delete note;
      //   }

      //   //   // res.json(noteArray);
      // }

      // let id = parseInt(req.params.id);
      // delete noteArray[id];
      // res.json(noteArray);

      fs.writeFile("./data/db.json", JSON.stringify(arrayOfObjects), "utf-8", function (err) {
        if (err) throw err;

        console.log("Done!");
      })
    })



  })
};


// let query = { id: req.params.id }

// delete (query, function (err) {
//   if (err) {
//     console.log(err);
//   }
//   res.send("Success");
// })



// DEVELOPMENT NOTES=======================================================================

// fix duplicate id issue - when page is refreshed, new id increment starts over
// get delete working
// get heroku css working
// README
// could deploy to github pages with gh-pages package 

// ========================================================================================