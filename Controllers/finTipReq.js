const data = require('../src/InvestmentTips.json')
const mongoose=require("mongoose");
const TokenData=require("../models/Tokens");
const bodyParser = require('body-parser');

module.exports=async (req, res)=>{
    const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/AuthTokens?retryWrites=true&w=majority");
    let x=await TokenData.findOne({TokenId:req.body.tokenval, UserId:req.body.pno})
    if(x)
        res.json(data);
    else{
        res.send("Invalid Token");
    }
    mongoose.connection.close();
};