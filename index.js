const express = require("express");

const app = express();

app.get("/books",logger,function(req,res){
    console.log("route: /books")
return res.send({route: "/books"})
})

app.get("/libraries",logger,function(req,res){
    console.log("route: /libraries")
    return res.send({route: "/libraries", permission: true})
})
app.get("/authors",logger,function(req,res){
    console.log("route: /authors")
    return res.send({route: "/authors", permission: true})
})

function logger(req,res,next){
    console.log("before logger")
    next();
    console.log("after logger")
}

function checkPermission(data){
    return function logger1(res,req,next){

       if(data=="librarian"){
         next();
       }
       else if(data = "author"){
           next();
       }
    }
 

}

app.listen(5000,()=>{
    console.log("listen to port 5000")
})