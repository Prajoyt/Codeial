//require the library
const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://0.0.0.0:27017/codeial_development');

//to check weather the mongoose is connected or not we will check tthrough following steps

const db = mongoose.connection;
//error
db.on('error', console.error.bind(console, "error connecting to the db"));

//if running print the message
db.once('open', function () {
    console.log("Successfully connected to the db::MONGODB")
})

module.exports=db;


