const validator=require("../Controllers/validator");
module.exports=async (req, res)=>{
    let x= await validator(req.body.pno, req.body.tokenval);
    if(x===null){
        res.send("invalid token");
    }
    let tips=[];

    let income=Number(req.body.income);
    let houseRentA=Number(req.body.houseRentA);
    let propInc=Number(req.body.propInc);
    let fd=Number(req.body.fd);
    let otherCapGain=Number(req.body.otherCapGain);
    let savInt=Number(req.body.savInt);
    let nps=Number(req.body.nps);
    let medInsFam=Number(req.body.medInsFam);
    let rent=Number(req.body.rent);
    let epf=Number(req.body.epf);
    let nsc=Number(req.body.nsc);
    let tuition=Number(req.body.tuition);
    let houseLoan=Number(req.body.houseLoan);
    let insurance=Number(req.body.insurance);
    let hlinterest=Number(req.body.hlinterest);
    let proTax=Number(req.body.proTax);
    let taxAlreadyPaid=Number(req.body.taxAlreadyPaid);

    
    let gross=income-rent;
    console.log("gross"+ gross);
    gross-=50000
    gross-=(houseRentA+proTax);
    gross=Math.max(0, gross)
    console.log("gross"+ gross);
    if(houseRentA==0)
        tips.push("House rent allowance can help in reduction of gross amount");
    if(proTax==0)
        tips.push("Paying professional tax helps in reduction of tax amount");
    if(houseLoan<200000){
        if(houseLoan*hlinterest<=0)
            tips.push("Take a houseloan to get tax payoff upto 2 lakhs in interest");
        else
            tips.push("Take a larger loan to get payoffs upto 2 lakhs in intersts");
    }

    
    // gross

    let additives= fd+propInc+otherCapGain+savInt;

    if(additives>0){
        if(fd>0){
            tips.push("FDs and RDs increase your tax. Invest on something to have a tax reduction");
        }

        if(savInt>0){
            tips.push("Invest more on stocks over saving accounts. It cuts taxes and also value of money depreciates everyday");
        }
    }

    //additives
    gross+=additives;
    console.log("gross"+ gross);
    //deduction
    let deduction=(epf+ (0.2*insurance)+tuition+houseLoan+nsc)
    if(deduction<150000){
        if(insurance<=0)
            tips.push("Personal insurance premium deducts upto 20% of sum assured");
        if(houseLoan<=150000)
            tips.push("Repaying house loan principal helps in cuting the tax upto 1.5 lakhs INR");
        if(nsc==0)
            tips.push("Taking a savings certificate helps in tax reduction");
    }
    if(tuition>150000)
        tips.push("Split tuition fee with your partner for most optimal reduction");
    if(tuition<150000)
        tips.push("Tuition fee upto 1.5 lakhs INR helps in tax reductions");
    deduction=Math.min(deduction, 150000);
    gross-=deduction;

    //singular reductions

    gross-=Math.min(50000,nps);
    if(nps<50000)
        tips.push("NPS upto 50k INR helps in tax reduction");
    
    gross-=Math.min(25000, medInsFam);
    if(medInsFam)
        tips.push("Medical insurance for family members help to take upto 25k off the tax");

    gross-=Math.min(10000, savInt);
    gross=Math.round(gross);
    gross=Math.max(0, gross);

    console.log("gross"+gross)
    //taxable gross income

    let tax=0;
    if(gross<=250000)
        tax=0;
    
    else if(gross>250000 && gross<500000)
        tax=gross*0.05;
    
    else
        tax=((gross-500000)*0.2)+12500
    
        
    tax+= (0.04*tax);
    
    
    console.log("tax"+ tax);
    res.send({
        tax:Math.round(tax),
        tips:tips
    });
}