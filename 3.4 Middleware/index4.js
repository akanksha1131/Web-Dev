
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
//import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit", (req,res)=>{
  console.log(req.body);
  var streetName=req.body.street;
  var petName=req.body.pet;
  var BandName=streetName+petName;
  res.send(`<h1>Your Band Name is </h1>  <h2>${BandName}  ꧁𝔂𝓪𝓼𝓼 𝓺𝓾𝓮𝓮𝓷꧂</h2>` );
  //res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});