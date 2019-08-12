const express = require("express");
const ex = express();

ex.get("/", function(req,res){
    res.send("Thats the 2nd express training site");
})

ex.get("/name/:name", function(req,res){
    res.send("Hello "+ req.params.name + "!");
});

ex.listen(4000, function(){
    console.log("Running at http://localhost:4000");
});