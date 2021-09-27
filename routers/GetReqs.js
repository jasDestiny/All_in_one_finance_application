const express=require("express");
const app= express();

app.get("/", (req, res)=>{
    res.send("<h1>Cha-Ching! Welcome to the home of Scroodge-McHack</h1>")
});

module.exports