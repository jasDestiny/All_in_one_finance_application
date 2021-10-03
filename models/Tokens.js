const mongoose=require("mongoose");

const TokenSchema= new mongoose.Schema(
    {
        TokenId:{
            type:String,
            required: false
        },
        UserId:{
            type:String,
            required: false
        },
        TimeStamp:{
            type:String,
            required: false
        }
    }
);

const TokenData= mongoose.model("TokenData", TokenSchema, "TokenData");
module.exports=TokenData;
