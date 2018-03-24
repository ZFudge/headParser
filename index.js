var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	var header = req.headers;
	var obj = {
		ipaddress: req.headers['x-forwarded-for'].split(',')[0] || req.connection.remoteAddress,
		language: header['accept-language'].split(",")[0],
		software: header['user-agent'].split(/[()]/)[1]
	};
	res.end(JSON.stringify(obj));
}).listen(3000);

