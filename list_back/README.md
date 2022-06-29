# CRUD 
npm init
npm install express sequelize pg pg-hstore body-parser cors --save

I. create server.js file

1. import express, body-parser and cors modules:
2. create an Express app, then add body-parser and cors middlewares using app.use() method. Notice that we set origin: http://localhost:8081.
3. define a GET route which is simple for test.
3. listen on port 8080 for incoming requests.
    -run with 'node server.js' & go to http://localhost:8080/

II. create app folder with folders: 'config', 'controllers','routes','models'
1. touch db.config.js in 'app/config'
2. touch index.js in 'app/models'
3. touch list.models.js in 'app/models'
4. touch list.controller.js in 'app/controllers'
        -with:  these CRUD functions:

create
findAll
findOne
update
delete
deleteAll
findAllPublished



### Dependencies:

    {
        express, sequelize, pg, pghstore, body-parser
    }
    pg = postgresql

    