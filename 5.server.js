function handleHTTP(req,res) {
	if (req.method === "GET") {
		if (req.url === "/") {
			res.writeHead(200, {"Content-type": "text/plain"})
			
			ASQ(function (done) {
				setTimeout(function () {
					done(Math.random());
				},1000);
			})
			.then(function (done,num) {
				setTimeout(function (){
					done("Hello World: " + num);
				},1000);
			})
			.val(function(msg) {
				res.end(msg);
			});
				
		}else{
			res.writeHead(403);
			res.end("Get outta here!");	
		}
		
	}else {
		res.writeHead(403);
		res.end("Get outta here!");
	}
	
}

var host = "localhost";
var port = 8006;

var http = require("http");
var http_serv = http.createServer(handleHTTP).listen(port, host);

var ASQ = require("asynquence");

