angular.module("app").factory('UsuarioService', function($resource, config) {

	return $resource(config.baseUrl+'/api/v1/usuarios/:id', {}, {
			show: { method: 'GET' },
			query: { method: 'GET', isArray: true },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} },
			create: { method: 'POST' }
	})

});
