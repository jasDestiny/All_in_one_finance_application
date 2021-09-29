const port= process.env.PORT||6969;
const express=require("express");
const app= express();


app.get("/", require("./Controllers/home"));
app.get("/query/fintip/", require("./Controllers/finTipReq"))
app.listen(port, require("./Controllers/serverstart"));