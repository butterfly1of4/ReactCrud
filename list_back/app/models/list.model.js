module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define("list", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return List;
  };


  //This is the list table in postgres. These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.

/*
 Note: 
  After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

create a new List: create(object)
find a List by id: findByPk(id)
get all Lists: findAll()
update a List by id: update(data, where: { id: id })
remove a List: destroy(where: { id: id })
remove all Lists: destroy(where: {})
find all Lists by title: findAll({ where: { title: ... } })
These functions will be used in our Controller.
  */
