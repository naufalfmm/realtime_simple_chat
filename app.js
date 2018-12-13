'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const port = 7777 || process.env.PORT;
const dbUrl = 'mongodb://localhost:27017/chat'; //URL of the mongoDB. Change with yours.

const app = express();

app.use(cors()); //CORS handling
app.use(bodyParser.json()); //Parsing the body of the client request into JSON
app.use(bodyParser.urlencoded({ extended: false }));

//Socket IO (Websocket) listen to the same port with the API
const io = require('socket.io').listen(app.listen(port, () => { //Starting the API in port 7777
    mongoose.connect(dbUrl, { useNewUrlParser: true }, () => { //Connecting to the database
        console.log('Application running in', port)
        console.log('Mongodb connected');
    })
}));

app.use('/api', require('./app/routes/index')(io)); //Route of the API

module.exports = app