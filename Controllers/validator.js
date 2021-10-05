const mongoose=require("mongoose");
const tokens=require("../models/Tokens");

module.exports=async (pno, tokenId)=>{
    console.log(pno+" "+tokenId);
    const connection= await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
    let response=0;
    let x=await tokens.findOne({$and:[{TokenId:tokenId}, {UserId:pno}]});
    console.log(x);
    if(x!==null)
        response=1
    await mongoose.connection.close();
    console.log(response)
    return response;
    
};