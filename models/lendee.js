const mongoose=require("mongoose");
const LendeeSchema= new mongoose.Schema(
    {
        UserId:{
            type:String,
            required: true
        },
        Amount:{
            type:String,
            required: true
        },
        LendeeId:{
            type:String,
            required: true
        }
    }
);

const LendeeData= mongoose.model("LendeeData", LendeeSchema, "LendeeData");
module.exports=LendeeData;
