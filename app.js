const port= process.env.PORT||6969;
const express=require("express");
const app= express();

app.get("/", (req, res)=>{
    res.send("<h1>Cha-Ching! Welcome to the home of Scroodge-McHack</h1>")
});

app.post("/auth/phno", (req, res)=>{

});

app.listen(port, ()=>{
    console.log(`Server started in port ${port}`);
});