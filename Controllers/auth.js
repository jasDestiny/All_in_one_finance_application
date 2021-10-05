const axios = require("axios").default;
const OTPmodel= require("../models/OTP");
const mongoose= require("mongoose");
const sms=require("fast-two-sms");
const key=require('../config/smsapi');
const createAccount=requre("../Controllers/simulator");

module.exports=async (req, res)=>{
    const pno=req.body.pno;
    const pan=req.body.pan;
    const otp= String(Math.floor(100000+(Math.random() * 899999)));
    console.log(pno, pan, otp);
    let response="OTP sent successfully"
    await (async ()=>{
        const connector = mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/OTP?retryWrites=true&w=majority");
        const x=await OTPmodel.findOne({UserId:pno});
        if(x!==null){
            await OTPmodel.findOneAndUpdate({UserId:pno}, {OTP:otp})
        }
        else{
            await new OTPmodel({UserId:pno,OTP:otp}).save();
            await createAccount(pno, pan);
        }
        await sms.sendMessage({authorization : key , message : otp ,  numbers : [pno]});
    })();
    mongoose.connection.close();
    res.json({"code":"200", "res":response});
};