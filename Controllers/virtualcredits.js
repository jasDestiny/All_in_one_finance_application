const mongoose=require("mongoose");
const TokenData=require("../models/Tokens");
const bodyParser = require('body-parser');
const validator=require("./validator");
const UserAccount=require("../models/UserAccount");

module.exports=async (req, res)=>{
    
    const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
    let x=await validator(req.body.pno, req.body.tokenval);
    if(!x){
        res.send(require("./badRequest"));
    }
    let account=await UserAccount.findOne({Phone:req.body.pno});
    let TotalMoneySpent=0;
    for(i=0; i<account.Accounts.length;i++){
        let thisTransactions=account.Accounts[i].Transactions;
        //console.log(thisTransactions);
        for(j=0; j<thisTransactions.length; j++)
        {
            let x=thisTransactions[j].TransactionType;
            let y=thisTransactions[j].TransactionAmount;;
            if(x!="deposit")
            {
                TotalMoneySpent+=Number(y)
            }
            
        }
    }

    res.send({
        PossibleCreditsNextMonth:TotalMoneySpent
    });
}