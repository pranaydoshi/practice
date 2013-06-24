var http = require("http");
var url = require("url")
var querystring = require("querystring")

function start(route,handle)
{
	function onResponse(request,response){
                var path = url.parse(request.url).pathname;
                console.log("Request for " + path + " received");
		route(path,handle,response,request);
	}

	http.createServer(onResponse).listen(8888);
	console.log("Server started");
}

exports.start = start
