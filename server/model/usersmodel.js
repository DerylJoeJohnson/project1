var mongo = require('mongoose');

var schema = mongo.Schema;

var userSchema = new schema({
    uname : String,
    email : String,
    pwd : String
});

var usersModel = mongo.model("user", userSchema, "user");

module.exports = usersModel;