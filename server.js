var http = require('http');
var url = require('url');


function startServer(route, handle){
	function onRequest(req, res){
		var reviewData = "";
		var pathname = url.parse(req.url).pathname;
		console.log('http request received for ' + pathname);
		req.setEncoding('utf8');
		req.addListener('data', function(data){
			reviewData += data;
		});
		req.addListener('end', function(){
			route(handle, pathname, res, reviewData);
		});
	}
	http.createServer(onRequest).listen(5000);
	console.info('Review app is up... Enjoy httping... :)');
}

exports.startServer = startServer;