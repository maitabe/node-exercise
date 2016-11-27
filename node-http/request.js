
//dependency
var http = require('http');
var request = require("request");

// var init
var hostname = 'localhost';
var port = 8000;

//http GET request to an specific URL
request('https://github.com', function(error, response, body){
  if (!error && response.statusCode === 200){
    http.createServer(function(req, res){
    	// code handle every request to the server
    	console.log('user request');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(body);
    }).listen(port, hostname, function(){
      console.log('Server running at http://' + hostname + port);
    });
  }
});