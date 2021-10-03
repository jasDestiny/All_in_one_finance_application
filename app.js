const port= process.env.PORT||6969;
const express=require("express");
const app= express();


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", require("./Controllers/home"));
app.post("/query/fintip/", require("./Controllers/finTipReq"));
app.post("/users/auth/", require("./Controllers/auth"));
app.post("/users/auth/otp/", require("./Controllers/smsvalidator"));
app.post("/query/loan", require("./Controllers/loan"));

app.listen(port, require("./Controllers/serverstart"));