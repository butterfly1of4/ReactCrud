const db = require("../models");
const List = db.lists;
const Op = db.Sequelize.Op;
// Create and Save a new List
exports.create = (req, res) => {
  //Validate request
  if(!req.body.title){
    res.status(400).send({
        message: "Content cannot be empty"
    })
    return
  }
  //Create a List
  const list = {
  title: req.body.title,
  description: req.body.description,
  published: req.body.published ? req.body.published : false
}
//Save List in the database
List.create(list)
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occurred while creating the list"
        })
    })
};
// Retrieve all Lists from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? {title: {[OP.iLike]: `%${title}`}}: null
  List.findAll({where:condition})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred."
        })
    })
//We use req.query.title to get query string from the Request and consider it as condition for findAll() method.
};
// Find a single List with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    List.findByPk(id)
        .then(data => {
            if(data){
                res.send(data)
            }else {
                res.status(404).send({
                    message: "Error finding list id = " + id
                })
            }
        })
  
};
// Update a List by the id in the request
exports.update = (req, res) => {
  const id = req.params.id
  List.update(req.body, {
    where: {id: id}
  })
  .then(num => {
    if(num == 1){
        res.send({
            message: "List was updated successfully"
        })
    } else {
        res.send({
            message: "Cannot update List id=${id}"
        })
    }
  }).catch(err => {
    res.status(500).send({
        message: "Error updating list id = " + id
    })
  })
};
// Delete a List with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  List.destroy({
    where: {id: id}
  })
  .then(num => {
   if (num ==1){ 
        res.send({
        message: "List deleted."
    })
    } else {
    res.send({
        message: "Could not delete list id = "+ id
    })
    }
  }).catch(err => {
    res.status(500).send({
        message:"Cannot delete List id = "+id
    })
  })
}
// Delete all Lists from the database.
exports.deleteAll = (req, res) => {
  List.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
        res.send({message: `${nums} All lists deleted` })
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "An error occurred"
        })
    })
};
// Find all published Lists with published= true.
exports.findAllPublished = (req, res) => {
  List.findAll({wherre: {published:true}})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occured in retrieval"
    })
  })
}