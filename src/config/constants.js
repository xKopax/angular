"use strict";

module.exports = function() {

	var env = process.env.NODE_ENV || 'development';
	var appConstants = applicationConfig();

	var obj = {
		application : {
			url  : appConstants[env]['url'],
			host : appConstants[env]['host'],
			port : appConstants[env]['port'],
		}
	};

	if (!obj.application['host']) {
		throw new Error('Missing constant application.host. ' +
			'Check your enviroment variables NODE_HOST.');
	} else if (!obj.application['port']) {
		throw new Error('Missing constant application.port. ' +
			'Check your enviroment variable NODE_PORT.');
	}

	return obj;

	function applicationConfig(){

		var NODE_HOST_CLI = process.env.NODE_HOST_CLI;
		var NODE_PORT_CLI = process.env.NODE_PORT_CLI;

		return {
			'production' : {
				'url' : 'http://' + NODE_HOST_CLI + ':' + NODE_PORT_CLI,
				'host' : NODE_HOST_CLI,
				'port' : NODE_PORT_CLI
			},
			'development' : {
				'url' : 'http://' + NODE_HOST_CLI + ':' + NODE_PORT_CLI,
				'host' : NODE_HOST_CLI,
				'port' : NODE_PORT_CLI
			},
			'test' : {
				'url' : 'http://' + NODE_HOST_CLI + ':' + NODE_PORT_CLI,
				'host' : NODE_HOST_CLI,
				'port' : NODE_PORT_CLI
			}
		};
	}
}();
