import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "56364cea-ae81-4bcc-9a12-140a9755bb77";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  const id=req.body.id;
  try {
    const response=await axios.post(API_URL + "/secrets",
      {
        "secret": req.body.secret,
        "score": req.body.score
      }, config
    );
    res.render("index.ejs", {content: JSON.stringify(response.data)});
   
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/put-secret", async (req, res) => {
  const id=req.body.id;
  try {
    const response=await axios.put(API_URL + "/secrets"+"/"+id,
      {
        "secret": req.body.secret,
        "score": req.body.score
      }, config
    );
    res.render("index.ejs", {content: JSON.stringify(response.data)});
   
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/patch-secret", async (req, res) => {
  const id=req.body.id;
  try {
      var change={};
      if(req.body.secret!=''){
         change["secret"]=req.body.secret;
         console.log(change);
        }
        if(req.body.score!=''){
          change["score"]=req.body.score;
          console.log(change);
         }


    const response=await axios.patch(API_URL + "/secrets"+"/"+id,
      change, config
    );
    res.render("index.ejs", {content: JSON.stringify(response.data)});
   
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});



app.post("/delete-secret", async (req, res) => { 
  
  try {
       const id=req.body.id;
      const response=await axios.delete(API_URL + "/secrets"+"/"+id,
       config
    );
    res.render("index.ejs", {content: JSON.stringify(response.data)});
   
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
