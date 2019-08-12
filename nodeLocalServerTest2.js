const express = require("express");
const ex = express();


ex.get("/", function(req,res){
    res.send("Try adding /about in the URL!");
});

ex.get("/about", function(req,res){
    res.send("This is a Node.js training using express");
});


ex.listen(4000, function(){
    console.log("Server running at url http://localhost:4000");
});
