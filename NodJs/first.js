var http = requrie('http');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('Hello World!');
}).listen(8080);