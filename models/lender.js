const mongoose=require("mongoose");
const LenderSchema= new mongoose.Schema(
    {
        UserId:{
            type:String,
            required: true
        },
        Amount:{
            type:String,
            required: true
        },
        LenderId:{
            type:String,
            required: true
        }
    }
);

const LenderData= mongoose.model("LenderData", LenderSchema, "LenderData");
module.exports=LenderData;
