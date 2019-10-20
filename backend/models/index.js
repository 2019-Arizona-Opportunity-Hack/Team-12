const mongoose = require("mongoose");
/*
 Database config, this can be placed in another file if you want
 just make sure it runs when your server starts
*/
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(
    'mongodb+srv://Nick42791:Orange09!@cluster0-vekwg.mongodb.net/test?retryWrites=true&w=majority',
     {useNewUrlParser: true});

exports.Person = require('./personData');