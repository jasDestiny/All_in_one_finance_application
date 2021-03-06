const mongoose=require("mongoose");
const TokenData=require("../models/Tokens");
const bodyParser = require('body-parser');
const validator=require("./validator");
const UserAccount=require("../models/UserAccount");
var axios = require("axios").default;

module.exports=async (req, res)=>{
    const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
    let x=await validator(req.body.pno, req.body.tokenval);

    if(!x){
        res.send(require("./badRequest"));
    }

    let budget=Number(req.body.budget);
    let needs=0.5*budget;
    let wants= 0.3*budget;
    let savings=0.2*budget;
    let account=await UserAccount.findOne({Phone:req.body.pno});

    let TotalTransaction=[];
    let TotalMoneySpent=0;
    for(i=0; i<account.Accounts.length;i++){
        let thisTransactions=account.Accounts[i].Transactions;
        //console.log(thisTransactions);
        for(j=0; j<thisTransactions.length; j++)
        {
            //console.log(thisTransactions[j])
            let x=thisTransactions[j].TransactionType;
            let y=thisTransactions[j].TransactionAmount;;
            if(x!="deposit")
            {
                TotalTransaction.push({TransactionType:x, Money: y});
                TotalMoneySpent+=Number(y)
            }
            
        }
    }

    let result= needs+wants>TotalMoneySpent? "You are on track to meeting your financal goals" : "You can reduce more of your spendings to be with your financial goals";

    console.log(needs+wants+" "+TotalMoneySpent);
    console.log(result);
    res.send({
        RecommendedSpendings:{
            needs:needs,
            wants:wants,
            savings:savings
        },
        SpendingsSoFar:TotalTransaction,
        Tips:result
    });
};

