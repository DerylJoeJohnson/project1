var mongo = require('mongoose');

var schema = mongo.Schema;

var materialSchema = new schema({
    subject : String,
    contents : String,
    class : String,
    board : String,
    det : String
    
});

var materialModel = mongo.model("material", materialSchema, "material");

module.exports = materialModel;