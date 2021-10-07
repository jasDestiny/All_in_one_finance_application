const port= process.env.PORT||6969;
const express=require("express");
const app= express();


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", require("./Controllers/home"));
app.post("/query/fintip/", require("./Controllers/finTipReq")); // tokenval, pno
app.post("/users/auth/", require("./Controllers/auth")); // pno, pan
app.post("/users/auth/otp/", require("./Controllers/smsValidator")); //pno, otp
app.post("/query/loan/", require("./Controllers/loan")); // tokenval, pno, amount, term
app.post("/query/incomeTax/", require("./Controllers/incomeTaxCalculator")); // income, propInc, fd, otherCapGain, (taxAlreadyPaid, hlinterest, houseRentA, proTax, savInt, nps, medInsFam, rent, (epf, nsc, tuition, houseLoan, insurance)), tokenval
app.post("/query/spendingAdvisor/", require("./Controllers/spendingAdvisor")); // pno, tokenval, 
app.post("/query/data/reddit/", require("./Controllers/reddit")); // pno, tokenval

app.post("/query/credit/p2p/", require("./Controllers/p2p")); // pno, tokenval, lender, lendee, duration
app.post("/query/credit/virtualcredits/", require("./Controllers/virtualcredits")); // pno, tekenval
app.listen(port, require("./Controllers/serverStart"));