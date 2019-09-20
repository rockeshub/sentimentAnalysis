'use strict';

const Hapi=require('hapi');

var Sentiment = require('sentiment');


// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});


// Add the route
server.route({
    method:'GET',
    path:'/sentiment',
    handler:function(request,h) {
	var sentiment = new Sentiment();
	var result = sentiment.analyze('Cats are stupid.');
	console.dir(result); 
        return'hello world';
    }
});

server.route({
    method: ['PUT', 'POST'],
    path: '/sentiment',
    handler: function (request, h) {
        console.log(request.payload.text);
var sentiment = new Sentiment();
var result = sentiment.analyze(request.payload.text);
console.log(result); 
        return result;
    }
});

// Start the server
async function start() {
    await server.register(require('inert'));

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'dist',
            index: ['index.html', 'default.html']
        }
    }
});
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
