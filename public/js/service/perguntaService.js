angular.module("app").factory('PerguntaService', function($resource, config) {

	return $resource(config.baseUrl+'/api/v1/perguntas/:id', {}, {
			show: { method: 'GET' },
			query: { method: 'GET', isArray: true },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} },
			create: { method: 'POST' }
	})

});
