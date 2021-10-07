const mongoose=require("mongoose");
const TokenData=require("../models/Tokens");
const bodyParser = require('body-parser');
const validator=require("../Controllers/validator");
const UserAccount=require("../models/UserAccount");
var axios = require("axios").default;

module.exports=async (req, res)=>{
    const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
    console.log(req.body.pno+" "+req.body.tokenval);
    let x=await validator(req.body.pno, req.body.tokenval)
    if(x){
        let obj={
            "data": "1,1,1,0,0,4283,3000.0,172.0,84.0,1.0,0"
        };

        let y=await UserAccount.findOne({
            UserId:req.body.pno
        });

        var options = {
            method: 'POST',
            url: 'https://wreuj8ffa6.execute-api.ap-south-1.amazonaws.com/Version0/',
            data: {
                "data": y.Loan1+","+req.body.amount+","+req.body.term+","+y.Loan3
            }
        }
        let prob=0;
        axios.request(options).then(function (response) {
            console.log(response.data);
            prob=response.data
        }).catch(function (error) {
            console.error(error);
        });

        res.send({
            probablity:prob
        });

    }
    else
        res.send(require("./badRequest"));
    
};
