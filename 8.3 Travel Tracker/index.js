import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
// var visited_countries=[];
const db= new pg.Client(
{
  user :"postgres" ,
  host : "localhost",
  database: "world",
  password: "akanksha123",
  port: 5432
}
);
db.connect();
console.log("connected");


// var list_country_code=[];
// visited_countries.forEach(code=>{
//   list_country_code.push(code["country_code"]);
// });
// console.log("list of country codes:      "+list_country_code);






app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  var country_code_list=[];
  const result = await db.query("SELECT country_code from visited_countries ");
  result.rows.forEach(country=>{
  country_code_list.push(country.country_code)});
  console.log(country_code_list);
    res.render("index.ejs", {countries: country_code_list, total: country_code_list.length});

});

app.post("/add",async (req,res)=>{
  const country=req.body.country;
 // country.trim();
  const result = await db.query("SELECT country_code from countries where country_name = $1",[country]);
  console.log(result.rows);
 let countryCode=" ";
  
  result.rows.forEach(country=>{
    countryCode=country.country_code;
  })
   if(result.rows.length!=0){
    const addInDb = await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
    console.log("finish");
    
   }
   res.redirect("/");

});
  


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
