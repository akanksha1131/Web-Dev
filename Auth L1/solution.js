import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt"

const app = express();
const port = 3000;
const saltRounds=10;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "akanksha123",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = ($1)", [
      email
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
        bcrypt.hash(password, saltRounds, async (err, hashedPassword)=>{
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [email, hashedPassword]
          );
          console.log(result);
          res.render("secrets.ejs");

        });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  console.log("here just inside /login");
  const email = req.body.username;
  const password = req.body.password;
  console.log("type of email   "+typeof(email));


  try {
    console.log("here above query");

    //const result = await db.query("SELECT * FROM users");
    const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
     email
    ]);
    console.log(result.rows);



    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      console.log("here outside bcrypt");
      bcrypt.compare(password, storedPassword, (err, ans)=>{
        if(err){console.log(err);}
        else{
          if(ans==true){
            console.log("here");
            res.render("secrets.ejs");
          }
          else {
            res.send("Incorrect Password");
          }
  
        }
      });
    }
    else{
      res.send("User doesnt exist");
    }


  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
