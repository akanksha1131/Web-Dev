const fs =require("fs");
// fs.writeFile("message.txt", "written to message.txt", (err)=>{
//     if(err) throw err;
//     console.log("saved!");
// });

fs.readFile("message.txt", "utf-8", (err, data)=>{
    if(err) throw err;
    console.log(data);
});