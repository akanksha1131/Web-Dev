import express from "express"
import ejs from "ejs";
import {dirname} from "path";
import { fileURLToPath } from "url";


const app=express();
const port=3000;
const d = new Date();
let day = d.getDay();
console.log(day);
let dayOfWeek=" ";
const currfilepath=dirname(fileURLToPath(import.meta.url));
const filepath=currfilepath+"/views/index.ejs"



if(day==0||day==6){
    dayOfWeek="weekend";
}
else{
    dayOfWeek="weekday";
}




app.get("/", (req,res)=>{
    res.render(filepath, {dayOfWeek2: dayOfWeek});
});

 app.listen(port, ()=>{
    console.log("success");
 });
