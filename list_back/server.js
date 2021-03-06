
const express = require("express");
//Express is for building the Rest apis
const bodyParser = require("body-parser");
//body-parser helps to parse the request and create the req.body object
const cors = require("cors");
//cors provides Express middleware to enable CORS with various options.

//sync call for sequilize/postgresql
const app = express();
const db = require("./app/models");
db.sequelize.sync()
.then(() => {
    console.log("Synced db.")
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
//if database exits: 

//db.sequelize.sync({ force: true }).then(() => {
//  console.log("Drop and re-sync db.");
//});

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Disappearing List App." });
});
// set port, listen for requests
//We also need to include routes
require("./app/routes/list.routes")(app)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
