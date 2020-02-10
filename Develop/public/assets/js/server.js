//create localhost server
const express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//==========ROUTES============================

require("../../routes/apiRoutes");
require("../../routes/htmlRoutes");

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});