//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import { dirname } from "path";
const port = 3000;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = __dirname + "/public/index.html";
const secretPath = __dirname + "/public/secret.html";

var check = false;

function validatePass(pass){
    const correct = "ILoveProgramming";
    return (correct==pass);
}

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.sendFile(indexPath);
})
app.get("/secrets", (req,res) => {
    if (check == false){
        res.sendFile(indexPath);
    }
})

app.post("/check", (req,res) => {
    console.log(req.body.password)
    var val = validatePass(req.body.password);
    if (val===true){
        check = true;
        console.log("secretpath as input was: "+req.body.password);
        res.sendFile(secretPath);
        console.log(secretPath);
        //res.sendStatus(200);
    }else{
        console.log("indexpath as input was: "+req.body.password);
        res.sendFile(indexPath);
        console.log(indexPath);
        //res.sendStatus(200);


    }
    

})

app.listen(port, () =>{
    // if (err) throw err;
    console.log("success");
})


