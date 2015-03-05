/* Simple static file server built in Node.js: By Adam Winick: www.adamwinick.com */

var http = require('http');
var url = require('url');
var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(3333);

console.log("Server is started and listening on port: 3333.  Open a browser and go to http://localhost:3333/index.html");