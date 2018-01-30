"use strict";
const PORT = 3000;
//import http library
const http = require('http');

function handleRequest(req, res)
{

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
console.log("Listening on port " + PORT);
});
