import express from "express";
const app=express();
const port=3000;
console.log("import here "+import.meta.url);

app.listen(port, ()=>{
    console.log("listening");
});
app.get("/",(req,res)=>{
    res.sendStatus(200);
});
app.post("/register",(req,res)=>{
    res.sendStatus(201);
});
app.patch("/about",(req,res)=>{
    res.sendStatus(200);
});
app.put("/put",(req,res)=>{
    res.sendStatus(200);
});
app.delete("/delete",(req,res)=>{
    res.sendStatus(200);
});