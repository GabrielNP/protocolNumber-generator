// Basic Node server
var http = require('http');

var server = http.createServer(function(req,res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello world\n");
})

server.listen(3002, function() {
    console.log('server is running on port 3002')
})