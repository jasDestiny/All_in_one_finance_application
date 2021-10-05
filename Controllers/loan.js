const mongoose=require("mongoose");
const TokenData=require("../models/Tokens");
const bodyParser = require('body-parser');
var axios = require("axios").default;
module.exports=async (req, res)=>{
    const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/AuthTokens?retryWrites=true&w=majority");
    let x=await TokenData.findOne({TokenId:req.body.tokenval, UserId:req.body.pno})
    if(x){
        let obj={
            "data": "1,1,1,0,0,4283,3000.0,172.0,84.0,1.0,0"
        };

        var options = {
            method: 'POST',
            url: 'https://wreuj8ffa6.execute-api.ap-south-1.amazonaws.com/Version0/',
            data: {
                "data": "1,1,1,0,0,4283,3000.0,172.0,84.0,1.0,0"
            }
        }

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }
    else{
        res.send("Invalid Token");
    }
};
