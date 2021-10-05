const port= process.env.PORT||6969;
const express=require("express");
const app= express();


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", require("./Controllers/home"));
app.post("/query/fintip/", require("./Controllers/finTipReq")); // tokenval, pno
app.post("/users/auth/", require("./Controllers/auth")); // pno, pan
app.post("/users/auth/otp/", require("./Controllers/smsvalidator")); //pno, otp
app.post("/query/loan/", require("./Controllers/loan")); // tokenval, pno, amount, term
app.post("/query/incometax/", require("./Controllers/IncomeTaxCalculator")); // income, propInc, fd, otherCapGain, (taxAlreadyPaid, hlinterest, houseRentA, proTax, savInt, nps, medInsFam, rent, (epf, nsc, tuition, houseLoan, insurance)), tokenval

app.listen(port, require("./Controllers/serverstart"));