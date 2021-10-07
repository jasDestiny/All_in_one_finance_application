const mongoose=require("mongoose");
const TokenData=require("../models/Tokens");
const bodyParser = require('body-parser');
const validator=require("./validator");
const UserAccount=require("../models/UserAccount");
const LenderData=require("../models/lender");
const LendeeData=require("../models/lendee");
const OwsData= require("../models/ows");

module.exports=async (req, res)=>{
    const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
    let x=await validator(req.body.pno, req.body.tokenval);
    if(!x){
        res.send(require("./badRequest"));
    }

    let lender=req.body.lender;
    let lendee=req.body.lendee; 
    let amount=req.body.amount;
    let duration= req.body.duration;

    await new LenderData({
        UserId:lendee,
        Amount:amount,
        LenderId: lender
    }).save();

    await new LendeeData({
        UserId:lender,
        Amount:amount,
        LendeeId: lendee
    }).save();

    await new OwsData({
        Lender:lender,
        TimePeriod:duration,
        Amount:amount,
        LenderId:lender
    }).save();

    res.send({
        StatusCode:"200",
        P2PStatus:"Applied Successfully"
    })
}