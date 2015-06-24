angular.module("app").factory('AuthService', function($resource, config) {

	return $resource(config.baseUrl+'/api/v1/auth', {}, {
			show: { method: 'GET' },
			create: { method: 'POST' }
	})

});

