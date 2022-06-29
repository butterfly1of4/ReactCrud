# CRUD 
npm init
npm install express sequelize pg pg-hstore body-parser cors --save

I. create server.js file

1. import express, body-parser and cors modules:
2. create an Express app, then add body-parser and cors middlewares using app.use() method. Notice that we set origin: http://localhost:8081.
3. define a GET route which is simple for test.
3. listen on port 8080 for incoming requests.
    -run with 'node server.js' & go to http://localhost:8080/

### Dependencies:

    {
        express, sequelize, pg, pghstore, body-parser
    }
    pg = postgresql

    