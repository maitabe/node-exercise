//create our own web server

var http = require('http');

var hostname = 'localhost';
var port = 8000;




http.createServer(function (req, res){
	console.log('request is getting in...');
	var x = Math.floor(Math.random()*20 + 20);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('The weather today is: ' + x + ' degrees');
}).listen(port, hostname, function (){
  console.log('Server 1 running at http://' + hostname + ':' + port + '/');
});

//================

// var http = require('http');

var port2 = 8001;


var person = JSON.stringify({
  name: 'Bob1',
  age: 92,
  hair: false
});



http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(person);
}).listen(port2, hostname, function() {
	console.log('Server 2 running at http://' + hostname + ':' + port2 + '/');
});