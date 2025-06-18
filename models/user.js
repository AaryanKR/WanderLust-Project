const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
    },
    //we are not writing username and password because 
    //passport-local-mongoose automatically generates this for us
    //with salting and hashing function
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User" , userSchema);