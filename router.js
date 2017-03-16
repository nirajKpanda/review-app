function route(handle, path, response, review){
	console.info('routing a request for ' + path);

	if (typeof handle[path] === 'function'){
		handle[path](response, review);
	}
	else {
		console.warn('No handler for ' + path);
		response.writeHead(404, {'Content-Type' : 'text/plain'});
		response.write('404 : Requested resource not found');
		response.end();
	}
}

exports.route = route;