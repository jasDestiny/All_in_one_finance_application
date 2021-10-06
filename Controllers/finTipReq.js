const data = require('../src/InvestmentTips.json')
const mongoose=require("mongoose");
const TokenData=require("../models/Tokens");
const bodyParser = require('body-parser');
const validator=require("../Controllers/validator");

module.exports=async (req, res)=>{
    const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
    let x=await validator(req.body.pno, req.body.tokenval);
    if(x)
        res.json(data);
    else
        res.send(require("./badRequest"));
    
    mongoose.connection.close();
};