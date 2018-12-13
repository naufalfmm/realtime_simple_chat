const schema = require('mongoose').Schema;
const mongoose = require('mongoose');

//Create the schema of the model
const schemaModel = new schema({
    name: {
        type: String, 
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Message', schemaModel); //Create the model and export it for been used