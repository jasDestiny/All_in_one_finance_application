const mongoose=require("mongoose");
const OTPSchema= new mongoose.Schema(
    {
        UserId:{
            type:String,
            required: true
        },
        OTP:{
            type:String,
            required: true
        },
    }
);

const OTPData= mongoose.model("OTPData", OTPSchema, "OTPData");
module.exports=OTPData;
