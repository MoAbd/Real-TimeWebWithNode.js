function handleHTTP(req,res) {
	if (req.method === "GET") {
		
		if (/^\/\d+(?=$|[\/?#])/.test(req.url)) {
			req.addListener("end",function(){
				req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html");
				static_files.serve(req,res);
			});
			req.resume();	
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
var port = 8007;

var http = require("http");
var http_serv = http.Server(handleHTTP);

var ASQ = require("asynquence");

var node_static = require("node-static");
var static_files = new node_static.Server(__dirname);

var io = require("socket.io")(http_serv);

//Whenever someone connects this gets executed
io.on('connection', function(socket){
  console.log('A user connected');
  var intv = setInterval(function() {
  	socket.emit("hello",Math.random())
  },1000);

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });

});


//io.listen(http_serv);
http_serv.listen(port, host);