var exp = require('express');
const router = exp.Router();   
var bodyparser = require('body-parser');
var user = require('../model/usersmodel');
var material = require('../model/materialmodel')
const path = require('path');


router.use(bodyparser.urlencoded({extended:true}));

var multer = require('multer'); //module to upload files

router.post("/register",(req,res)=>{
    var u1=new user();
    u1.uname=req.body.uname;
    u1.email=req.body.email;
    u1.pwd=req.body.pwd;
    u1.save((err)=>{
        if (err)
        throw err;
        else
        console.log("user added");
        //res.send(data);
    })
})
router.post("/add",(req,res)=>{
    var m1=new material();
    m1.subject=req.body.a;
    m1.class=req.body.b;
    m1.contents=req.body.c;
    m1.det=req.body.d;
    m1.board=req.body.e;
   
    m1.save((err)=>{
        if (err)
        throw err;
        else
        console.log("Material added");
        //res.send(data);
    })
})
router.get("/view",(req,res)=>{
    material.find({},function(err,result)
    {
        if (err)
        throw err;
        else
        {
            if(result)
            {
                res.send(result);
            }
            else
            console.log("Invalid");

        }
    })
})
router.get("/viewdetails/:id",(req,res)=>{

    var id =req.params.id;
    console.log("node..",id)
    material.find({_id:id},function(err,result)
    {
        if (err)
        throw err;
        else
        {
            if(result)
            {
                res.send(result);
            }
            else
            console.log("Invalid");

        }
    })
})
router.post("/login",(req,res)=>{

    // console.log(req.body);
    user.findOne({uname:req.body.a,pwd:req.body.b},function(err,result)
    {
        if(err)
        throw err;
        else
        {
            if(result)
            {
                res.send({data:result});
            }
            else
            console.log("Invalid");

        }
    })
})

router.get("/deletedata/:id",function(req,res)
{
  console.log(req.params.id);
  const rid = req.params.id;
  material.deleteOne({ _id: rid }, function (err, result) {
      if (err) throw err;
      else {
   
          res.send({ msg: "Data Deleted." });
      }
  })
  
})


module.exports=router;