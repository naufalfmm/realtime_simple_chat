'use strict';

const Message = require('../models/Message');
const mongoose = require('mongoose');

const messageController = {}

/*
POST /api/messages
The function is for save message sent by user into the database and also send it back realtime to sender and other client.

body: {
    sender: (required),
    message: (required)
}

response:
201 --> message is successfully saved and sent back
400 --> sender or message is missing
403 --> validation error
500 --> Internal Server Error
*/
messageController.addMessage = (io, req, res) => {
    //Check whether sender or message data is missing
    if (!req.body.sender || !req.body.message) return res.status(400).json({ status: false, message: "Bad Request" })

    const message = new Message(req.body);
    //Save the data into the collection 'messages'
    message.save((err) => {
        if (err) { //If error
            if (err.name === 'ValidationError') return res.status(403).json({ status: false, message: "Validation Error" })
            return res.status(500).json({ status: false, message: "Internal Server Error" })
        } else { //If success
            io.emit('sendMessage', req.body) // Send message sent by sender into sender and other client with event 'sendMessage
            return res.status(201).json({ status: true, message: "Message is Successfully Saved" })
        }
    })
}

/*
GET /api/messages
The function is for get all messages saved in database

response:
200
404 --> no data is saved in database
500 --> Internal Server Error
*/
messageController.getMessage = (req, res) => {
    //Find all message in database (no where clause)
    Message.find({}, (err, messages) => {
        if (err) {
            return res.status(500).json({ status: false, message: "Internal Server Error" });
        } else {
            if (messages.length === 0) { //If there are no data found
                return res.status(404).json({ status: false, message: "No Message Found" })
            }
            return res.status(200).json({ status: true, data: messages })
        }
    })
}

module.exports = messageController;