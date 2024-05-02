import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

function logger(req, res, next){
  console.log("Request Method: "+req.method);
  console.log("Request url: "+req.url);
  console.log("response status: "+res.status().Code);

  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
