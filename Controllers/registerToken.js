const mongoose= require("mongoose");
const TokenData=require("../models/Tokens");
let fn= async (pno, token)=>{
    const connection= await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
    let timeval= String(parseInt(new Date().getTime()/10000));
    const x=await TokenData.findOne({UserId:pno});
        if(x!==null){
            await TokenData.findOneAndUpdate({UserId:pno}, {TimeStamp:timeval, TokenId:token})
        }
        else{
            await new TokenData({TokenId:token, UserId:pno, TimeStamp:timeval}).save();
        }
  
    mongoose.connection.close();
    
}

module.exports=fn;