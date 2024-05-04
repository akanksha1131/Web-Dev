import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
var allPosts=[];
var ID = 1000;
const port=3000;
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


function printAllPosts(){
    for(var i=0; i<allPosts.length;i++){
        var post=allPosts[i];
        console.log("Title: "+post.blogTitle+"| Content: "+post.blogContent+" | blogID: "+post.blogID);
    }
}

function createPost(reqBody){
    var post = {
        blogTitle : reqBody['blogTitle'],
        blogContent : reqBody['blogContent'],
        blogID: ID + 1
    }
    ID = ID+1;
    allPosts.push(post);
    printAllPosts();
    console.log("in constructor function "+post.blogTitle+ " content is: "+post.blogContent );

}

function findIndex(postID){
    for (var i=0;i <allPosts.length;i++){
        if (allPosts[i]["blogID"]==postID){
            return i;
        }
    }
    return -1;
}


function deletePost(postID){
    var indexOfPost=findIndex(postID);
    const x=allPosts.splice(indexOfPost, 1);
    // allPosts=x;
    console.log("---------------- allPosts after deletion are: ");
    printAllPosts();
    
}

function getPost(postID){
    var indexOfPost=findIndex(postID);
    return allPosts[indexOfPost];
}

app.post("/update", (req,res)=>{
    
    let postToUpdate = getPost(req.body["blogID"]);
    console.log("*****UPDATE FUNCTION"+postToUpdate["blogTitle"]);
    res.render("update.ejs", {post : postToUpdate})
});

app.post("/read", (req,res)=>{
    
    let postToRead = getPost(req.body["blogID"]);
    console.log("*****UPDATE FUNCTION"+postToRead["blogTitle"]);
    res.render("read.ejs", {post : postToRead});
});

app.post("/updatepost", (req,res)=>{
    console.log("*****UPDATE FUNCTION"+req.body);
    let postToUpdateObject = getPost(req.body["blogID"]);
    const newTitle=req.body["newBlogTitle"];
    const newContent=req.body["newBlogContent"];
    postToUpdateObject.blogContent=newContent;
    postToUpdateObject.blogTitle=newTitle;
    res.render("read.ejs", {post : postToUpdateObject})
});

app.post("/write", (req,res)=>{
    console.log(req.body);
    createPost(req.body);
    // console.log("in post function "+allPosts);
    // res.render("index.ejs",{posts: allPosts});
    res.redirect('/');
});

app.post("/delete", (req,res) => {
    console.log("in DELETE FUNCTION req body:   "+req.body);
    console.log("req body:   "+req.body["blogID"]);
    deletePost(req.body["blogID"]);
    res.redirect('/');
})

app.get("/write", (req,res)=>{
    res.render("write.ejs");
});

app.get("/joke", async (req,res)=>{
    try{
        const response=await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
        console.log("/joke called:        "+response.data.setup+" "+response.data.delivery);
        res.render("joke.ejs", {"setup":response.data.setup , "delivery":response.data.delivery});
    }
    catch(error){
        console.error("failed", error.message);
        res.status(500).send("errro joke");
    }
    
});

app.get("/", (req,res)=>{
    res.render("index.ejs",{posts: allPosts});
});
app.listen(port,()=>{console.log("Server running at port 3000");});