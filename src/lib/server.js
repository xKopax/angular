var Hapi = require('hapi');

var constants = require('../config/constants.js');
var plugins = require('../plugins');

var server = new Hapi.Server();

server.connection({
  	host: constants.application['host'],
  	port: constants.application['port'],
    routes: {
        cors: true
    }
});

server.register(plugins, function(err){
  if(err)
    throw err;
});

module.exports = server;
