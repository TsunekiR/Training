const http = require("http");


http.createServer(function(req,res){
    res.end("Helo world!");
}).listen(4000);