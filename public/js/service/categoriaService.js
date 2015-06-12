angular.module("app").factory('CategoriaService', function($resource, config) {
	return $resource(config.baseUrl+'/api/v1/categorias');
});
