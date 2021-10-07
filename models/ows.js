const mongoose=require("mongoose");
const OwsSchema= new mongoose.Schema(
    {
        LenderId:{
            type:String,
            required: true
        },
        TimePeriod:{
            type:String,
            required:true
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

const OwsData= mongoose.model("OwsSchema", OwsSchema, "OwsSchema");
module.exports=OwsData;
