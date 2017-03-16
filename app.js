` 
  Author : Niraj
  Module : app.js
  Function : Entrypoint to Review App aplication
  Port : 5000
  Urls : http://localhost:5000/
         http://localhost:5000/home 
         http://localhost:5000/review
  Comments : This app was developed in order to learn the basics of Node
`

var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {}
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;

server.startServer(router.route, handle);	