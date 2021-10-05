const mongoose=require("mongoose");

const TransactionSchema=new mongoose.Schema({TransactionType:String, TransactionAmount: String});
const UserAccounts=new mongoose.Schema(
    {
        AccountId: String,
        AccountName: String,
        AccountNumber: String,
        Transactions: [TransactionSchema]
    }
);
const UserAccountSchema=new mongoose.Schema(
    {
        Name:String,
        Gender:String,
        Phone:String,
        Pan:String,
        Dependants:String,
        Education:String,
        SelfEmployed:String,
        ApplicantIncome:String,
        CoapplicantIncome:String,
        CreditHistory:String,
        Loan1:String,
        Loan3:String,
        Married:String,
        CombinedBalance:String,
        Accounts:[UserAccounts],
    }
);
const UserAccountData= mongoose.model("UserAccount", UserAccountSchema, "UserAccount");
module.exports=UserAccountData;
