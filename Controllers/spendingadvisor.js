const mongoose=require("mongoose");
const TokenData=require("../models/Tokens");
const bodyParser = require('body-parser');
const validator=require("./validator");
var axios = require("axios").default;

module.exports=async (req, res)=>{
    const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
    console.log(req.body.pno+" "+req.body.tokenval);
    let x=await validator(req.body.pno, req.body.tokenval);

    if(!x){
        res.send(require("./badRequest"));
    }
    res.send("valid");
};
