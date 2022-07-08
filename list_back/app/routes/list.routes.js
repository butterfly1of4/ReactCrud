module.exports = app => {
    const lists = require("../controllers/list.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", lists.create);
    // Retrieve all Tutorials
    router.get("/", lists.findAll);
    // Retrieve all published Tutorials
    router.get("/published", lists.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", lists.findOne);
    // Update a Tutorial with id
    router.put("/:id", lists.update);
    // Delete a Tutorial with id
    router.delete("/:id", lists.delete);
    // Create a new Tutorial
    router.delete("/", lists.deleteAll);
    app.use('/api/lists', router);
  };

  //When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will reponse by setting up the routes.

// These are our routes:

// /api/tutorials: GET, POST, DELETE
// /api/tutorials/:id: GET, PUT, DELETE
// /api/tutorials/published: GET

//You can see that we use a controller from /controllers/list.controller.js.
//We also need to include routes in server.js (right before app.listen()):

