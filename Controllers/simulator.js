const gaussian= require("gaussian");
const generator = require('creditcard-generator');
const mongoose= require("mongoose");
const faker= require("faker");
const UserAccount=require("../models/UserAccount");

module.exports= async (pno, panno)=>{
    let name=faker.name.firstName()+" " +faker.name.lastName();
    let Gender= Math.random()>0.5? "1": "0";	
    let Married= Math.random()<0.56? "1": "0";
    
    //dependants distribution (3)
    let distribution=new gaussian(1, 2);
    let Dependents=	String(Math.round(Math.abs(distribution.ppf(Math.random()))));
    
    // edcation (4)
    distribution= new gaussian(1, 1);
    let education=	String(Math.round(Math.abs(distribution.ppf(Math.random()))));
    
    // employed (5)
    let Self_Employed= Math.random()>0.9? "1": "0";
    
    // income (6)
    distribution=new gaussian(25000, 2000000000);
    let ApplicantIncome= String(10000+Math.round(Math.abs(distribution.ppf(Math.random()))));
    let CoapplicantIncome= String(10000+Math.round(Math.abs(distribution.ppf(Math.random()))));	
    
    // LoanAmount	
    // Loan_Amount_Term	
    
    // credit history(8)
    distribution=new gaussian(4, 5);
    let Credit_History=	String(Math.min(8,Math.round(Math.abs(distribution.ppf(Math.random())))));

    //property area (9)
    distribution=new gaussian(1000, 4000);
    let Property_Area= String(Math.round(Math.abs(distribution.ppf(Math.random()))));

    let Loan1Arr=[Gender,Married,Dependents,education,Self_Employed,ApplicantIncome,CoapplicantIncome];
    let Loan3Arr=[Credit_History, Property_Area];
    let Loan1= Loan1Arr.join(",");
    let Loan2= ",172.0,84.0,";
    let Loan3= Loan3Arr.join(",");

    // banks 
    distribution=new gaussian(2, 4);
    let nBanks= String(Math.max(1, Math.round(Math.abs(distribution.ppf(Math.random())))));
    
    // Will return 1 MasterCardNumber 
    for(i=0;i<nBanks; i++){
        
    }

    
   accounts=[];

    for (let i = 0; i < nBanks; i++) {
        let accName=faker.finance.account();
        let transactions=[];
        for(j=0;j<1+Math.round(Math.random()*10);j++){
            transactions.push({
                "TransactionType":faker.finance.transactionType(),
                "TransactionAmount":faker.finance.amount()
            });
            console.log(transactions[String(j)]);
        }
        accounts.push({
            "AccountId":accName,
            "AccountName":faker.finance.accountName(),
            "AccountNumber": String(String(1+Math.round(Math.random()*43))) + String(Math.round(Math.pow(10, 15)*Math.random())),
            "Transactions": transactions
        });
    }

    console.log(accounts);
    const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
    
    await new UserAccount({
        Name:name,
        Gender:Gender,
        Phone:pno,
        Pan:panno,
        Dependants:Dependents,
        Education:education,
        SelfEmployed:Self_Employed,
        ApplicantIncome:ApplicantIncome,
        CoapplicantIncome:CoapplicantIncome,
        CreditHistory:Credit_History,
        Loan1:Loan1,
        Loan3:Loan3,
        Married:Married,
        CombinedBalance: String(10000+Math.round(10000000*Math.random())),
        Accounts:accounts}).save();
    mongoose.connection.close();
    return name;
}

console.log(module.exports());