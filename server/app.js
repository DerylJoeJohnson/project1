
const express = require('express');
const app = express();
//app.set("view engine","ejs");  
//app.set("views","./src/views");  
//const path = require('path');
var bodyparser = require('body-parser');
app.use(bodyparser.json());
var userrouter = require('./routes/userrouter');

var mongo = require('mongoose');
var url = "mongodb+srv://djoe:djoe123@cluster0-cfuog.mongodb.net/Project?retryWrites=true&w=majority";
mongo.connect(url, {useNewUrlParser:true}, (err)=>{
    if (err) throw err;
    else console.log("Database connected");
})
app.use(bodyparser.urlencoded({extended:true}));

//app.use(express.static(path.join(__dirname+"/public")));   

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//login as home



app.use("/user", userrouter);




app.listen(process.env.PORT || 8000,()=>{
    console.log("Listening");
})
