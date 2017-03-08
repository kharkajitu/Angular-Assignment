var express = require("express");
var app = express();

app.use(express.static(__dirname + '/'));

app.get("/",function(req,res){
    res.redirect("/assignmenttable/views/table.html");
});

app.listen("4200",function(req,res){
    console.log("localhost:4200");
});