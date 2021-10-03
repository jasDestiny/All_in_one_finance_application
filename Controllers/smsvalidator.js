const mongoose=require("mongoose");
const OTPmodel= require("../models/OTP");
const regToken=require("../Controllers/registerToken");

module.exports= async (req, res)=>{
    const connector = await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/OTP?retryWrites=true&w=majority");
    console.log(req.body.pno, req.body.otp);
    let x=await OTPmodel.findOne({UserId:req.body.pno, OTP: req.body.otp })
    let tokenval=String(100000+parseInt(Math.random()*899999))
    mongoose.connection.close();
    if(x){
        await regToken(req.body.pno, tokenval)
        res.send(tokenval);
    }
    else{
        res.send("Invalid OTP")
    }
}