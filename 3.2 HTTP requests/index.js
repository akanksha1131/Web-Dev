import express from "express";
const app=express();
const port=3000;

app.get("/",(req, res)=>{
    res.send("home");
    console.log(req);
} )

app.get("/about",(req, res)=>{
    res.send("<h1>About us</h1>");
    console.log(req);
} )
app.listen(port, ()=>{
    console.log("working");

});