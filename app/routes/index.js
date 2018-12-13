'use strict';

const router = require('express').Router();
const MessageController = require('../controllers/messageController');

module.exports = (io) => {
    io.on('connect', (socket) => { //Event if there is any new listener/client connecting the socket
        console.log('user connected')

        /*The route is not necessarily putted in the io event except we need pass variable owned by io event
        such as socket*/
        router.get('/messages', MessageController.getMessage); //Route of getting message with GET method
        router.post('/messages', (req, res) => MessageController.addMessage(io, req, res)); //Route of getting message with POST method
    })

    return router
}